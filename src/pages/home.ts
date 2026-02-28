import { layout } from '../components/layout'

export const homePage = () => {
  const content = `
<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white">
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-5">
    <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
      </pattern>
      <rect width="100" height="100" fill="url(#grid)"/>
    </svg>
  </div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <!-- Left: Content -->
      <div class="text-center lg:text-left">
        <!-- Trust Indicators -->
        <div class="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
          <span class="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            <i class="fas fa-certificate mr-2"></i>Genspark Partner
          </span>
          <span class="inline-flex items-center px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
            <i class="fas fa-palette mr-2"></i>Envato Partner
          </span>
          <span class="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <i class="fas fa-clock mr-2"></i>15+ Years Experience
          </span>
        </div>
        
        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-heading leading-tight mb-6">
          I Transform <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Visionary Business Ideas</span> into AI-Powered Reality
        </h1>
        
        <!-- Subheadline -->
        <p class="text-xl text-neutral-muted mb-8 max-w-2xl mx-auto lg:mx-0">
          Genspark Custom Super Agent Specialist | AI-Powered Business Strategy | 15+ Years Transforming Complexity into Competitive Advantage
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="https://unikabiz.com" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:from-primary-600 hover:to-primary-700 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <span>Explore UNIKABIZ Solutions</span>
            <i class="fas fa-arrow-right ml-3"></i>
          </a>
          <a href="/blog" class="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-heading font-semibold rounded-xl border-2 border-neutral-border hover:border-primary-300 hover:bg-primary-50 transition-all">
            <i class="fas fa-book-open mr-3 text-primary-500"></i>
            <span>Read Latest Insights</span>
          </a>
        </div>
      </div>
      
      <!-- Right: Image & AI Chat Preview -->
      <div class="relative">
        <!-- Professional Photo -->
        <div class="relative z-10">
          <div class="aspect-square max-w-md mx-auto relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl transform rotate-6 opacity-20"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl transform -rotate-3 opacity-30"></div>
            <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
              <img src="/static/images/pierre-hero.jpg" alt="Pierre Placide - AI Generative Consultant" class="w-full h-full object-cover rounded-2xl">
            </div>
          </div>
        </div>
        
        <!-- AI Chat Widget Preview -->
        <div class="absolute -bottom-4 -left-4 lg:left-auto lg:-right-4 bg-white rounded-2xl shadow-2xl p-4 max-w-xs z-20 border border-neutral-border">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-robot text-white text-sm"></i>
            </div>
            <span class="ml-2 font-semibold text-sm text-neutral-heading">AI Strategy Assistant</span>
          </div>
          <p class="text-xs text-neutral-muted mb-3">Experience AI consultation firsthand - built with Genspark technology</p>
          <div class="space-y-2">
            <button class="w-full text-left text-xs px-3 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors truncate">
              <i class="fas fa-question-circle mr-2"></i>What makes Genspark different?
            </button>
            <button class="w-full text-left text-xs px-3 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors truncate">
              <i class="fas fa-chart-line mr-2"></i>How do custom agents improve ROI?
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- About Me Teaser Section -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <!-- Left: Content -->
      <div>
        <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
          About Me
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-neutral-heading mb-6">
          The Human Behind the Innovation
        </h2>
        
        <p class="text-lg text-neutral-body mb-6 leading-relaxed font-serif">
          For over 15 years, I've helped businesses transform complexity into clarity. From Fortune 500 strategic planning to boutique brand development, I've seen what works—and what doesn't. Today, I bring that hard-won wisdom to the cutting edge of AI automation.
        </p>
        
        <p class="text-lg text-neutral-body mb-8 leading-relaxed font-serif">
          I specialize in custom Genspark super agents that don't just automate tasks—they transform how businesses operate. My unique approach combines deep business strategy with technical AI expertise to deliver measurable transformation.
        </p>
        
        <!-- Quote -->
        <blockquote class="border-l-4 border-primary-500 pl-6 py-2 mb-8">
          <p class="text-xl text-neutral-heading italic font-serif">
            "I don't build generic AI solutions. I architect intelligent systems that align with your vision, amplify your strengths, and deliver measurable transformation."
          </p>
        </blockquote>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/about" class="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
            Learn My Full Story
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </a>
          <a href="https://unikabiz.com/case-studies" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-3 bg-neutral-heading text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            <i class="fas fa-briefcase mr-2"></i>
            See What I Build
          </a>
        </div>
      </div>
      
      <!-- Right: Visual -->
      <div class="relative">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <div class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
              <i class="fas fa-lightbulb text-3xl mb-4 opacity-80"></i>
              <h4 class="font-bold text-lg mb-2">Strategic Vision</h4>
              <p class="text-sm opacity-90">Transforming complex ideas into actionable blueprints</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-neutral-border">
              <div class="text-4xl font-bold text-primary-500 mb-2">15+</div>
              <p class="text-neutral-muted">Years of Business Strategy Experience</p>
            </div>
          </div>
          <div class="space-y-4 mt-8">
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-neutral-border">
              <i class="fas fa-robot text-3xl mb-4 text-accent-500"></i>
              <h4 class="font-bold text-lg mb-2 text-neutral-heading">AI Expertise</h4>
              <p class="text-sm text-neutral-muted">Genspark pioneer & custom agent specialist</p>
            </div>
            <div class="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-6 text-white">
              <div class="text-4xl font-bold mb-2">∞</div>
              <p class="text-sm opacity-90">ROI Potential with Intelligent Automation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Latest Insights Section -->
<section class="py-20 bg-neutral-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
        Latest Insights
      </span>
      <h2 class="text-3xl sm:text-4xl font-bold text-neutral-heading mb-4">
        AI Transformation Strategies & Deep Dives
      </h2>
      <p class="text-lg text-neutral-muted max-w-2xl mx-auto">
        Exclusive frameworks, case studies, and actionable strategies for AI-powered business transformation.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${blogCard({
        image: '/static/images/blog-genspark-guide.jpg',
        category: 'AI Agent Innovation',
        title: 'The Ultimate Guide to Genspark Custom Super Agents: Architecture, Implementation & ROI',
        excerpt: 'Learn how to design, build, and deploy custom Genspark super agents that transform business operations. Complete architecture guide with real examples...',
        readTime: '12 min read',
        slug: 'genspark-custom-agents-guide'
      })}
      ${blogCard({
        image: '/static/images/blog-ai-mistakes.jpg',
        category: 'Business Strategy',
        title: 'Why Most AI Implementations Fail (And How to Avoid the 5 Common Mistakes)',
        excerpt: 'Discover the critical factors that determine AI project success. Avoid costly mistakes and implement strategies that actually deliver ROI...',
        readTime: '8 min read',
        slug: 'ai-implementation-mistakes'
      })}
      ${blogCard({
        image: '/static/images/blog-multi-agent.jpg',
        category: 'Behind the Scenes',
        title: 'Building a Multi-Agent Workflow: A Case Study in Healthcare Transformation',
        excerpt: 'How we automated patient onboarding for a healthcare SaaS company, achieving 87% time reduction. Real implementation insights...',
        readTime: '10 min read',
        slug: 'multi-agent-healthcare-case-study'
      })}
    </div>
    
    <div class="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/blog" class="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-heading font-semibold rounded-xl border-2 border-neutral-border hover:border-primary-300 hover:bg-primary-50 transition-all shadow-lg">
        <i class="fas fa-book mr-3 text-primary-500"></i>
        Explore All Insights
      </a>
      <a href="/newsletter" class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg">
        <i class="fas fa-envelope mr-3"></i>
        Subscribe for Weekly Strategies
      </a>
    </div>
  </div>
</section>

<!-- Assessment Lead Magnet Section -->
<section class="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute inset-0 opacity-10">
    <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <circle cx="80" cy="20" r="20" fill="white"/>
      <circle cx="20" cy="80" r="30" fill="white"/>
    </svg>
  </div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      
      <!-- Left: Content -->
      <div>
        <span class="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
          <i class="fas fa-star mr-2"></i>Featured Assessment
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          Discover Your AI Readiness Score in 5 Minutes
        </h2>
        <p class="text-xl opacity-90 mb-8">
          Get a personalized report revealing exactly where your business stands—and the specific opportunities you're missing.
        </p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start">
            <span class="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <i class="fas fa-check text-white text-xs"></i>
            </span>
            <span>Identify your top 3 AI automation opportunities</span>
          </li>
          <li class="flex items-start">
            <span class="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <i class="fas fa-check text-white text-xs"></i>
            </span>
            <span>Benchmark against industry standards</span>
          </li>
          <li class="flex items-start">
            <span class="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <i class="fas fa-check text-white text-xs"></i>
            </span>
            <span>Receive a custom roadmap tailored to your business</span>
          </li>
          <li class="flex items-start">
            <span class="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <i class="fas fa-check text-white text-xs"></i>
            </span>
            <span>No obligation, completely free</span>
          </li>
        </ul>
        
        <p class="text-sm opacity-70 flex items-center">
          <i class="fas fa-users mr-2"></i>
          Join 500+ business leaders who've discovered their AI potential
        </p>
      </div>
      
      <!-- Right: Form -->
      <div class="bg-white rounded-2xl p-8 shadow-2xl">
        <h3 class="text-2xl font-bold text-neutral-heading mb-2">Get Your Free Assessment</h3>
        <p class="text-neutral-muted mb-6">Takes just 5 minutes. Instant results delivered to your inbox.</p>
        
        <form id="assessment-form" class="space-y-4">
          <div>
            <label for="assessment-name" class="block text-sm font-medium text-neutral-heading mb-2">Your Name</label>
            <input type="text" id="assessment-name" name="name" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="Pierre Placide">
          </div>
          <div>
            <label for="assessment-email" class="block text-sm font-medium text-neutral-heading mb-2">Email Address</label>
            <input type="email" id="assessment-email" name="email" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="you@company.com">
          </div>
          <div>
            <label for="assessment-company" class="block text-sm font-medium text-neutral-heading mb-2">Company (Optional)</label>
            <input type="text" id="assessment-company" name="company" class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="Your Company">
          </div>
          <button type="submit" class="w-full py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg transform hover:-translate-y-0.5">
            <i class="fas fa-chart-bar mr-2"></i>
            Get My Free Assessment
          </button>
        </form>
        
        <p class="text-xs text-neutral-muted mt-4 text-center">
          <i class="fas fa-lock mr-1"></i>
          Your information is secure. Unsubscribe anytime.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Social Proof Section -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Client Testimonials -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
        Client Experiences
      </span>
      <h2 class="text-3xl sm:text-4xl font-bold text-neutral-heading mb-4">
        What Leaders Say About Working With Me
      </h2>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      ${testimonialCard({
        quote: "Pierre doesn't just understand AI—he understands business. He made the complex simple and gave us a clear path forward.",
        author: 'Sarah Mitchell',
        title: 'CEO, Healthcare SaaS',
        image: '/static/images/testimonial-1.jpg'
      })}
      ${testimonialCard({
        quote: "Working with Pierre felt like having a strategic partner, not just a consultant. He genuinely cares about transformation, not just implementation.",
        author: 'Marcus Chen',
        title: 'Founder, FinTech Startup',
        image: '/static/images/testimonial-2.jpg'
      })}
      ${testimonialCard({
        quote: "The custom Genspark agent Pierre built for us reduced our research time by 85%. The ROI was evident within the first month.",
        author: 'Jennifer Walsh',
        title: 'COO, Legal Services Firm',
        image: '/static/images/testimonial-3.jpg'
      })}
    </div>
    
    <!-- Partnerships & Credentials -->
    <div class="text-center mb-12">
      <h3 class="text-xl font-semibold text-neutral-heading mb-8">Official Partnerships & Credentials</h3>
      <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
        <div class="flex flex-col items-center">
          <img src="/static/images/genspark-partner.svg" alt="Genspark Authorized Partner" class="h-16 mb-3 grayscale hover:grayscale-0 transition-all">
          <span class="text-sm text-neutral-muted">Genspark Partner</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/static/images/envato-partner.svg" alt="Envato Elements Partner" class="h-16 mb-3 grayscale hover:grayscale-0 transition-all">
          <span class="text-sm text-neutral-muted">Envato Partner</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-3">
            <span class="text-white font-bold text-xl">15+</span>
          </div>
          <span class="text-sm text-neutral-muted">Years Experience</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-3">
            <i class="fas fa-globe text-white text-2xl"></i>
          </div>
          <span class="text-sm text-neutral-muted">Naples, FL Based</span>
        </div>
      </div>
    </div>
    
    <!-- Trust Statement -->
    <div class="bg-neutral-bg rounded-2xl p-8 text-center">
      <p class="text-lg text-neutral-body max-w-3xl mx-auto">
        Official partnerships ensuring you get <span class="font-semibold text-neutral-heading">premium resources</span> and <span class="font-semibold text-neutral-heading">priority support</span>. My clients benefit from early access to new features, dedicated technical assistance, and mastery of the Genspark ecosystem.
      </p>
    </div>
  </div>
</section>

<!-- Newsletter Section -->
<section class="py-20 bg-neutral-heading text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span class="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
      <i class="fas fa-envelope-open-text mr-2"></i>Weekly Newsletter
    </span>
    <h2 class="text-3xl sm:text-4xl font-bold mb-6">
      AI Transformation Insights — Delivered Weekly
    </h2>
    
    <p class="text-xl opacity-90 mb-8">
      Join <span class="font-semibold">500+ forward-thinking leaders</span> receiving:
    </p>
    
    <div class="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
      <div class="flex items-start">
        <i class="fas fa-check-circle text-accent-400 mt-1 mr-3"></i>
        <span>Exclusive Genspark super agent strategies</span>
      </div>
      <div class="flex items-start">
        <i class="fas fa-check-circle text-accent-400 mt-1 mr-3"></i>
        <span>Real-world case studies and transformation blueprints</span>
      </div>
      <div class="flex items-start">
        <i class="fas fa-check-circle text-accent-400 mt-1 mr-3"></i>
        <span>Early access to new tools and frameworks</span>
      </div>
      <div class="flex items-start">
        <i class="fas fa-check-circle text-accent-400 mt-1 mr-3"></i>
        <span>Behind-the-scenes from actual client projects</span>
      </div>
    </div>
    
    <form id="newsletter-form" class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6">
      <input type="email" name="email" required placeholder="Enter your email address" class="flex-1 px-6 py-4 rounded-xl text-neutral-heading focus:ring-2 focus:ring-accent-500 focus:outline-none">
      <button type="submit" class="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg whitespace-nowrap">
        Get Weekly Insights
      </button>
    </form>
    
    <p class="text-sm opacity-70">
      <i class="fas fa-calendar-alt mr-2"></i>Every Tuesday. Unsubscribe anytime.
    </p>
    
    <div class="mt-8 pt-8 border-t border-white/10">
      <p class="text-sm opacity-70 italic">
        "Pierre's weekly insights have become essential reading for our strategy team."
      </p>
      <p class="text-sm opacity-50 mt-2">— Newsletter Subscriber</p>
    </div>
  </div>
</section>
`;

  return layout(content, {
    title: 'AI Strategy & Custom Super Agent Specialist',
    description: 'Pierre Placide - Genspark Custom Super Agent Specialist & AI-Powered Business Strategy Expert. 15+ years transforming complexity into competitive advantage.',
    canonical: 'https://aiplacide.com',
    ogImage: 'https://aiplacide.com/static/images/og-home.jpg'
  });
};

