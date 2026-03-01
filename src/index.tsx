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

// Newsletter Integration - Supports ConvertKit and Beehiiv
app.post('/api/newsletter', async (c) => {
  try {
    const body = await c.req.json()
    const { email, firstName, interest } = body

    if (!email) {
      return c.json({ success: false, message: 'Email is required' }, 400)
    }

    // Get environment bindings for API keys
    const env = c.env as {
      CONVERTKIT_API_KEY?: string
      CONVERTKIT_FORM_ID?: string
      BEEHIIV_API_KEY?: string
      BEEHIIV_PUBLICATION_ID?: string
      NEWSLETTER_PROVIDER?: string
    }

    const provider = env.NEWSLETTER_PROVIDER || 'convertkit'

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

      const result = await convertKitResponse.json()
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

      const result = await beehiivResponse.json()
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
      note: 'Configure NEWSLETTER_PROVIDER, CONVERTKIT_API_KEY/FORM_ID or BEEHIIV_API_KEY/PUBLICATION_ID for full integration'
    })

  } catch (error) {
    console.error('Newsletter API error:', error)
    return c.json({ success: false, message: 'An error occurred. Please try again.' }, 500)
  }
})

app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // In production, send email or integrate with CRM
  console.log('Contact form:', body)
  return c.json({ success: true, message: 'Message received!' })
})

app.post('/api/speaking', async (c) => {
  const body = await c.req.json()
  // In production, send notification email
  console.log('Speaking inquiry:', body)
  return c.json({ success: true, message: 'Speaking inquiry received!' })
})

app.post('/api/assessment', async (c) => {
  const body = await c.req.json()
  // In production, process assessment and send results
  console.log('Assessment submission:', body)
  return c.json({ success: true, message: 'Assessment submitted!' })
})

export default app
