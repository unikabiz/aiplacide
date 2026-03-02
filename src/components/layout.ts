// Layout component with header, footer, and SEO meta tags
export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
}

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = 'G-BD029NCM3Z';

export const layout = (content: string, meta: PageMeta) => {
  const fullTitle = `${meta.title} | AIPLACIDE - Pierre Placide`;
  const ogImage = meta.ogImage || 'https://aiplacide.com/static/images/og-default.jpg';
  const canonical = meta.canonical || 'https://aiplacide.com';
  const type = meta.type || 'website';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fullTitle}</title>
  <meta name="description" content="${meta.description}">
  <meta name="author" content="Pierre Placide">
  <meta name="robots" content="index, follow">
  
  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_title: '${meta.title}',
      page_location: '${canonical}',
      send_page_view: true
    });
    
    // Custom event tracking functions
    window.trackEvent = function(eventName, eventParams) {
      gtag('event', eventName, eventParams);
    };
    
    // Newsletter signup tracking
    window.trackNewsletterSignup = function(interest) {
      gtag('event', 'newsletter_signup', {
        event_category: 'engagement',
        event_label: interest || 'general',
        value: 1
      });
      gtag('event', 'generate_lead', {
        currency: 'USD',
        value: 5.00
      });
    };
    
    // Contact form tracking
    window.trackContactForm = function(formType) {
      gtag('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: formType || 'general'
      });
    };
    
    // Speaking inquiry tracking
    window.trackSpeakingInquiry = function(eventType) {
      gtag('event', 'speaking_inquiry', {
        event_category: 'leads',
        event_label: eventType || 'general',
        value: 50.00
      });
    };
    
    // External link tracking
    window.trackOutboundLink = function(url, linkName) {
      gtag('event', 'click', {
        event_category: 'outbound',
        event_label: linkName || url,
        transport_type: 'beacon'
      });
    };
  </script>
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="${type}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${fullTitle}">
  <meta property="og:description" content="${meta.description}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:site_name" content="AIPLACIDE">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${canonical}">
  <meta name="twitter:title" content="${fullTitle}">
  <meta name="twitter:description" content="${meta.description}">
  <meta name="twitter:image" content="${ogImage}">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="${canonical}">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
  <link rel="apple-touch-icon" href="/static/apple-touch-icon.png">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#0066CC',
              600: '#0052a3',
              700: '#003d7a',
              800: '#002952',
              900: '#001429',
            },
            accent: {
              50: '#fff7ed',
              100: '#ffedd5',
              200: '#fed7aa',
              300: '#fdba74',
              400: '#fb923c',
              500: '#FF6B35',
              600: '#ea580c',
              700: '#c2410c',
              800: '#9a3412',
              900: '#7c2d12',
            },
            neutral: {
              bg: '#FAFAFA',
              card: '#FFFFFF',
              border: '#E5E5E5',
              muted: '#9CA3AF',
              body: '#374151',
              heading: '#1F2937',
            }
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            serif: ['Lora', 'Georgia', 'serif'],
            mono: ['Fira Code', 'Monaco', 'monospace'],
          }
        }
      }
    }
  </script>
  
  <!-- Custom Styles -->
  <link rel="stylesheet" href="/static/style.css">
  
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Schema.org Markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pierre Placide",
    "alternateName": "AIPLACIDE",
    "url": "https://aiplacide.com",
    "image": "https://aiplacide.com/static/images/pierre-placide.jpg",
    "jobTitle": "AI Generative Consultant & Genspark Custom Super Agent Specialist",
    "description": "Strategic Business Transformation Expert specializing in autonomous AI workflows, RAG architecture, and investor-ready business automation solutions.",
    "worksFor": {
      "@type": "Organization",
      "name": "UNIKABIZ",
      "url": "https://unikabiz.com"
    },
    "knowsAbout": ["AI Automation", "Genspark", "Custom Super Agents", "Business Strategy", "Digital Transformation"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Naples",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/in/pierreplacide",
      "https://unikabiz.com"
    ]
  }
  </script>
</head>
<body class="bg-neutral-bg text-neutral-body font-sans antialiased">
  ${header()}
  <main>
    ${content}
  </main>
  ${footer()}
  ${stickyBanner()}
  <script src="/static/app.js"></script>
