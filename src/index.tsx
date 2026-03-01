import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-pages'

// Import page templates
import { homePage } from './pages/home'
import { aboutPage } from './pages/about'
import { blogPage } from './pages/blog'
import { speakingPage } from './pages/speaking'
import { contactPage } from './pages/contact'
import { newsletterPage } from './pages/newsletter'
import { privacyPage } from './pages/privacy'
import { termsPage } from './pages/terms'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic())

// Pages
app.get('/', (c) => c.html(homePage()))
app.get('/about', (c) => c.html(aboutPage()))
app.get('/blog', (c) => c.html(blogPage()))
app.get('/blog/:slug', (c) => c.html(blogPage(c.req.param('slug'))))
app.get('/speaking', (c) => c.html(speakingPage()))
app.get('/contact', (c) => c.html(contactPage()))
app.get('/newsletter', (c) => c.html(newsletterPage()))
app.get('/privacy', (c) => c.html(privacyPage()))
app.get('/terms', (c) => c.html(termsPage()))

// API endpoints for forms

// Newsletter Integration - Supports SendFox, ConvertKit, and Beehiiv
app.post('/api/newsletter', async (c) => {
  try {
    const body = await c.req.json()
    const { email, firstName, lastName, interest } = body

    if (!email) {
      return c.json({ success: false, message: 'Email is required' }, 400)
    }

    // Get environment bindings for API keys
    const env = c.env as {
      NEWSLETTER_PROVIDER?: string
      SENDFOX_API_TOKEN?: string
      SENDFOX_LIST_ID?: string
      CONVERTKIT_API_KEY?: string
      CONVERTKIT_FORM_ID?: string
      BEEHIIV_API_KEY?: string
      BEEHIIV_PUBLICATION_ID?: string
    }

    const provider = env.NEWSLETTER_PROVIDER || 'sendfox'

    // ===== SENDFOX INTEGRATION (DEFAULT) =====
    if (provider === 'sendfox' && env.SENDFOX_API_TOKEN) {
      const sendfoxPayload: {
        email: string
        first_name?: string
        last_name?: string
        lists?: number[]
      } = {
        email: email,
        first_name: firstName || '',
        last_name: lastName || ''
      }

      // Add to specific list if configured
      if (env.SENDFOX_LIST_ID) {
        sendfoxPayload.lists = [parseInt(env.SENDFOX_LIST_ID)]
      }

      const sendfoxResponse = await fetch('https://api.sendfox.com/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.SENDFOX_API_TOKEN}`
        },
        body: JSON.stringify(sendfoxPayload)
      })

      if (!sendfoxResponse.ok) {
        const error = await sendfoxResponse.text()
        console.error('SendFox error:', error)
        
        // Check for duplicate email (already subscribed)
        if (sendfoxResponse.status === 422 || error.includes('already')) {
          return c.json({
            success: true,
            message: 'You\'re already subscribed! Check your inbox for our latest newsletter.',
            provider: 'sendfox',
            already_subscribed: true
          })
        }
        
        return c.json({ success: false, message: 'Subscription failed. Please try again.' }, 500)
      }

      const result = await sendfoxResponse.json() as { id?: number }
      return c.json({
        success: true,
        message: 'Welcome aboard! You\'re now subscribed to AI Transformation Insights.',
        provider: 'sendfox',
        subscriber_id: result.id
      })
    }

    // ===== CONVERTKIT INTEGRATION =====
    if (provider === 'convertkit' && env.CONVERTKIT_API_KEY && env.CONVERTKIT_FORM_ID) {
      const convertKitResponse = await fetch(
        `https://api.convertkit.com/v3/forms/${env.CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: env.CONVERTKIT_API_KEY,
            email: email,
            first_name: firstName || '',
            fields: {
              interest: interest || 'all'
            },
            tags: ['aiplacide-website', 'newsletter-signup']
          })
        }
      )

      if (!convertKitResponse.ok) {
        const error = await convertKitResponse.text()
        console.error('ConvertKit error:', error)
        return c.json({ success: false, message: 'Subscription failed. Please try again.' }, 500)
      }

      const result = await convertKitResponse.json() as { subscription?: { subscriber?: { id?: number } } }
      return c.json({
        success: true,
        message: 'Welcome aboard! Check your email to confirm your subscription.',
        provider: 'convertkit',
        subscriber_id: result.subscription?.subscriber?.id
      })
    }

    // ===== BEEHIIV INTEGRATION =====
    if (provider === 'beehiiv' && env.BEEHIIV_API_KEY && env.BEEHIIV_PUBLICATION_ID) {
      const beehiivResponse = await fetch(
        `https://api.beehiiv.com/v2/publications/${env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.BEEHIIV_API_KEY}`
          },
          body: JSON.stringify({
            email: email,
            reactivate_existing: true,
            send_welcome_email: true,
            utm_source: 'aiplacide-website',
            utm_medium: 'organic',
            utm_campaign: 'newsletter-signup',
            custom_fields: [
              { name: 'first_name', value: firstName || '' },
              { name: 'interest', value: interest || 'all' }
            ]
          })
        }
      )

      if (!beehiivResponse.ok) {
        const error = await beehiivResponse.text()
        console.error('Beehiiv error:', error)
        return c.json({ success: false, message: 'Subscription failed. Please try again.' }, 500)
      }

      const result = await beehiivResponse.json() as { data?: { id?: string } }
      return c.json({
        success: true,
        message: 'Welcome aboard! Check your email to confirm your subscription.',
        provider: 'beehiiv',
        subscriber_id: result.data?.id
      })
    }

    // ===== FALLBACK: No provider configured - store locally =====
    console.log('Newsletter signup (no provider configured):', { email, firstName, interest, timestamp: new Date().toISOString() })
    return c.json({
      success: true,
      message: 'Thank you for subscribing! You\'ll hear from us soon.',
      provider: 'local',
      note: 'Configure NEWSLETTER_PROVIDER and provider-specific API keys for full integration'
    })

  } catch (error) {
    console.error('Newsletter API error:', error)
    return c.json({ success: false, message: 'An error occurred. Please try again.' }, 500)
  }
})

