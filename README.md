# AIPLACIDE.COM - Personal Brand Hub

## 🎯 Project Overview
- **Name**: AIPLACIDE.COM
- **Owner**: Pierre Placide
- **Goal**: Establish Pierre Placide as THE thought leader in Genspark custom super agent development
- **Stack**: Hono + TypeScript + Cloudflare Pages + TailwindCSS
- **Last Updated**: March 4, 2026

## 🌐 Live URLs

| URL | Status | Purpose |
|-----|--------|---------|
| https://www.aiplacide.com | ✅ Live | Production (Primary) |
| https://aiplacide.pages.dev | ✅ Live | Cloudflare Pages |
| https://aiplacide.com | ⏳ Propagating | Root domain redirect |
| https://github.com/unikabiz/aiplacide | ✅ Live | GitHub Repository |
| https://schedule.aiplacide.com | ✅ Live | TidyCal Booking |

## ✅ Completed Features

### Pages Implemented (9 Pages)
| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, About teaser, Insights preview, AI Assessment, Testimonials, Newsletter |
| About | `/about` | Journey narrative, Philosophy, Credentials, Projects |
| Blog/Insights | `/blog` | Category filtering, Featured posts, Individual posts (`/blog/:slug`) |
| Speaking & Media | `/speaking` | Engagements, Podcasts, Media mentions, Inquiry form |
| Contact | `/contact` | Business inquiries, Speaking form, Partnership form |
| Newsletter | `/newsletter` | Value proposition, Signup form, Sample preview |
| **Booking** | `/booking` | TidyCal integration, 5 meeting types, FAQ |
| Privacy Policy | `/privacy` | Legal compliance |
| Terms of Use | `/terms` | Legal compliance |

### Integrations
| Service | Status | Purpose |
|---------|--------|---------|
| **SendFox** | ✅ Active | Newsletter (List ID: 629247) |
| **Resend** | ✅ Active | Email notifications |
| **GA4** | ✅ Active | Analytics (G-BD029NCM3Z) |
| **TidyCal** | ✅ Active | Booking (schedule.aiplacide.com) |
| **Cloudflare Pages** | ✅ Active | Hosting & CDN |

### TidyCal Booking Types
| Meeting | Duration | Price | URL |
|---------|----------|-------|-----|
| Discovery Call | 30 min | Free | schedule.aiplacide.com/discovery-call |
| Strategy Session | 60 min | $150 | schedule.aiplacide.com/strategy-session |
| Speaking Inquiry | 20 min | Free | schedule.aiplacide.com/speaking-inquiry |
| Coffee Chat | 15 min | Free | schedule.aiplacide.com/coffee-chat |
| Partnership | 30 min | Free | schedule.aiplacide.com/partnership |