</body>
</html>`;
};

const header = () => `
<!-- Header / Navigation -->
<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-border">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-3 group">
        <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
          <span class="text-white font-bold text-lg">AP</span>
        </div>
        <div>
          <span class="text-xl font-bold text-neutral-heading">AIPLACIDE</span>
          <span class="hidden sm:block text-xs text-neutral-muted">Pierre Placide</span>
        </div>
      </a>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-1">
        <a href="/about" class="nav-link px-4 py-2 rounded-lg text-neutral-body hover:text-primary-500 hover:bg-primary-50 transition-all">About</a>
        <a href="/blog" class="nav-link px-4 py-2 rounded-lg text-neutral-body hover:text-primary-500 hover:bg-primary-50 transition-all">Insights</a>
        <a href="/speaking" class="nav-link px-4 py-2 rounded-lg text-neutral-body hover:text-primary-500 hover:bg-primary-50 transition-all">Speaking</a>
        <a href="/newsletter" class="nav-link px-4 py-2 rounded-lg text-neutral-body hover:text-primary-500 hover:bg-primary-50 transition-all">Newsletter</a>
        <a href="/contact" class="nav-link px-4 py-2 rounded-lg text-neutral-body hover:text-primary-500 hover:bg-primary-50 transition-all">Contact</a>
      </div>
      
      <!-- CTA Buttons -->
      <div class="hidden md:flex items-center space-x-3">
        <a href="/booking" class="btn-secondary inline-flex items-center px-4 py-2.5 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 shadow-md hover:shadow-lg transition-all">
          <i class="fas fa-calendar-check mr-2 text-sm"></i>
          <span>Book a Call</span>
        </a>
        <a href="https://unikabiz.com" target="_blank" rel="noopener" class="btn-primary inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
          <span>UNIKABIZ</span>
          <i class="fas fa-arrow-right ml-2 text-sm"></i>
        </a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
        <i class="fas fa-bars text-xl text-neutral-heading"></i>
      </button>
    </div>
    
    <!-- Mobile Navigation -->
    <div id="mobile-menu" class="hidden md:hidden pb-4">
      <div class="flex flex-col space-y-1 pt-4 border-t border-neutral-border">
        <a href="/about" class="px-4 py-3 rounded-lg text-neutral-body hover:text-primary-500 hover:bg-primary-50 transition-all">About</a>
        <a href="/blog" class="px-4 py-3 rounded-lg text-neutral-body hover:text-primary-500 hover:bg-primary-50 transition-all">Insights</a>
        <a href="/speaking" class="px-4 py-3 rounded-lg text-neutral-body hover:text-primary-500 hover:bg-primary-50 transition-all">Speaking</a>
        <a href="/newsletter" class="px-4 py-3 rounded-lg text-neutral-body hover:text-primary-500 hover:bg-primary-50 transition-all">Newsletter</a>
        <a href="/contact" class="px-4 py-3 rounded-lg text-neutral-body hover:text-primary-500 hover:bg-primary-50 transition-all">Contact</a>
        <a href="/booking" class="mt-2 mx-4 text-center py-3 bg-accent-500 text-white font-semibold rounded-lg">
          <i class="fas fa-calendar-check mr-2"></i>Book a Call
        </a>
        <a href="https://unikabiz.com" target="_blank" rel="noopener" class="mx-4 text-center py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg">
          Explore UNIKABIZ <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </nav>
