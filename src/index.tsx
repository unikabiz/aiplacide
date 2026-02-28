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
app.post('/api/newsletter', async (c) => {
  const body = await c.req.json()
  // In production, integrate with ConvertKit/Beehiiv API
  console.log('Newsletter signup:', body)
  return c.json({ success: true, message: 'Successfully subscribed!' })
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