### Technical Features
- ✅ SEO optimization (meta tags, Open Graph, Twitter Cards)
- ✅ Schema.org Person markup
- ✅ Mobile-responsive design (Tailwind CSS)
- ✅ Form submission API endpoints with email notifications
- ✅ Toast notifications
- ✅ Mobile navigation menu
- ✅ Sticky CTA banner (scroll-triggered)
- ✅ Category filtering on blog
- ✅ GA4 event tracking (newsletter, contact, booking)
- ✅ Custom color palette (Primary #0066CC, Accent #FF6B35)
- ✅ Inter + Lora typography

## 🖼️ Images (36 Total)

### Profile Images
- `pierre-hero.jpg` - Hero section headshot
- `pierre-about.jpg` - About page photo
- `pierre-avatar.jpg` - Small avatar
- `pierre-workspace.jpg` - Workspace photo
- `pierre-family.jpg` - Personal section
- `pierre-speaking.jpg` - Speaking engagement
- `pierre-friendly.jpg` - Contact page
- `pierre-placide.jpg` - Schema.org profile

### Blog Images (8)
- `blog-ai-mistakes.jpg`, `blog-comparison.jpg`, `blog-genspark-guide.jpg`
- `blog-multi-agent.jpg`, `blog-pricing.jpg`, `blog-prompt.jpg`
- `blog-roadmap.jpg`, `blog-trends.jpg`

### Open Graph Images (7)
- `og-home.jpg`, `og-about.jpg`, `og-blog.jpg`, `og-speaking.jpg`
- `og-newsletter.jpg`, `og-contact.jpg`, `og-default.jpg`

### Testimonial Avatars (3)
- `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg`

### Event Photos (2)
- `event-aiworld.jpg`, `event-techforward.jpg`

### Media Logos (4)
- `logo-forbes.svg`, `logo-techcrunch.svg`
- `logo-entrepreneur.svg`, `logo-venturebeat.svg`

### Partner Logos (2)
- `genspark-partner.svg`, `envato-partner.svg`

### App Icons
- `favicon.svg`, `apple-touch-icon.png`

## 📁 Project Structure
```
webapp/
├── src/
│   ├── index.tsx              # Main Hono application (routes + API)
│   ├── components/
│   │   └── layout.ts          # Layout with header, footer, SEO, GA4
│   └── pages/
│       ├── home.ts            # Homepage
│       ├── about.ts           # About page
│       ├── blog.ts            # Blog hub + individual posts
│       ├── speaking.ts        # Speaking & Media
│       ├── contact.ts         # Contact page
│       ├── newsletter.ts      # Newsletter page
│       ├── booking.ts         # TidyCal booking page
│       ├── privacy.ts         # Privacy Policy
│       └── terms.ts           # Terms of Use
├── public/
│   └── static/
│       ├── style.css          # Custom CSS
│       ├── app.js             # Client-side JavaScript
│       ├── favicon.svg        # Favicon
│       └── images/            # 36 image files
├── dist/                      # Build output
├── ecosystem.config.cjs       # PM2 configuration
├── wrangler.jsonc             # Cloudflare configuration
├── vite.config.ts             # Vite build configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🚀 API Endpoints

| Endpoint | Method | Description | Integration |
|----------|--------|-------------|-------------|
| `/api/newsletter` | POST | Newsletter subscription | SendFox |
| `/api/contact` | POST | Contact form | Resend email |
| `/api/speaking` | POST | Speaking inquiry | Resend email |
| `/api/assessment` | POST | AI Assessment | Resend email |

## 🎨 Design System

### Colors
- **Primary**: #0066CC (blue)
- **Accent**: #FF6B35 (orange)
- **Neutral**: Grays from #FAFAFA to #1F2937

### Typography
- **Headings**: Inter (600-800 weight)
- **Body**: Inter (400-500 weight)
- **Serif (quotes)**: Lora (italic)

## 🔧 Development & Deployment

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deploy to Cloudflare Pages
```bash
npm run build
npx wrangler pages deploy dist --project-name aiplacide
```

### Environment Variables (Cloudflare Secrets)
```bash
# Newsletter
NEWSLETTER_PROVIDER=sendfox
SENDFOX_API_TOKEN=your_token
SENDFOX_LIST_ID=629247

# Email Notifications
RESEND_API_KEY=your_key
NOTIFICATION_EMAIL=pierre@aiplacide.com
```

## 📊 DNS Configuration

### Hostinger DNS Settings
| Type | Name | Value |
|------|------|-------|
| CNAME | www | aiplacide.pages.dev |
| Redirect | @ | https://www.aiplacide.com (301) |

### For Resend Email (Add to DNS)
| Type | Name | Value |
|------|------|-------|
| TXT | resend._domainkey | (from Resend dashboard) |
| TXT | @ | v=spf1 include:_spf.hostinger.com include:amazonses.com ~all |

## 📈 Analytics

- **GA4 Property**: G-BD029NCM3Z
- **Events Tracked**: page_view, newsletter_signup, contact_form_submit, speaking_inquiry, booking_initiated, generate_lead

## 📋 Pending Tasks

- [ ] Verify aiplacide.com redirect (DNS propagation)
- [ ] Verify domain in Resend.com for email sending
- [ ] Create TidyCal booking types with exact slugs
- [ ] Connect Stripe to TidyCal for paid sessions

## 📞 Contact

- **Email**: pierre@aiplacide.com
- **Business**: https://unikabiz.com
- **Booking**: https://schedule.aiplacide.com
- **Location**: Naples, FL

## 🔗 Social Media

- **LinkedIn**: https://linkedin.com/in/pierreplacide
- **Twitter**: https://twitter.com/aiplacide
- **YouTube**: https://youtube.com/@aiplacide

---
Built with ❤️ by Pierre Placide | AIPLACIDE | UNIKABIZ
