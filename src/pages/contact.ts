import { layout } from '../components/layout'

export const contactPage = () => {
  const content = `
<!-- Hero Section -->
<section class="bg-gradient-to-br from-white via-primary-50/30 to-white py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
      Get in Touch
    </span>
    <h1 class="text-4xl sm:text-5xl font-extrabold text-neutral-heading leading-tight mb-6">
      Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Connect</span>
    </h1>
    <p class="text-xl text-neutral-muted max-w-2xl mx-auto">
      Whether you're looking for business transformation, speaking opportunities, or collaboration — I'm here to help.
    </p>
  </div>
</section>

<!-- Main Content -->
<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-3 gap-12">
      
      <!-- Left: Contact Options -->
      <div class="lg:col-span-2 space-y-12">
        
        <!-- Business Inquiries -->
        <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <i class="fas fa-briefcase text-2xl text-white"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-neutral-heading">For Business Inquiries</h2>
              <p class="text-neutral-muted">Ready to Transform Your Business with AI?</p>
            </div>
          </div>
          
          <p class="text-neutral-body mb-6">
            If you're exploring custom AI agent development, strategic transformation, or implementation support, I'd love to hear about your vision.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="https://unikabiz.com" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 shadow-lg transition-all">
              <span>Visit UNIKABIZ.COM</span>
              <i class="fas fa-external-link-alt ml-3"></i>
            </a>
            <a href="mailto:pierre@aiplacide.com" class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all">
              <i class="fas fa-envelope mr-3"></i>
              Quick Question? Email Me
            </a>
          </div>
          
          <p class="text-sm text-neutral-muted mt-4">
            Explore our services, view case studies, and schedule a strategy consultation at UNIKABIZ.
          </p>
        </div>
        
        <!-- Speaking & Media Inquiries -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <i class="fas fa-microphone-alt text-2xl text-white"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-neutral-heading">For Speaking & Media</h2>
              <p class="text-neutral-muted">Invite Me to Speak or Collaborate on Content</p>
            </div>
          </div>
          
          <p class="text-neutral-body mb-6">
            I'm always excited to share insights at conferences, podcasts, workshops, and industry events. Let's discuss how I can add value to your audience.
          </p>
          
          <form id="speaking-inquiry-form" class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-neutral-heading mb-2">Inquiry Type *</label>
                <select name="inquiryType" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option value="">Select type...</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="podcast">Podcast Interview</option>
                  <option value="media">Media Feature / Quote</option>
                  <option value="webinar">Webinar / Virtual Event</option>
                  <option value="collaboration">Content Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-heading mb-2">Your Name *</label>
                <input type="text" name="name" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-heading mb-2">Your Email *</label>
                <input type="email" name="email" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-heading mb-2">Organization / Platform</label>
                <input type="text" name="organization" class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-heading mb-2">Event/Project Details</label>
              <textarea name="details" rows="4" placeholder="Date, audience size, topic preferences, etc." class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
            </div>
            <button type="submit" class="w-full py-4 bg-accent-500 text-white font-bold rounded-lg hover:bg-accent-600 transition-all shadow-lg">
              <i class="fas fa-paper-plane mr-2"></i>
              Submit Inquiry
            </button>
          </form>
          
          <p class="text-xs text-neutral-muted mt-4 text-center">
            I review all speaking and media requests personally and respond within 48 hours.
          </p>
        </div>
        
        <!-- Partnerships & Collaboration -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <i class="fas fa-handshake text-2xl text-white"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-neutral-heading">For Partnerships & Collaboration</h2>
              <p class="text-neutral-muted">Interested in Working Together?</p>
            </div>
          </div>
          
          <p class="text-neutral-body mb-6">
            I'm open to strategic partnerships with complementary service providers, technology platforms, and fellow consultants. Let's explore how we can create value together.
          </p>
          
          <form id="partnership-form" class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-neutral-heading mb-2">Your Name *</label>
                <input type="text" name="name" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-heading mb-2">Your Email *</label>
                <input type="email" name="email" required class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-heading mb-2">Company / Organization</label>
                <input type="text" name="company" class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-heading mb-2">Partnership Type</label>
                <select name="partnershipType" class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option value="">Select type...</option>
                  <option value="service">Service Collaboration (joint projects)</option>
                  <option value="technology">Technology Partnership</option>
                  <option value="affiliate">Affiliate / Referral Partnership</option>
                  <option value="content">Content Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-heading mb-2">Tell Me About Your Idea</label>
              <textarea name="idea" rows="4" placeholder="Describe your partnership proposal..." class="w-full px-4 py-3 border border-neutral-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
            </div>
            <button type="submit" class="w-full py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all shadow-lg">
              <i class="fas fa-handshake mr-2"></i>
              Propose Collaboration
            </button>
          </form>
        </div>
      </div>
      
      <!-- Right: Sidebar -->
      <div class="lg:col-span-1 space-y-8">
        
        <!-- Stay Connected -->
        <div class="bg-neutral-bg rounded-2xl p-8">
          <h3 class="text-xl font-bold text-neutral-heading mb-6">Let's Stay Connected</h3>
          <p class="text-neutral-muted mb-6">
            The best conversations happen on LinkedIn. Follow me for daily insights, connect to network, or send a message to start a dialogue.
          </p>
          
          <div class="space-y-4">
            <a href="https://linkedin.com/in/pierreplacide" target="_blank" rel="noopener" class="flex items-center px-6 py-4 bg-[#0077B5] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
              <i class="fab fa-linkedin-in text-xl mr-4"></i>
              Connect on LinkedIn
            </a>
            <a href="https://twitter.com/aiplacide" target="_blank" rel="noopener" class="flex items-center px-6 py-4 bg-black text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
              <i class="fab fa-x-twitter text-xl mr-4"></i>
              Follow on Twitter
            </a>
            <a href="https://youtube.com/@aiplacide" target="_blank" rel="noopener" class="flex items-center px-6 py-4 bg-[#FF0000] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
              <i class="fab fa-youtube text-xl mr-4"></i>
              Subscribe on YouTube
            </a>
          </div>
        </div>
        
        <!-- Newsletter -->
        <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
          <h3 class="text-xl font-bold mb-4">Prefer Insights Delivered to Your Inbox?</h3>
          <p class="opacity-90 mb-6">
            Join 500+ leaders getting weekly AI strategies.
          </p>
          <form id="contact-newsletter-form" class="space-y-4">
            <input type="email" name="email" required placeholder="Your email address" class="w-full px-4 py-3 rounded-lg text-neutral-heading focus:ring-2 focus:ring-accent-500 focus:outline-none">
            <button type="submit" class="w-full py-3 bg-accent-500 text-white font-bold rounded-lg hover:bg-accent-600 transition-colors">
              Subscribe Free
            </button>
          </form>
        </div>
        
        <!-- Direct Contact -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-neutral-border">
          <h3 class="text-xl font-bold text-neutral-heading mb-6">Direct Contact</h3>
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <i class="fas fa-envelope text-primary-600"></i>
              </div>
              <div>
                <p class="text-sm text-neutral-muted">Email</p>
                <a href="mailto:pierre@aiplacide.com" class="text-primary-600 font-semibold hover:text-primary-700">pierre@aiplacide.com</a>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <i class="fas fa-map-marker-alt text-primary-600"></i>
              </div>
              <div>
                <p class="text-sm text-neutral-muted">Location</p>
                <p class="text-neutral-heading font-semibold">Naples, FL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- What to Expect Section -->
<section class="py-16 bg-neutral-bg">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-neutral-heading mb-4">What to Expect When You Reach Out</h2>
    </div>
    
    <div class="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-neutral-border">
      <div class="flex flex-col lg:flex-row gap-8 items-center">
        <div class="lg:w-1/3">
          <div class="w-32 h-32 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center overflow-hidden">
            <img src="/static/images/pierre-friendly.jpg" alt="Pierre Placide" class="w-full h-full object-cover" onerror="this.outerHTML='<span class=\\'text-white font-bold text-4xl\\'>PP</span>'">
          </div>
        </div>
        <div class="lg:w-2/3">
          <p class="text-lg text-neutral-body leading-relaxed font-serif italic mb-6">
            "I believe in the power of authentic connection. When you reach out, here's what you can expect:"
          </p>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <i class="fas fa-user text-primary-500 mt-1 mr-3"></i>
              <div>
                <strong class="text-neutral-heading">Personal Attention</strong>
                <p class="text-neutral-muted text-sm">I read every message personally (no automated responses or VA screening)</p>
              </div>
            </li>
            <li class="flex items-start">
              <i class="fas fa-brain text-primary-500 mt-1 mr-3"></i>
              <div>
                <strong class="text-neutral-heading">Thoughtful Response</strong>
                <p class="text-neutral-muted text-sm">I take time to understand your specific situation before replying</p>
              </div>
            </li>
            <li class="flex items-start">
              <i class="fas fa-heart text-primary-500 mt-1 mr-3"></i>
              <div>
                <strong class="text-neutral-heading">No Pressure</strong>
                <p class="text-neutral-muted text-sm">Whether you're exploring ideas or ready to move forward, there's zero sales pressure</p>
              </div>
            </li>
            <li class="flex items-start">
              <i class="fas fa-hands-helping text-primary-500 mt-1 mr-3"></i>
              <div>
                <strong class="text-neutral-heading">Collaborative Spirit</strong>
                <p class="text-neutral-muted text-sm">I'm here to help you succeed, whether through UNIKABIZ services or just strategic guidance</p>
              </div>
            </li>
          </ul>
          
          <div class="bg-neutral-bg rounded-lg p-4">
            <h4 class="font-semibold text-neutral-heading mb-2">Response Time Commitment:</h4>
            <ul class="text-sm text-neutral-muted space-y-1">
              <li><strong>Business inquiries (via UNIKABIZ):</strong> Within 24 hours (weekdays)</li>
              <li><strong>Speaking/media requests:</strong> Within 48 hours</li>
              <li><strong>General networking:</strong> Within 3-5 days</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-neutral-border text-center">
        <p class="text-neutral-heading font-semibold mb-2">Pierre Placide</p>
        <p class="text-neutral-muted text-sm">AI Generative Consultant & Genspark Specialist</p>
        <p class="text-primary-600 text-sm">AIPLACIDE.COM | UNIKABIZ.COM</p>
      </div>
    </div>
  </div>
</section>
`;

  return layout(content, {
    title: 'Contact & Connect',
    description: 'Get in touch with Pierre Placide for business inquiries, speaking opportunities, partnerships, or general networking. Explore UNIKABIZ for AI transformation services.',
    canonical: 'https://aiplacide.com/contact',
    ogImage: 'https://aiplacide.com/static/images/og-contact.jpg'
  });
};