// Helper function for blog cards
const blogCard = (props: { image: string; category: string; title: string; excerpt: string; readTime: string; slug: string }) => `
<article class="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-border hover:shadow-xl transition-all group">
  <a href="/blog/${props.slug}" class="block">
    <div class="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
      <img src="${props.image}" alt="${props.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.style.display='none'">
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
          ${props.category}
        </span>
        <span class="text-xs text-neutral-muted">
          <i class="far fa-clock mr-1"></i>${props.readTime}
        </span>
      </div>
      <h3 class="text-lg font-bold text-neutral-heading mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
        ${props.title}
      </h3>
      <p class="text-neutral-muted text-sm line-clamp-3 mb-4">
        ${props.excerpt}
      </p>
      <span class="inline-flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700">
        Read More
        <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
      </span>
    </div>
  </a>
</article>
`;

// Helper function for testimonial cards
const testimonialCard = (props: { quote: string; author: string; title: string; image: string }) => `
<div class="bg-neutral-bg rounded-2xl p-8 relative">
  <div class="absolute top-6 right-6 text-6xl text-primary-200 font-serif">"</div>
  <p class="text-neutral-body text-lg mb-6 relative z-10 font-serif italic leading-relaxed">
    "${props.quote}"
  </p>
  <div class="flex items-center">
    <div class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center overflow-hidden">
      <img src="${props.image}" alt="${props.author}" class="w-full h-full object-cover" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=\\'text-white font-bold\\'>${props.author.split(' ').map(n => n[0]).join('')}</span>'">
    </div>
    <div class="ml-4">
      <div class="font-semibold text-neutral-heading">${props.author}</div>
      <div class="text-sm text-neutral-muted">${props.title}</div>
    </div>
  </div>
</div>
`;