// Helper function to send email notifications via Resend
async function sendEmailNotification(
  env: { RESEND_API_KEY?: string; NOTIFICATION_EMAIL?: string },
  subject: string,
  htmlContent: string,
  replyTo?: string
): Promise<boolean> {
  if (!env.RESEND_API_KEY) {
    console.log('Email notification skipped: RESEND_API_KEY not configured')
    return false
  }

  const notificationEmail = env.NOTIFICATION_EMAIL || 'pierre@aiplacide.com'

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'AIPLACIDE Website <notifications@aiplacide.com>',
        to: notificationEmail,
        reply_to: replyTo || undefined,
        subject: subject,
        html: htmlContent
      })
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend email error:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Email send error:', error)
    return false
  }
}

// Contact Form with Email Notification
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, company, subject, message } = body

    if (!email || !message) {
      return c.json({ success: false, message: 'Email and message are required' }, 400)
    }

    const env = c.env as { RESEND_API_KEY?: string; NOTIFICATION_EMAIL?: string }

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0066CC, #003d7a); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #e5e5e5; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0066CC; }
          .value { margin-top: 5px; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #FF6B35; margin-top: 10px; }
          .footer { text-align: center; padding: 15px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">📬 New Contact Form Submission</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">AIPLACIDE.COM</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">From:</div>
              <div class="value">${name || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${company ? `<div class="field"><div class="label">Company:</div><div class="value">${company}</div></div>` : ''}
            ${subject ? `<div class="field"><div class="label">Subject:</div><div class="value">${subject}</div></div>` : ''}
            <div class="field">
              <div class="label">Message:</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
            <p>Reply directly to this email to respond to ${name || 'the sender'}</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email notification
    const emailSent = await sendEmailNotification(
      env,
      `💬 Contact: ${subject || 'New message'} from ${name || email}`,
      emailHtml,
      email
    )

    console.log('Contact form:', { name, email, company, subject, emailSent, timestamp: new Date().toISOString() })

    return c.json({
      success: true,
      message: 'Thank you for reaching out! I\'ll get back to you within 24-48 hours.',
      emailSent
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ success: false, message: 'An error occurred. Please try again.' }, 500)
  }
})

