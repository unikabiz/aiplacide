import { layout } from '../components/layout'

export const newsletterPage = () => {
  const content = `
<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 relative overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute inset-0 opacity-10">
    <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <circle cx="80" cy="20" r="20" fill="white"/>
      <circle cx="20" cy="80" r="30" fill="white"/>
      <circle cx="60" cy="60" r="15" fill="white"/>
    </svg>
  </div>
  
  <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span class="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
      <i class="fas fa-envelope-open-text mr-2"></i>Weekly Newsletter
    </span>
    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
      AI Transformation Insights — Delivered Weekly
    </h1>
    <p class="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
      Join <span class="font-bold">500+ forward-thinking business leaders</span> receiving exclusive strategies, case studies, and actionable frameworks every Tuesday.
    </p>
  </div>
</section>

<!-- Main Signup Section -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      
      <!-- Left: Value Proposition -->
      <div>
        <h2 class="text-3xl font-bold text-neutral-heading mb-8">What You'll Receive Every Tuesday</h2>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <i class="fas fa-robot text-xl text-primary-600"></i>
            </div>
            <div>
              <h3 class="font-bold text-neutral-heading mb-1">Exclusive Genspark Super Agent Strategies</h3>
              <p class="text-neutral-muted">Insider tips and techniques not published anywhere else — learn what's working right now.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <i class="fas fa-chart-line text-xl text-accent-600"></i>
            </div>
            <div>
              <h3 class="font-bold text-neutral-heading mb-1">Real-World Case Studies</h3>
              <p class="text-neutral-muted">Behind-the-scenes breakdowns with actual ROI numbers and transformation blueprints.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <i class="fas fa-download text-xl text-green-600"></i>
            </div>
            <div>
              <h3 class="font-bold text-neutral-heading mb-1">Actionable Frameworks & Templates</h3>
              <p class="text-neutral-muted">Download and use immediately — from discovery templates to ROI calculators.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <i class="fas fa-unlock text-xl text-purple-600"></i>
            </div>
            <div>
              <h3 class="font-bold text-neutral-heading mb-1">Early Access to Tools & Resources</h3>
              <p class="text-neutral-muted">Be the first to access new assessments, frameworks, and partner resources.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <i class="fas fa-video text-xl text-blue-600"></i>
            </div>
            <div>
              <h3 class="font-bold text-neutral-heading mb-1">Behind-the-Scenes Client Insights</h3>
              <p class="text-neutral-muted">Learn from real implementation challenges and solutions from UNIKABIZ projects.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right: Signup Form -->
      <div class="bg-neutral-bg rounded-3xl p-8 lg:p-12">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-envelope text-3xl text-white"></i>
          </div>
          <h3 class="text-2xl font-bold text-neutral-heading mb-2">Subscribe for Free</h3>
          <p class="text-neutral-muted">Join the AI transformation community</p>
        </div>
        
        <form id="newsletter-main-form" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-neutral-heading mb-2">First Name</label>
            <input type="text" name="firstName" placeholder="Pierre" class="w-full px-4 py-4 border border-neutral-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg">
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-heading mb-2">Email Address *</label>
            <input type="email" name="email" required placeholder="you@company.com" class="w-full px-4 py-4 border border-neutral-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg">
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-heading mb-2">What interests you most?</label>
            <select name="interest" class="w-full px-4 py-4 border border-neutral-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg">
              <option value="">Select your primary interest...</option>
              <option value="agents">Custom AI Agent Development</option>
              <option value="strategy">AI Business Strategy</option>
              <option value="consulting">Building an AI Consulting Practice</option>
              <option value="trends">AI Industry Trends & News</option>
              <option value="all">All of the Above</option>
            </select>
          </div>
          <button type="submit" class="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg transform hover:-translate-y-0.5">
            <i class="fas fa-paper-plane mr-2"></i>
            Get Weekly Insights
          </button>
        </form>
        
        <div class="mt-6 text-center">
          <p class="text-sm text-neutral-muted mb-3">
            <i class="fas fa-calendar-alt mr-2"></i>Every Tuesday, 8 AM EST
          </p>
          <p class="text-xs text-neutral-muted">
            <i class="fas fa-lock mr-1"></i>
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
        
        <!-- Free Gift -->
        <div class="mt-8 pt-8 border-t border-neutral-border">
          <div class="flex items-center bg-accent-50 rounded-xl p-4">
            <div class="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
              <i class="fas fa-gift text-white"></i>
            </div>
            <div>
              <p class="font-semibold text-neutral-heading text-sm">Subscribe Now & Get Instant Access:</p>
              <p class="text-accent-700 font-bold">"The 10 Best Prompts for Business AI Agents" (PDF)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Sample Newsletter Preview -->
<section class="py-20 bg-neutral-bg">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-neutral-heading mb-4">See What You'll Get</h2>
      <p class="text-xl text-neutral-muted">Preview of a recent newsletter issue</p>
    </div>
    
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-border">
      <!-- Email Header -->
      <div class="bg-neutral-heading text-white px-8 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mr-3">
              <span class="text-white font-bold">AP</span>
            </div>
            <div>
              <p class="font-semibold">AI Transformation Insights</p>
              <p class="text-sm opacity-70">Pierre Placide | AIPLACIDE.COM</p>
            </div>
          </div>
          <span class="text-sm opacity-70">Tuesday, Feb 25, 2026</span>
        </div>
      </div>
      
      <!-- Email Content Preview -->
      <div class="px-8 py-8">
        <p class="text-neutral-muted mb-4">Hey there,</p>
        
        <p class="text-neutral-body mb-6">
          This week I helped a healthcare client automate their entire patient intake process—<strong class="text-accent-600">72% time savings</strong>. Here's what we learned...
        </p>
        
        <h3 class="text-xl font-bold text-neutral-heading mb-4">🎯 This Week's Deep Dive: Multi-Agent Orchestration</h3>
        
        <p class="text-neutral-body mb-4">
          Most teams approach AI automation wrong. They build one agent to do everything, then wonder why it fails at scale...
        </p>
        
        <div class="bg-primary-50 border-l-4 border-primary-500 p-4 mb-6 rounded-r-lg">
          <p class="text-primary-800 font-semibold mb-2">💡 Key Insight:</p>
          <p class="text-primary-700">The secret to successful automation is specialization. Build small, focused agents that do one thing exceptionally well, then orchestrate them together.</p>
        </div>
        
        <p class="text-neutral-muted text-sm italic mb-6">[Continue reading in full newsletter...]</p>
        
        <div class="border-t border-neutral-border pt-6">
          <p class="text-sm text-neutral-muted text-center">
            <strong>What subscribers say:</strong> <em>"Pierre's weekly insights have become essential reading for our strategy team."</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Social Proof Section -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-neutral-heading mb-4">What Subscribers Are Saying</h2>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-neutral-bg rounded-2xl p-8">
        <div class="flex items-center mb-4">
          <div class="flex text-accent-500">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <p class="text-neutral-body italic mb-6">
          "Pierre's newsletter is the only one I read start to finish every week. The case studies alone are worth subscribing for."
        </p>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-3">JM</div>
          <div>
            <p class="font-semibold text-neutral-heading text-sm">James M.</p>
            <p class="text-xs text-neutral-muted">CTO, Tech Startup</p>
          </div>
        </div>
      </div>
      
      <div class="bg-neutral-bg rounded-2xl p-8">
        <div class="flex items-center mb-4">
          <div class="flex text-accent-500">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <p class="text-neutral-body italic mb-6">
          "I implemented one prompt technique from Pierre's newsletter and it improved our AI accuracy by 40%. Incredible value."
        </p>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold mr-3">SL</div>
          <div>
            <p class="font-semibold text-neutral-heading text-sm">Sarah L.</p>
            <p class="text-xs text-neutral-muted">Director of Operations</p>
          </div>
        </div>
      </div>
      
      <div class="bg-neutral-bg rounded-2xl p-8">
        <div class="flex items-center mb-4">
          <div class="flex text-accent-500">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <p class="text-neutral-body italic mb-6">
          "The behind-the-scenes insights from real client projects are gold. This isn't theory — it's battle-tested strategy."
        </p>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">RK</div>
          <div>
            <p class="font-semibold text-neutral-heading text-sm">Robert K.</p>
            <p class="text-xs text-neutral-muted">AI Consultant</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Stats -->
    <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold text-primary-600 mb-2">500+</div>
        <p class="text-neutral-muted">Active Subscribers</p>
      </div>
      <div>
        <div class="text-4xl font-bold text-primary-600 mb-2">45%</div>
        <p class="text-neutral-muted">Open Rate</p>
      </div>
      <div>
        <div class="text-4xl font-bold text-primary-600 mb-2">52</div>
        <p class="text-neutral-muted">Issues Published</p>
      </div>
      <div>
        <div class="text-4xl font-bold text-primary-600 mb-2">4.9</div>
        <p class="text-neutral-muted">Avg. Rating</p>
      </div>
    </div>
  </div>
</section>

<!-- Final CTA -->
<section class="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform How You Think About AI?</h2>
    <p class="text-xl opacity-90 mb-10">
      Join the newsletter and get actionable strategies delivered to your inbox every Tuesday.
    </p>
    
    <form id="newsletter-footer-form" class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6">
      <input type="email" name="email" required placeholder="Enter your email address" class="flex-1 px-6 py-4 rounded-xl text-neutral-heading focus:ring-2 focus:ring-accent-500 focus:outline-none text-lg">
      <button type="submit" class="px-8 py-4 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-all shadow-lg whitespace-nowrap text-lg">
        Subscribe Free
      </button>
    </form>
    
    <p class="text-sm opacity-70">
      No spam. Unsubscribe anytime. <a href="/privacy" class="underline hover:no-underline">Privacy Policy</a>
    </p>
  </div>
</section>
`;

  return layout(content, {
    title: 'Newsletter - AI Transformation Insights',
    description: 'Subscribe to AI Transformation Insights by Pierre Placide. Weekly strategies, case studies, and frameworks for AI-powered business transformation. Join 500+ forward-thinking leaders.',
    canonical: 'https://aiplacide.com/newsletter',
    ogImage: 'https://aiplacide.com/static/images/og-newsletter.jpg'
  });
};
