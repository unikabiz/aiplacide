import { layout } from '../components/layout'

export const speakingPage = () => {
  const content = `
<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-white via-primary-50/30 to-white py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
          Speaking & Media
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-neutral-heading leading-tight mb-6">
          Speaking, Teaching, & Sharing Insights on <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">AI Transformation</span>
        </h1>
        <p class="text-xl text-neutral-muted">
          From conference keynotes to intimate workshops, I'm passionate about helping leaders navigate the AI revolution.
        </p>
      </div>
      
      <div class="relative">
        <div class="aspect-video bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl overflow-hidden shadow-2xl">
          <img src="/static/images/pierre-speaking.jpg" alt="Pierre Placide speaking at conference" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('flex','items-center','justify-center');this.outerHTML='<div class=\\'text-center p-8\\'><i class=\\'fas fa-microphone-alt text-6xl text-primary-400 mb-4\\'></i><p class=\\'text-primary-600 font-semibold\\'>Speaking Engagement</p></div>'">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Speaking Engagements Section -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-neutral-heading mb-8 flex items-center">
      <i class="fas fa-calendar-check text-primary-500 mr-4"></i>
      Speaking Engagements
    </h2>
    
    <div class="space-y-8">
      <!-- Speaking Event 1 -->
      <div class="bg-neutral-bg rounded-2xl p-8 flex flex-col lg:flex-row gap-8">
        <div class="lg:w-1/3">
          <div class="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl overflow-hidden">
            <img src="/static/images/event-techforward.jpg" alt="TechForward Conference" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('flex','items-center','justify-center');this.outerHTML='<i class=\\'fas fa-stage text-4xl text-primary-400\\'></i>'">
          </div>
        </div>
        <div class="lg:w-2/3">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-sm text-primary-600 font-semibold">KEYNOTE</span>
            <span class="text-neutral-muted">•</span>
            <span class="text-sm text-neutral-muted">March 2026 | Austin, TX</span>
          </div>
          <h3 class="text-xl font-bold text-neutral-heading mb-3">TechForward Conference 2026</h3>
          <p class="text-lg text-accent-600 font-semibold mb-3">"Building Custom AI Agents That Actually Deliver ROI"</p>
          <p class="text-neutral-muted mb-4">Keynote for 300+ technology leaders exploring practical AI implementation strategies.</p>
          <div class="bg-white rounded-lg p-4">
            <h4 class="font-semibold text-neutral-heading mb-2">Key Insights Shared:</h4>
            <ul class="text-sm text-neutral-muted space-y-1">
              <li>• Why 80% of AI projects fail (and the 3 success factors)</li>
              <li>• Live demo: Building a customer service agent in 15 minutes</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Speaking Event 2 -->
      <div class="bg-neutral-bg rounded-2xl p-8 flex flex-col lg:flex-row gap-8">
        <div class="lg:w-1/3">
          <div class="aspect-video bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl overflow-hidden">
            <img src="/static/images/event-aiworld.jpg" alt="AI World Summit" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('flex','items-center','justify-center');this.outerHTML='<i class=\\'fas fa-robot text-4xl text-accent-400\\'></i>'">
          </div>
        </div>
        <div class="lg:w-2/3">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-sm text-accent-600 font-semibold">WORKSHOP</span>
            <span class="text-neutral-muted">•</span>
            <span class="text-sm text-neutral-muted">January 2026 | Miami, FL</span>
          </div>
          <h3 class="text-xl font-bold text-neutral-heading mb-3">AI World Summit</h3>
          <p class="text-lg text-accent-600 font-semibold mb-3">"Multi-Agent Workflow Design Masterclass"</p>
          <p class="text-neutral-muted mb-4">Half-day hands-on workshop for 80+ technical leaders on advanced agent architectures.</p>
          <div class="bg-white rounded-lg p-4">
            <h4 class="font-semibold text-neutral-heading mb-2">Key Insights Shared:</h4>
            <ul class="text-sm text-neutral-muted space-y-1">
              <li>• Designing agent orchestration patterns</li>
              <li>• Real-world implementation case studies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-12">
      <a href="#invite-form" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:from-primary-600 hover:to-primary-700 shadow-xl transition-all transform hover:-translate-y-1">
        <i class="fas fa-calendar-plus mr-3"></i>
        Invite Me to Speak at Your Event
      </a>
    </div>
  </div>
</section>

<!-- Podcast Appearances Section -->
<section class="py-20 bg-neutral-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-neutral-heading mb-8 flex items-center">
      <i class="fas fa-podcast text-accent-500 mr-4"></i>
      Podcast Appearances
    </h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Podcast 1 -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-neutral-border hover:shadow-xl transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mr-4">
            <i class="fas fa-microphone text-white text-2xl"></i>
          </div>
          <div>
            <h3 class="font-bold text-neutral-heading">The AI Business Podcast</h3>
            <p class="text-sm text-neutral-muted">Episode 47</p>
          </div>
        </div>
        <p class="text-accent-600 font-semibold mb-3">"From Strategy to Super Agents: Transforming Business with Genspark"</p>
        <p class="text-sm text-neutral-muted mb-4">January 2026</p>
        <div class="bg-neutral-bg rounded-lg p-4 mb-4">
          <h4 class="text-sm font-semibold text-neutral-heading mb-2">We discussed:</h4>
          <ul class="text-xs text-neutral-muted space-y-1">
            <li>• How custom super agents differ from ChatGPT</li>
            <li>• Real ROI metrics from client implementations</li>
            <li>• The future of AI consulting in 2026</li>
          </ul>
        </div>
        <div class="flex gap-2">
          <a href="#" class="flex-1 text-center py-2 bg-[#1DB954] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
            <i class="fab fa-spotify mr-1"></i> Spotify
          </a>
          <a href="#" class="flex-1 text-center py-2 bg-[#9933FF] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
            <i class="fab fa-apple mr-1"></i> Apple
          </a>
        </div>
      </div>
      
      <!-- Podcast 2 -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-neutral-border hover:shadow-xl transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
            <i class="fas fa-headphones text-white text-2xl"></i>
          </div>
          <div>
            <h3 class="font-bold text-neutral-heading">Business Strategy Hour</h3>
            <p class="text-sm text-neutral-muted">Episode 123</p>
          </div>
        </div>
        <p class="text-accent-600 font-semibold mb-3">"The 7-Phase Methodology for AI Transformation"</p>
        <p class="text-sm text-neutral-muted mb-4">December 2025</p>
        <div class="bg-neutral-bg rounded-lg p-4 mb-4">
          <h4 class="text-sm font-semibold text-neutral-heading mb-2">We discussed:</h4>
          <ul class="text-xs text-neutral-muted space-y-1">
            <li>• Breaking down transformation into manageable phases</li>
            <li>• Getting executive buy-in for AI projects</li>
            <li>• Measuring and proving ROI</li>
          </ul>
        </div>
        <div class="flex gap-2">
          <a href="#" class="flex-1 text-center py-2 bg-[#1DB954] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
            <i class="fab fa-spotify mr-1"></i> Spotify
          </a>
          <a href="#" class="flex-1 text-center py-2 bg-[#9933FF] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
            <i class="fab fa-apple mr-1"></i> Apple
          </a>
        </div>
      </div>
      
      <!-- Podcast 3 -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-neutral-border hover:shadow-xl transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mr-4">
            <i class="fas fa-rss text-white text-2xl"></i>
          </div>
          <div>
            <h3 class="font-bold text-neutral-heading">Tech Consulting Today</h3>
            <p class="text-sm text-neutral-muted">Episode 89</p>
          </div>
        </div>
        <p class="text-accent-600 font-semibold mb-3">"Building an AI Consulting Practice from Scratch"</p>
        <p class="text-sm text-neutral-muted mb-4">November 2025</p>
        <div class="bg-neutral-bg rounded-lg p-4 mb-4">
          <h4 class="text-sm font-semibold text-neutral-heading mb-2">We discussed:</h4>
          <ul class="text-xs text-neutral-muted space-y-1">
            <li>• My journey from strategy consulting to AI</li>
            <li>• How to price AI consulting services</li>
            <li>• Finding and nurturing ideal clients</li>
          </ul>
        </div>
        <div class="flex gap-2">
          <a href="#" class="flex-1 text-center py-2 bg-[#1DB954] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
            <i class="fab fa-spotify mr-1"></i> Spotify
          </a>
          <a href="#" class="flex-1 text-center py-2 bg-[#9933FF] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
            <i class="fab fa-apple mr-1"></i> Apple
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Media Mentions Section -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-neutral-heading mb-8 flex items-center">
      <i class="fas fa-newspaper text-primary-500 mr-4"></i>
      Media Mentions & Features
    </h2>
    
    <!-- Logo Wall -->
    <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-16 mb-16 py-8 border-y border-neutral-border">
      <img src="/static/images/logo-techcrunch.svg" alt="TechCrunch" class="h-8 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
      <img src="/static/images/logo-forbes.svg" alt="Forbes" class="h-8 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
      <img src="/static/images/logo-venturebeat.svg" alt="VentureBeat" class="h-8 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
      <img src="/static/images/logo-entrepreneur.svg" alt="Entrepreneur" class="h-8 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
    </div>
    
    <!-- Featured Articles -->
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-neutral-bg rounded-2xl p-8">
        <div class="flex items-center mb-4">
          <span class="text-sm font-semibold text-primary-600">Forbes</span>
          <span class="text-neutral-muted mx-2">|</span>
          <span class="text-sm text-neutral-muted">December 2025</span>
        </div>
        <h3 class="text-xl font-bold text-neutral-heading mb-4">"The Future of AI Consulting: 10 Leaders to Watch in 2026"</h3>
        <blockquote class="border-l-4 border-primary-500 pl-4 text-neutral-body italic mb-4">
          "Pierre Placide is pioneering a new approach to AI implementation, combining strategic business acumen with deep technical Genspark expertise. His custom super agent methodology is setting a new standard for ROI-focused transformation."
        </blockquote>
        <a href="#" class="text-primary-600 font-semibold hover:text-primary-700">Read Full Article <i class="fas fa-external-link-alt ml-1 text-sm"></i></a>
      </div>
      
      <div class="bg-neutral-bg rounded-2xl p-8">
        <div class="flex items-center mb-4">
          <span class="text-sm font-semibold text-primary-600">TechCrunch</span>
          <span class="text-neutral-muted mx-2">|</span>
          <span class="text-sm text-neutral-muted">November 2025</span>
        </div>
        <h3 class="text-xl font-bold text-neutral-heading mb-4">"How Small Businesses Are Winning with Custom AI Agents"</h3>
        <blockquote class="border-l-4 border-primary-500 pl-4 text-neutral-body italic mb-4">
          "My mission is simple: democratize strategic transformation. Make it accessible to businesses that can't afford $500K consulting engagements."
        </blockquote>
        <a href="#" class="text-primary-600 font-semibold hover:text-primary-700">Read Full Article <i class="fas fa-external-link-alt ml-1 text-sm"></i></a>
      </div>
    </div>
  </div>
</section>

<!-- Topics I Speak On Section -->
<section class="py-20 bg-neutral-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-neutral-heading mb-4">Topics I Speak On</h2>
      <p class="text-xl text-neutral-muted max-w-2xl mx-auto">
        Bring these insights to your organization or event
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Topic 1 -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border">
        <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
          <i class="fas fa-map-signs text-2xl text-primary-600"></i>
        </div>
        <h3 class="text-xl font-bold text-neutral-heading mb-2">The AI Transformation Roadmap</h3>
        <p class="text-sm text-primary-600 font-semibold mb-4">Keynote (45-60 min) or Workshop (half-day)</p>
        <p class="text-neutral-muted mb-4">For CEOs, Business Leaders, Strategy Teams</p>
        <h4 class="font-semibold text-neutral-heading mb-2">Key Takeaways:</h4>
        <ul class="text-sm text-neutral-muted space-y-2 mb-4">
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>The 7-phase methodology for successful AI implementation</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>How to calculate and maximize AI ROI</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Common pitfalls and how to avoid them</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Case studies demonstrating measurable transformation</li>
        </ul>
        <span class="text-xs text-neutral-muted italic">Can be tailored to specific industries</span>
      </div>
      
      <!-- Topic 2 -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border">
        <div class="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
          <i class="fas fa-robot text-2xl text-accent-600"></i>
        </div>
        <h3 class="text-xl font-bold text-neutral-heading mb-2">Custom Super Agents: Beyond ChatGPT</h3>
        <p class="text-sm text-accent-600 font-semibold mb-4">Workshop (2-4 hours) with hands-on demos</p>
        <p class="text-neutral-muted mb-4">For Technical Leaders, Product Teams, Operations Managers</p>
        <h4 class="font-semibold text-neutral-heading mb-2">Key Takeaways:</h4>
        <ul class="text-sm text-neutral-muted space-y-2 mb-4">
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Genspark platform deep dive</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Multi-agent workflow design</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Prompt engineering best practices</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Live builds and Q&A</li>
        </ul>
        <span class="text-xs text-neutral-muted italic">Can include your team's specific use cases</span>
      </div>
      
      <!-- Topic 3 -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border">
        <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
          <i class="fas fa-briefcase text-2xl text-green-600"></i>
        </div>
        <h3 class="text-xl font-bold text-neutral-heading mb-2">Building an AI Consulting Practice</h3>
        <p class="text-sm text-green-600 font-semibold mb-4">Masterclass (half-day to full-day)</p>
        <p class="text-neutral-muted mb-4">For Consultants, Agencies, Service Providers</p>
        <h4 class="font-semibold text-neutral-heading mb-2">Key Takeaways:</h4>
        <ul class="text-sm text-neutral-muted space-y-2 mb-4">
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Service packaging & pricing strategies</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Client discovery & scoping frameworks</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Delivery methodologies that scale</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Differentiation in a crowded market</li>
        </ul>
        <span class="text-xs text-neutral-muted italic">Industry-specific or general consulting focus</span>
      </div>
      
      <!-- Topic 4 -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border">
        <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
          <i class="fas fa-balance-scale text-2xl text-purple-600"></i>
        </div>
        <h3 class="text-xl font-bold text-neutral-heading mb-2">AI Ethics & Responsible Automation</h3>
        <p class="text-sm text-purple-600 font-semibold mb-4">Panel, Keynote, or Interactive Discussion (45-90 min)</p>
        <p class="text-neutral-muted mb-4">For Leadership Teams, Compliance, HR</p>
        <h4 class="font-semibold text-neutral-heading mb-2">Key Takeaways:</h4>
        <ul class="text-sm text-neutral-muted space-y-2 mb-4">
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Ethical frameworks for AI deployment</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Balancing automation with human roles</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Regulatory considerations</li>
          <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Building stakeholder trust</li>
        </ul>
        <span class="text-xs text-neutral-muted italic">Organization-specific policies and concerns</span>
      </div>
    </div>
  </div>
</section>

<!-- Invite to Speak Form Section -->
<section id="invite-form" class="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Let's Bring AI Transformation Insights to Your Audience</h2>
      <p class="text-xl opacity-90">
        I'd be honored to share actionable strategies and real-world frameworks with your organization, conference, or community.
      </p>
    </div>
    
    <form id="speaking-form" class="bg-white rounded-2xl p-8 text-neutral-heading">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium mb-2">Event Name *</label>
          <input type="text" name="eventName" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Event Date (or Range) *</label>
          <input type="text" name="eventDate" required placeholder="e.g., March 15, 2026" class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Event Type *</label>
          <select name="eventType" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            <option value="">Select type...</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="corporate">Corporate Event</option>
            <option value="podcast">Podcast/Interview</option>
            <option value="webinar">Webinar</option>
            <option value="university">University/Academic</option>
            <option value="community">Community Event</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Audience Size *</label>
          <input type="number" name="audienceSize" required placeholder="e.g., 200" class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm font-medium mb-2">Audience Profile *</label>
          <input type="text" name="audienceProfile" required placeholder="e.g., C-suite executives in healthcare" class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Preferred Topic</label>
          <select name="preferredTopic" class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            <option value="">Select topic...</option>
            <option value="roadmap">The AI Transformation Roadmap</option>
            <option value="super-agents">Custom Super Agents: Beyond ChatGPT</option>
            <option value="consulting">Building an AI Consulting Practice</option>
            <option value="ethics">AI Ethics & Responsible Automation</option>
            <option value="custom">Custom/Other</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Format Preference</label>
          <select name="formatPreference" class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            <option value="">Select format...</option>
            <option value="keynote">Keynote (30-60 min)</option>
            <option value="workshop-half">Workshop (half-day)</option>
            <option value="workshop-full">Full-day Training</option>
            <option value="panel">Panel Discussion</option>
            <option value="fireside">Fireside Chat</option>
            <option value="flexible">Flexible/Discuss</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Your Name *</label>
          <input type="text" name="name" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Your Email *</label>
          <input type="email" name="email" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm font-medium mb-2">Your Organization *</label>
          <input type="text" name="organization" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm font-medium mb-2">Additional Details/Questions</label>
          <textarea name="details" rows="4" placeholder="Any additional information about your event or specific requirements..." class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
        </div>
      </div>
      
      <div class="mt-8">
        <button type="submit" class="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg">
          <i class="fas fa-paper-plane mr-2"></i>
          Submit Speaking Inquiry
        </button>
      </div>
      
      <p class="text-xs text-neutral-muted mt-4 text-center">
        I'll review your request and respond within 48 hours. Looking forward to potentially working together!
      </p>
    </form>
  </div>
</section>
`;

  return layout(content, {
    title: 'Speaking & Media',
    description: 'Invite Pierre Placide to speak at your conference, podcast, or corporate event. Topics include AI transformation, custom super agents, and building AI consulting practices.',
    canonical: 'https://aiplacide.com/speaking',
    ogImage: 'https://aiplacide.com/static/images/og-speaking.jpg'
  });
};