// Speaking Inquiry with Email Notification
app.post('/api/speaking', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, organization, eventName, eventDate, eventType, audience, budget, message } = body

    if (!email || !eventName) {
      return c.json({ success: false, message: 'Email and event name are required' }, 400)
    }

    const env = c.env as { RESEND_API_KEY?: string; NOTIFICATION_EMAIL?: string }

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #FF6B35, #c2410c); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #e5e5e5; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #FF6B35; }
          .value { margin-top: 5px; }
          .highlight { background: #fff7ed; padding: 10px; border-radius: 4px; margin-top: 5px; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #0066CC; margin-top: 10px; }
          .footer { text-align: center; padding: 15px; color: #666; font-size: 12px; }
          .badge { display: inline-block; background: #FF6B35; color: white; padding: 3px 10px; border-radius: 20px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">🎤 New Speaking Inquiry</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">High-Value Lead - AIPLACIDE.COM</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Contact:</div>
              <div class="value">${name || 'Not provided'} - <a href="mailto:${email}">${email}</a></div>
            </div>
            ${organization ? `<div class="field"><div class="label">Organization:</div><div class="value">${organization}</div></div>` : ''}
            <div class="field">
              <div class="label">Event:</div>
              <div class="highlight">
                <strong>${eventName}</strong><br>
                ${eventDate ? `📅 ${eventDate}<br>` : ''}
                ${eventType ? `<span class="badge">${eventType}</span>` : ''}
              </div>
            </div>
            ${audience ? `<div class="field"><div class="label">Audience Size:</div><div class="value">${audience}</div></div>` : ''}
            ${budget ? `<div class="field"><div class="label">Budget Range:</div><div class="value">${budget}</div></div>` : ''}
            ${message ? `<div class="field"><div class="label">Additional Details:</div><div class="message-box">${message.replace(/\n/g, '<br>')}</div></div>` : ''}
          </div>
          <div class="footer">
            <p>🔥 Speaking inquiries are high-value leads - respond within 24 hours!</p>
            <p>Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email notification
    const emailSent = await sendEmailNotification(
      env,
      `🎤 Speaking Inquiry: ${eventName} from ${organization || name || email}`,
      emailHtml,
      email
    )

    console.log('Speaking inquiry:', { name, email, organization, eventName, eventDate, emailSent, timestamp: new Date().toISOString() })

    return c.json({
      success: true,
      message: 'Thank you for your speaking inquiry! I\'ll review the details and respond within 24 hours.',
      emailSent
    })

  } catch (error) {
    console.error('Speaking inquiry error:', error)
    return c.json({ success: false, message: 'An error occurred. Please try again.' }, 500)
  }
})

// Assessment Form with Email Notification
app.post('/api/assessment', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, company, answers, score } = body

    if (!email) {
      return c.json({ success: false, message: 'Email is required' }, 400)
    }

    const env = c.env as { RESEND_API_KEY?: string; NOTIFICATION_EMAIL?: string }

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #e5e5e5; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #059669; }
          .value { margin-top: 5px; }
          .score-box { background: white; padding: 20px; border-radius: 8px; text-align: center; margin: 15px 0; }
          .score { font-size: 48px; font-weight: bold; color: #059669; }
          .footer { text-align: center; padding: 15px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">📊 AI Readiness Assessment Completed</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">AIPLACIDE.COM</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Contact:</div>
              <div class="value">${name || 'Not provided'} - <a href="mailto:${email}">${email}</a></div>
            </div>
            ${company ? `<div class="field"><div class="label">Company:</div><div class="value">${company}</div></div>` : ''}
            ${score !== undefined ? `
            <div class="score-box">
              <div class="label">AI Readiness Score</div>
              <div class="score">${score}/100</div>
            </div>
            ` : ''}
            ${answers ? `<div class="field"><div class="label">Assessment Answers:</div><div class="value"><pre>${JSON.stringify(answers, null, 2)}</pre></div></div>` : ''}
          </div>
          <div class="footer">
            <p>This lead completed the AI Readiness Assessment - consider a follow-up call!</p>
            <p>Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email notification
    const emailSent = await sendEmailNotification(
      env,
      `📊 Assessment: ${name || email} completed AI Readiness (Score: ${score || 'N/A'})`,
      emailHtml,
      email
    )

    console.log('Assessment submission:', { name, email, company, score, emailSent, timestamp: new Date().toISOString() })

    return c.json({
      success: true,
      message: 'Assessment submitted! Check your email for your personalized results.',
      emailSent,
      score
    })

  } catch (error) {
    console.error('Assessment error:', error)
    return c.json({ success: false, message: 'An error occurred. Please try again.' }, 500)
  }
})

export default app
