# AIPLACIDE.COM - Personal Brand Hub

## 🎯 Project Overview
- **Name**: AIPLACIDE.COM
- **Owner**: Pierre Placide
- **Goal**: Establish Pierre Placide as THE thought leader in Genspark custom super agent development
- **Stack**: Hono + TypeScript + Cloudflare Pages + TailwindCSS

## 🌐 Live URLs
- **Preview**: https://3000-il337mmzkkw815psrejpr-18e660f9.sandbox.novita.ai
- **Production**: https://aiplacide.com (to be deployed)
- **GitHub**: (To be set up)

## ✅ Completed Features

### Pages Implemented
1. **Homepage** (`/`)
   - Hero section with trust indicators
   - About Me teaser
   - Latest Insights preview (3 featured posts)
   - AI Readiness Assessment lead magnet
   - Social proof & testimonials
   - Newsletter subscription
   - Sticky CTA banner

2. **About Page** (`/about`)
   - Journey narrative (3 sections: Foundation, Discovery, Today)
   - Philosophy comparison cards
   - Personal touch section
   - Credentials & partnerships
   - Notable project highlights

3. **Blog/Insights Hub** (`/blog`)
   - Category filtering
   - Featured posts grid
   - Individual blog post pages (`/blog/:slug`)
   - Author box
   - Social sharing
   - Related posts

4. **Speaking & Media** (`/speaking`)
   - Speaking engagements timeline
   - Podcast appearances
   - Media mentions & logo wall
   - Topics I speak on (4 topics)
   - Speaking inquiry form

5. **Contact Page** (`/contact`)
   - Business inquiries (UNIKABIZ redirect)
   - Speaking & media inquiry form
   - Partnership inquiry form
   - Social media links
   - "What to Expect" section

6. **Newsletter Page** (`/newsletter`)
   - Full value proposition
   - Signup form with interest selection
   - Sample newsletter preview
   - Testimonials
   - Stats (subscribers, open rate, etc.)

7. **Legal Pages**
   - Privacy Policy (`/privacy`)
   - Terms of Use (`/terms`)

### Technical Features
- ✅ SEO optimization with meta tags, Open Graph, Twitter Cards
- ✅ Schema.org Person markup
- ✅ Mobile-responsive design (Tailwind CSS)
- ✅ Form submission API endpoints
- ✅ Toast notifications
- ✅ Mobile navigation menu
- ✅ Sticky CTA banner (scroll-triggered)
- ✅ Category filtering on blog
- ✅ Static assets serving
- ✅ Custom color palette (Primary blue, Accent orange)
- ✅ Inter + Lora typography

## 📁 Project Structure
```
webapp/
├── src/
│   ├── index.tsx              # Main Hono application
│   ├── components/
│   │   └── layout.ts          # Layout with header, footer, SEO
│   └── pages/
│       ├── home.ts            # Homepage
│       ├── about.ts           # About page
│       ├── blog.ts            # Blog hub + posts
│       ├── speaking.ts        # Speaking & Media
│       ├── contact.ts         # Contact page
│       ├── newsletter.ts      # Newsletter page
│       ├── privacy.ts         # Privacy Policy
│       └── terms.ts           # Terms of Use
├── public/
│   └── static/
│       ├── style.css          # Custom CSS
│       ├── app.js             # Client-side JavaScript
│       ├── favicon.svg        # Favicon
│       └── images/
│           ├── genspark-partner.svg
│           └── envato-partner.svg
├── dist/                      # Build output
├── ecosystem.config.cjs       # PM2 configuration
├── wrangler.jsonc             # Cloudflare configuration
├── vite.config.ts             # Vite build configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🚀 API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/newsletter` | POST | Newsletter subscription |
| `/api/contact` | POST | Contact form submission |
| `/api/speaking` | POST | Speaking inquiry |
| `/api/assessment` | POST | Assessment form |

## 📋 Data Models

### Blog Posts (Static)
```typescript
{
  slug: string;
  title: string;
  excerpt: string;
  category: string;  // 'AI Agent Innovation' | 'Business Strategy' | etc.
  readTime: string;
  date: string;
  image: string;
  featured: boolean;
}
```

### Form Submissions
- In production, integrate with ConvertKit/Beehiiv for newsletter
- Use email service for contact forms
- Consider CRM integration (HubSpot, Pipedrive)

## 🎨 Design System

### Colors
- **Primary**: #0066CC (blue)
- **Accent**: #FF6B35 (orange)
- **Neutral**: Grays from #FAFAFA to #1F2937

### Typography
- **Headings**: Inter (600-800 weight)
- **Body**: Inter (400-500 weight)
- **Serif (quotes)**: Lora (italic)

## 📦 Deployment Options

### Option 1: Cloudflare Pages (Recommended for Edge Performance)
```bash
# Build and deploy
npm run build
npx wrangler pages deploy dist --project-name aiplacide

# Or one command
npm run deploy:prod
```

### Option 2: Export Static for Hostinger
Since Hostinger uses traditional hosting, you can:

1. **Build the project**:
```bash
npm run build
```

2. **The `dist/` folder contains**:
   - `_worker.js` - The server-side code
   - Static assets from `public/`

3. **For Hostinger (Static Export)**:
   You'll need to pre-render all pages. Generate static HTML files:
   - Access each route and save the HTML output
   - Upload to Hostinger's public_html folder

4. **Recommended**: Use Cloudflare Pages (free tier) and point AIPLACIDE.COM to it

### DNS Configuration for Hostinger
If domain is on Hostinger but hosting on Cloudflare Pages:
1. In Hostinger DNS settings, add CNAME record:
   - `@` → `aiplacide.pages.dev`
   - `www` → `aiplacide.pages.dev`

2. In Cloudflare Pages, add custom domain `aiplacide.com`

## 🔧 Development

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Sandbox Development
```bash
npm run build
pm2 start ecosystem.config.cjs
# Access at http://localhost:3000
```

## 🖼️ Required Images

Add these images to `/public/static/images/`:
- `pierre-hero.jpg` - Hero section headshot
- `pierre-about.jpg` - About page photo
- `pierre-avatar.jpg` - Small avatar
- `pierre-workspace.jpg` - Workspace photo
- `pierre-family.jpg` - Personal touch
- `pierre-speaking.jpg` - Speaking engagement
- `pierre-friendly.jpg` - Contact page
- `blog-*.jpg` - Blog post featured images
- `testimonial-*.jpg` - Testimonial photos
- `og-*.jpg` - Open Graph images
- `apple-touch-icon.png` - iOS icon

## 📈 Next Steps

1. **Add Real Images**: Replace placeholder images with actual photos
2. **Newsletter Integration**: Connect forms to ConvertKit/Beehiiv
3. **Analytics**: Add Google Analytics 4 and Google Search Console
4. **CRM Integration**: Connect contact forms to HubSpot/Pipedrive
5. **Blog CMS**: Consider Sanity or Contentful for dynamic blog content
6. **Assessment Tool**: Build actual AI Readiness Assessment functionality
7. **AI Chat Widget**: Integrate Genspark chat widget on homepage

## 📞 Contact
- **Email**: pierre@aiplacide.com
- **Business**: https://unikabiz.com
- **Location**: Naples, FL

---
Built with ❤️ by Pierre Placide | AIPLACIDE | UNIKABIZ