</header>
<!-- Spacer for fixed header -->
<div class="h-20"></div>
`;

const footer = () => `
<!-- Footer -->
<footer class="bg-neutral-heading text-white mt-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      <!-- Column 1: About -->
      <div class="lg:col-span-1">
        <a href="/" class="flex items-center space-x-3 mb-6">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">AP</span>
          </div>
          <span class="text-xl font-bold">AIPLACIDE</span>
        </a>
        <p class="text-gray-400 mb-6 leading-relaxed">
          Pierre Placide | AI Strategy & Custom Super Agent Specialist. Bridging 15+ years of business strategy with next-gen AI automation.
        </p>
        <div class="flex space-x-4">
          <a href="https://linkedin.com/in/pierreplacide" target="_blank" rel="noopener" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/aiplacide" target="_blank" rel="noopener" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com/@aiplacide" target="_blank" rel="noopener" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      
      <!-- Column 2: Quick Links -->
      <div>
        <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
        <ul class="space-y-3">
          <li><a href="/about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
          <li><a href="/blog" class="text-gray-400 hover:text-white transition-colors">Blog / Insights</a></li>
          <li><a href="/speaking" class="text-gray-400 hover:text-white transition-colors">Speaking & Media</a></li>
          <li><a href="/newsletter" class="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
          <li><a href="/booking" class="text-accent-400 hover:text-accent-300 transition-colors font-medium"><i class="fas fa-calendar-check mr-2 text-xs"></i>Book a Call</a></li>
          <li><a href="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      
      <!-- Column 3: Business Solutions -->
      <div>
        <h4 class="text-lg font-semibold mb-6">Business Solutions</h4>
        <ul class="space-y-3">
          <li>
            <a href="https://unikabiz.com" target="_blank" rel="noopener" class="text-accent-400 hover:text-accent-300 transition-colors font-medium">
              <i class="fas fa-external-link-alt mr-2 text-xs"></i>UNIKABIZ.COM
            </a>
          </li>
          <li><a href="https://unikabiz.com/services" target="_blank" rel="noopener" class="text-gray-400 hover:text-white transition-colors">Custom AI Agents</a></li>
          <li><a href="https://unikabiz.com/strategy" target="_blank" rel="noopener" class="text-gray-400 hover:text-white transition-colors">Strategy Consulting</a></li>
          <li><a href="https://unikabiz.com/case-studies" target="_blank" rel="noopener" class="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
          <li><a href="https://unikabiz.com/contact" target="_blank" rel="noopener" class="text-gray-400 hover:text-white transition-colors">Book Consultation</a></li>
        </ul>
      </div>
      
      <!-- Column 4: Contact & Legal -->
      <div>
        <h4 class="text-lg font-semibold mb-6">Contact</h4>
        <ul class="space-y-3 mb-6">
          <li class="flex items-center text-gray-400">
            <i class="fas fa-envelope w-5 text-primary-400"></i>
            <a href="mailto:pierre@aiplacide.com" class="ml-3 hover:text-white transition-colors">pierre@aiplacide.com</a>
          </li>
          <li class="flex items-center text-gray-400">
            <i class="fas fa-map-marker-alt w-5 text-primary-400"></i>
            <span class="ml-3">Naples, FL</span>
          </li>
        </ul>
        <h4 class="text-lg font-semibold mb-4">Legal</h4>
        <ul class="space-y-2">
          <li><a href="/privacy" class="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
          <li><a href="/terms" class="text-gray-400 hover:text-white transition-colors text-sm">Terms of Use</a></li>
        </ul>
      </div>
    </div>
    
    <!-- Bottom Bar -->
    <div class="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p class="text-gray-500 text-sm">© ${new Date().getFullYear()} AIPLACIDE. All rights reserved.</p>
      <div class="flex items-center space-x-6 mt-4 md:mt-0">
        <img src="/static/images/genspark-partner.svg" alt="Genspark Authorized Partner" class="h-8 opacity-70 hover:opacity-100 transition-opacity">
        <img src="/static/images/envato-partner.svg" alt="Envato Elements Partner" class="h-8 opacity-70 hover:opacity-100 transition-opacity">
      </div>
    </div>
  </div>
</footer>
`;

const stickyBanner = () => `
<!-- Sticky CTA Banner (hidden by default, shows on scroll) -->
<div id="sticky-banner" class="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 transform translate-y-full transition-transform duration-300 z-40">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <p class="text-sm md:text-base">
      <span class="hidden sm:inline">Ready to transform your business? </span>
      <span class="font-semibold">Explore UNIKABIZ Solutions</span>
    </p>
    <div class="flex items-center space-x-3">
      <a href="https://unikabiz.com" target="_blank" rel="noopener" class="bg-white text-primary-600 px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
        Learn More <i class="fas fa-arrow-right ml-1"></i>
      </a>
      <button id="close-banner" class="text-white/80 hover:text-white p-1" aria-label="Close banner">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</div>
`;
