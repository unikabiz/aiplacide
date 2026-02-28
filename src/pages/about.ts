import { layout } from '../components/layout'

export const aboutPage = () => {
  const content = `
<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-white via-primary-50/30 to-white py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <!-- Left: Content -->
      <div>
        <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
          About Me
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-neutral-heading leading-tight mb-6">
          The Human Behind the <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Innovation</span>
        </h1>
        <p class="text-xl text-neutral-muted leading-relaxed">
          How 15 years of strategic transformation led me to the frontier of AI automation
        </p>
      </div>
      
      <!-- Right: Large Photo -->
      <div class="relative">
        <div class="aspect-[4/5] max-w-lg mx-auto relative">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl transform rotate-3 opacity-20"></div>
          <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2 h-full">
            <img src="/static/images/pierre-about.jpg" alt="Pierre Placide - AI Strategist" class="w-full h-full object-cover rounded-2xl">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- The Journey Section -->
<section class="py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section 1: The Foundation -->
    <div class="mb-20">
      <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
        The Foundation
      </span>
      <h2 class="text-3xl font-bold text-neutral-heading mb-8">
        From Strategy Consulting to Strategic Automation
      </h2>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-neutral-body leading-relaxed font-serif text-lg mb-6">
          My journey into AI wasn't a pivot—it was an evolution. For over 15 years, I worked across industries helping businesses untangle complexity, clarify vision, and execute transformation. From Fortune 500 strategic planning sessions to boutique brand development, I saw the same pattern repeat: <strong class="text-neutral-heading">brilliant ideas trapped in operational chaos</strong>.
        </p>
        
        <p class="text-neutral-body leading-relaxed font-serif text-lg mb-6">
          Traditional consulting gave clients the "what" and the "why"—but struggled with the "how." Strategies sat in PowerPoint decks. Roadmaps collected dust. Transformation required armies of people, prohibitive budgets, and timelines measured in years.
        </p>
        
        <p class="text-neutral-body leading-relaxed font-serif text-lg">
          I became obsessed with a question: <em>What if we could architect intelligent systems that execute strategy autonomously? What if transformation didn't require massive headcount, but massive intelligence?</em>
        </p>
      </div>
    </div>
    
    <!-- Section 2: The Discovery -->
    <div class="mb-20">
      <span class="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-6">
        The Turning Point
      </span>
      <h2 class="text-3xl font-bold text-neutral-heading mb-8">
        When I Met Genspark — The Platform That Changes Everything
      </h2>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-neutral-body leading-relaxed font-serif text-lg mb-6">
          In early 2024, I discovered Genspark—and immediately recognized it as fundamentally different from every other AI platform I'd evaluated. Not because it was "more powerful" (though it is), but because it was architected for exactly what I'd been seeking: <strong class="text-neutral-heading">custom, intelligent automation that could embody business strategy</strong>.
        </p>
        
        <p class="text-neutral-body leading-relaxed font-serif text-lg mb-6">
          My background in strategic planning gave me a unique lens: I didn't just see Genspark's technical capabilities—I saw its strategic potential. I could design agents that didn't just "do tasks," but made decisions, managed workflows, and executed transformation autonomously.
        </p>
        
        <p class="text-neutral-body leading-relaxed font-serif text-lg">
          I went all-in. Became an authorized partner. Spent months mastering prompt engineering, multi-agent architectures, and integration frameworks. Built proof-of-concept agents for my own business—and the results were staggering.
        </p>
      </div>
      
      <!-- Visual: Timeline/Journey -->
      <div class="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
        <div class="flex flex-wrap justify-center gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl font-bold text-primary-600">15+</span>
            </div>
            <span class="text-sm text-neutral-muted">Years Strategy</span>
          </div>
          <div class="flex items-center text-neutral-muted">
            <i class="fas fa-arrow-right text-2xl"></i>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-3">
              <i class="fas fa-lightbulb text-2xl text-accent-500"></i>
            </div>
            <span class="text-sm text-neutral-muted">AI Discovery</span>
          </div>
          <div class="flex items-center text-neutral-muted">
            <i class="fas fa-arrow-right text-2xl"></i>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-3">
              <i class="fas fa-robot text-2xl text-primary-600"></i>
            </div>
            <span class="text-sm text-neutral-muted">Genspark Mastery</span>
          </div>
          <div class="flex items-center text-neutral-muted">
            <i class="fas fa-arrow-right text-2xl"></i>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl shadow-lg flex items-center justify-center mx-auto mb-3">
              <i class="fas fa-rocket text-2xl text-white"></i>
            </div>
            <span class="text-sm text-neutral-muted">UNIKABIZ Launch</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Section 3: Today -->
    <div class="mb-16">
      <span class="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
        Today's Mission
      </span>
      <h2 class="text-3xl font-bold text-neutral-heading mb-8">
        Transforming How Businesses Transform
      </h2>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-neutral-body leading-relaxed font-serif text-lg mb-6">
          Today, through <a href="https://unikabiz.com" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-700 font-semibold">UNIKABIZ</a>, I help visionary leaders do what was previously impossible: deploy intelligent automation that delivers exponential ROI without exponential headcount. Custom Genspark super agents that handle everything from market research to client onboarding, strategic analysis to content creation.
        </p>
        
        <p class="text-neutral-body leading-relaxed font-serif text-lg mb-6">
          I don't just build AI tools—I architect <strong class="text-neutral-heading">transformation ecosystems</strong>. Every custom agent I create is grounded in strategic business thinking, designed for scalability, and optimized for measurable impact.
        </p>
        
        <p class="text-neutral-body leading-relaxed font-serif text-lg">
          My mission is simple: <em>democratize strategic transformation</em>. Make it accessible to businesses that can't afford $500K consulting engagements. Prove that with the right AI architecture, a team of 10 can execute like a team of 100.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Philosophy Section -->
<section class="py-20 bg-neutral-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
        Philosophy & Approach
      </span>
      <h2 class="text-3xl sm:text-4xl font-bold text-neutral-heading mb-4">
        Why Custom Super Agents vs. Generic AI
      </h2>
    </div>
    
    <!-- Comparison Cards -->
    <div class="grid md:grid-cols-3 gap-8 mb-16">
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border hover:shadow-xl transition-shadow">
        <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
          <i class="fas fa-bullseye text-2xl text-primary-600"></i>
        </div>
        <h3 class="text-xl font-bold text-neutral-heading mb-4">Strategic Alignment</h3>
        <div class="space-y-4 text-sm">
          <div class="pb-3 border-b border-neutral-border">
            <span class="text-neutral-muted">Generic AI:</span>
            <p class="text-neutral-body mt-1">One-size-fits-all, limited customization</p>
          </div>
          <div class="pb-3 border-b border-neutral-border">
            <span class="text-accent-600 font-semibold">Custom Super Agents:</span>
            <p class="text-neutral-body mt-1">Built around YOUR specific workflows, data, and objectives</p>
          </div>
          <div class="bg-green-50 p-3 rounded-lg">
            <span class="text-green-700 font-semibold">Impact:</span>
            <p class="text-green-800 mt-1">10x higher adoption rate, measurable business outcomes</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border hover:shadow-xl transition-shadow">
        <div class="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
          <i class="fas fa-brain text-2xl text-accent-600"></i>
        </div>
        <h3 class="text-xl font-bold text-neutral-heading mb-4">Intelligence + Context</h3>
        <div class="space-y-4 text-sm">
          <div class="pb-3 border-b border-neutral-border">
            <span class="text-neutral-muted">Generic AI:</span>
            <p class="text-neutral-body mt-1">No business context, requires constant human oversight</p>
          </div>
          <div class="pb-3 border-b border-neutral-border">
            <span class="text-accent-600 font-semibold">Custom Super Agents:</span>
            <p class="text-neutral-body mt-1">Trained on your industry, processes, and brand voice</p>
          </div>
          <div class="bg-green-50 p-3 rounded-lg">
            <span class="text-green-700 font-semibold">Impact:</span>
            <p class="text-green-800 mt-1">Autonomous decision-making within defined parameters</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border hover:shadow-xl transition-shadow">
        <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
          <i class="fas fa-chart-network text-2xl text-green-600"></i>
        </div>
        <h3 class="text-xl font-bold text-neutral-heading mb-4">Scalability + Integration</h3>
        <div class="space-y-4 text-sm">
          <div class="pb-3 border-b border-neutral-border">
            <span class="text-neutral-muted">Generic AI:</span>
            <p class="text-neutral-body mt-1">Siloed tools, manual data transfer</p>
          </div>
          <div class="pb-3 border-b border-neutral-border">
            <span class="text-accent-600 font-semibold">Custom Super Agents:</span>
            <p class="text-neutral-body mt-1">Seamless integration with existing systems, multi-agent orchestration</p>
          </div>
          <div class="bg-green-50 p-3 rounded-lg">
            <span class="text-green-700 font-semibold">Impact:</span>
            <p class="text-green-800 mt-1">Compound efficiency gains, true transformation</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Core Beliefs Quote -->
    <div class="max-w-4xl mx-auto">
      <blockquote class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
        <div class="absolute top-4 left-4 text-8xl text-white/10 font-serif">"</div>
        <p class="text-xl lg:text-2xl font-serif italic leading-relaxed relative z-10 mb-6">
          I believe AI isn't about replacing humans—it's about amplifying human potential. The businesses that win in the next decade won't be those with the most AI tools, but those with the most intelligently designed AI ecosystems. Strategy without execution is hallucination. Execution without strategy is chaos. Custom super agents are the bridge.
        </p>
        <cite class="text-white/80 not-italic font-semibold">— Pierre Placide</cite>
      </blockquote>
    </div>
  </div>
</section>

<!-- Personal Touch Section -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      
      <!-- Left: Visual Collage -->
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-4">
          <div class="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden">
            <img src="/static/images/pierre-workspace.jpg" alt="Pierre's workspace" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('flex','items-center','justify-center');this.outerHTML='<i class=\\'fas fa-laptop-code text-4xl text-primary-400\\'></i>'">
          </div>
          <div class="aspect-video bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center">
            <div class="text-center p-4">
              <i class="fas fa-map-marker-alt text-3xl text-accent-500 mb-2"></i>
              <p class="text-accent-700 font-semibold">Naples, FL</p>
            </div>
          </div>
        </div>
        <div class="space-y-4 mt-8">
          <div class="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
            <div class="text-center p-4">
              <i class="fas fa-sun text-3xl text-green-500 mb-2"></i>
              <p class="text-green-700 font-semibold">Morning Person</p>
            </div>
          </div>
          <div class="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl overflow-hidden">
            <img src="/static/images/pierre-family.jpg" alt="Pierre with family" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('flex','items-center','justify-center');this.outerHTML='<i class=\\'fas fa-heart text-4xl text-purple-400\\'></i>'">
          </div>
        </div>
      </div>
      
      <!-- Right: Personal Content -->
      <div>
        <span class="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-6">
          Beyond the Consultant
        </span>
        <h2 class="text-3xl font-bold text-neutral-heading mb-6">
          Who I Am When I'm Not Building AI Agents
        </h2>
        
        <div class="prose prose-lg max-w-none">
          <p class="text-neutral-body leading-relaxed font-serif text-lg mb-6">
            When I'm not architecting AI agents, you'll find me exploring the beautiful Gulf Coast of Florida, spending quality time with my family, or diving deep into the latest technology trends. I'm a morning person who starts every day with intention and gratitude.
          </p>
          
          <p class="text-neutral-body leading-relaxed font-serif text-lg mb-6">
            I'm a firm believer in <strong class="text-neutral-heading">work-life integration</strong> over work-life balance. For me, the boundaries blur because I genuinely love what I do. My curiosity drives me to constantly learn, experiment, and push boundaries.
          </p>
          
          <p class="text-neutral-body leading-relaxed font-serif text-lg">
            My family keeps me grounded, my curiosity keeps me exploring, and my commitment to <strong class="text-neutral-heading">ethical AI implementation</strong> keeps me honest. I believe technology should amplify human potential, never diminish it.
          </p>
        </div>
        
        <!-- Working Style -->
        <div class="mt-8 bg-neutral-bg rounded-xl p-6">
          <h4 class="font-bold text-neutral-heading mb-4">My Working Style</h4>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="flex items-center">
              <i class="fas fa-video text-primary-500 w-5"></i>
              <span class="ml-3">Prefer video calls for deep discussions</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-clock text-primary-500 w-5"></i>
              <span class="ml-3">Async-friendly for efficiency</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-comments text-primary-500 w-5"></i>
              <span class="ml-3">Direct, honest communication</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-handshake text-primary-500 w-5"></i>
              <span class="ml-3">Collaborative partnership approach</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Credentials Section -->
<section class="py-20 bg-neutral-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
        Partnerships & Recognition
      </span>
      <h2 class="text-3xl sm:text-4xl font-bold text-neutral-heading">
        Credentials That Matter
      </h2>
    </div>
    
    <!-- Partnerships -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
      <!-- Genspark Partnership -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border">
        <div class="flex items-start mb-6">
          <img src="/static/images/genspark-partner.svg" alt="Genspark Partner" class="h-12 mr-4">
          <div>
            <h3 class="text-xl font-bold text-neutral-heading">Genspark Authorized Partner</h3>
            <span class="text-sm text-primary-600">Official Partnership</span>
          </div>
        </div>
        <p class="text-neutral-body mb-6">
          Official partnership providing clients with priority support, exclusive resources, and cutting-edge capabilities in the Genspark ecosystem.
        </p>
        <h4 class="font-semibold text-neutral-heading mb-3">Benefits to Clients:</h4>
        <ul class="space-y-2 text-sm text-neutral-body">
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            Early access to new features and capabilities
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            Dedicated technical support
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            Deep Genspark ecosystem mastery
          </li>
        </ul>
      </div>
      
      <!-- Envato Partnership -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border">
        <div class="flex items-start mb-6">
          <img src="/static/images/envato-partner.svg" alt="Envato Partner" class="h-12 mr-4">
          <div>
            <h3 class="text-xl font-bold text-neutral-heading">Envato Elements Partner</h3>
            <span class="text-sm text-accent-600">Premium Resources</span>
          </div>
        </div>
        <p class="text-neutral-body mb-6">
          Premium creative resources partnership ensuring every client project receives professional-grade design assets and multimedia elements.
        </p>
        <h4 class="font-semibold text-neutral-heading mb-3">Benefits to Clients:</h4>
        <ul class="space-y-2 text-sm text-neutral-body">
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            Access to millions of high-quality templates
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            Professional graphics, videos, and audio
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            Consistent, polished deliverables
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Notable Projects -->
    <div class="mb-16">
      <h3 class="text-xl font-semibold text-neutral-heading mb-8 text-center">Notable Project Highlights</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-xl p-6 shadow border border-neutral-border hover:shadow-lg transition-shadow">
          <div class="text-2xl mb-3">🏥</div>
          <h4 class="font-semibold text-neutral-heading mb-2">Healthcare SaaS</h4>
          <p class="text-sm text-neutral-muted mb-2">Automated patient onboarding</p>
          <p class="text-lg font-bold text-green-600">87% time reduction</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow border border-neutral-border hover:shadow-lg transition-shadow">
          <div class="text-2xl mb-3">⚖️</div>
          <h4 class="font-semibold text-neutral-heading mb-2">Legal Services</h4>
          <p class="text-sm text-neutral-muted mb-2">AI-powered research assistant</p>
          <p class="text-lg font-bold text-green-600">85% faster research</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow border border-neutral-border hover:shadow-lg transition-shadow">
          <div class="text-2xl mb-3">💰</div>
          <h4 class="font-semibold text-neutral-heading mb-2">FinTech Startup</h4>
          <p class="text-sm text-neutral-muted mb-2">Customer support automation</p>
          <p class="text-lg font-bold text-green-600">73% cost savings</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow border border-neutral-border hover:shadow-lg transition-shadow">
          <div class="text-2xl mb-3">🏢</div>
          <h4 class="font-semibold text-neutral-heading mb-2">Real Estate</h4>
          <p class="text-sm text-neutral-muted mb-2">Lead qualification agent</p>
          <p class="text-lg font-bold text-green-600">3x conversion rate</p>
        </div>
      </div>
      <p class="text-center mt-6">
        <a href="https://unikabiz.com/case-studies" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-700 font-semibold">
          See full case studies at UNIKABIZ <i class="fas fa-arrow-right ml-1"></i>
        </a>
      </p>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-bold mb-6">
      Ready to See How I Translate This Vision Into Business Results?
    </h2>
    <p class="text-xl opacity-90 mb-10">
      From strategy to implementation — discover how custom AI agents can transform your business.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="https://unikabiz.com" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 shadow-xl transition-all transform hover:-translate-y-1">
        <span>Explore UNIKABIZ Services</span>
        <i class="fas fa-arrow-right ml-3"></i>
      </a>
      <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all">
        <i class="fas fa-envelope mr-3"></i>
        <span>Get in Touch</span>
      </a>
    </div>
  </div>
</section>
`;

  return layout(content, {
    title: 'About Pierre Placide',
    description: 'Discover the journey of Pierre Placide - from 15+ years of strategic business consulting to becoming a Genspark Custom Super Agent specialist. Learn about the philosophy behind AI-powered transformation.',
    canonical: 'https://aiplacide.com/about',
    ogImage: 'https://aiplacide.com/static/images/og-about.jpg'
  });
};
