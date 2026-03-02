import { layout } from '../components/layout'

export const bookingPage = () => {
  const content = `
<!-- Hero Section -->
<section class="bg-gradient-to-br from-white via-primary-50/30 to-white py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span class="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-6">
      <i class="fas fa-calendar-check mr-2"></i>Schedule a Meeting
    </span>
    <h1 class="text-4xl sm:text-5xl font-extrabold text-neutral-heading leading-tight mb-6">
      Book Time with <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Pierre</span>
    </h1>
    <p class="text-xl text-neutral-muted max-w-2xl mx-auto mb-8">
      Choose a meeting type below to schedule a conversation. All meetings are conducted via video call (Zoom/Google Meet).
    </p>
    <div class="flex flex-wrap justify-center gap-4 text-sm text-neutral-muted">
      <span class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i>Free initial consultations</span>
      <span class="flex items-center"><i class="fas fa-clock text-primary-500 mr-2"></i>Flexible scheduling</span>
      <span class="flex items-center"><i class="fas fa-globe text-accent-500 mr-2"></i>All time zones welcome</span>
    </div>
  </div>
</section>

<!-- Meeting Types Section -->
<section class="py-16 bg-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      
      <!-- Discovery Call -->
      <div class="bg-white rounded-2xl shadow-lg border border-neutral-border overflow-hidden hover:shadow-xl transition-shadow group">
        <div class="h-2 bg-gradient-to-r from-primary-500 to-primary-600"></div>
        <div class="p-8">
          <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i class="fas fa-lightbulb text-2xl text-primary-600"></i>
          </div>
          <h3 class="text-xl font-bold text-neutral-heading mb-2">Discovery Call</h3>
          <div class="flex items-center text-neutral-muted mb-4">
            <i class="fas fa-clock mr-2"></i>
            <span>30 minutes</span>
            <span class="mx-2">•</span>
            <span class="text-green-600 font-semibold">Free</span>
          </div>
          <p class="text-neutral-body mb-6">
            Explore how AI automation can transform your business. We'll discuss your challenges, goals, and whether we're a good fit.
          </p>
          <ul class="text-sm text-neutral-muted space-y-2 mb-6">
            <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Understand your business needs</li>
            <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>AI readiness assessment</li>
            <li class="flex items-start"><i class="fas fa-check text-green-500 mt-1 mr-2"></i>Explore potential solutions</li>
          </ul>
          <button onclick="openCalendlyPopup('discovery-call')" class="w-full py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
            <i class="fas fa-calendar-plus mr-2"></i>Schedule Discovery Call
          </button>
        </div>
      </div>
      
      <!-- Strategy Session -->
      <div class="bg-white rounded-2xl shadow-lg border-2 border-accent-500 overflow-hidden hover:shadow-xl transition-shadow group relative">
        <div class="absolute top-4 right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
        <div class="h-2 bg-gradient-to-r from-accent-500 to-accent-600"></div>
        <div class="p-8">
          <div class="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i class="fas fa-chess text-2xl text-accent-600"></i>
          </div>
          <h3 class="text-xl font-bold text-neutral-heading mb-2">Strategy Session</h3>
          <div class="flex items-center text-neutral-muted mb-4">
            <i class="fas fa-clock mr-2"></i>
            <span>60 minutes</span>
            <span class="mx-2">•</span>
            <span class="text-accent-600 font-semibold">$150</span>
          </div>
          <p class="text-neutral-body mb-6">
            Deep-dive into your AI strategy. Get personalized recommendations, roadmap, and actionable next steps for your transformation.
          </p>
          <ul class="text-sm text-neutral-muted space-y-2 mb-6">
            <li class="flex items-start"><i class="fas fa-check text-accent-500 mt-1 mr-2"></i>Custom AI implementation roadmap</li>
            <li class="flex items-start"><i class="fas fa-check text-accent-500 mt-1 mr-2"></i>Tool & platform recommendations</li>
            <li class="flex items-start"><i class="fas fa-check text-accent-500 mt-1 mr-2"></i>ROI projections & timeline</li>
            <li class="flex items-start"><i class="fas fa-check text-accent-500 mt-1 mr-2"></i>Recording & summary provided</li>
          </ul>
          <button onclick="openCalendlyPopup('strategy-session')" class="w-full py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors">
            <i class="fas fa-calendar-plus mr-2"></i>Book Strategy Session
          </button>
        </div>
      </div>
      
      <!-- Speaking Inquiry -->
      <div class="bg-white rounded-2xl shadow-lg border border-neutral-border overflow-hidden hover:shadow-xl transition-shadow group">
        <div class="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
        <div class="p-8">
          <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i class="fas fa-microphone-alt text-2xl text-purple-600"></i>
          </div>
          <h3 class="text-xl font-bold text-neutral-heading mb-2">Speaking Inquiry</h3>
          <div class="flex items-center text-neutral-muted mb-4">
            <i class="fas fa-clock mr-2"></i>
            <span>20 minutes</span>
            <span class="mx-2">•</span>
            <span class="text-green-600 font-semibold">Free</span>
          </div>
          <p class="text-neutral-body mb-6">
            Discuss speaking engagements, podcast appearances, webinars, or media features. Let's explore how I can add value to your audience.
          </p>
          <ul class="text-sm text-neutral-muted space-y-2 mb-6">
            <li class="flex items-start"><i class="fas fa-check text-purple-500 mt-1 mr-2"></i>Keynotes & workshops</li>
            <li class="flex items-start"><i class="fas fa-check text-purple-500 mt-1 mr-2"></i>Podcast interviews</li>
            <li class="flex items-start"><i class="fas fa-check text-purple-500 mt-1 mr-2"></i>Media features</li>
          </ul>
          <button onclick="openCalendlyPopup('speaking-inquiry')" class="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors">
            <i class="fas fa-calendar-plus mr-2"></i>Discuss Speaking
          </button>
        </div>
      </div>
      
    </div>
    
    <!-- Additional Options -->
    <div class="grid md:grid-cols-2 gap-8">
      
      <!-- Quick Coffee Chat -->
      <div class="bg-gradient-to-br from-neutral-bg to-white rounded-2xl p-8 border border-neutral-border">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fas fa-mug-hot text-xl text-amber-600"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-neutral-heading mb-2">Quick Coffee Chat</h3>
            <p class="text-neutral-muted text-sm mb-4">
              15-minute casual conversation for networking, quick questions, or just to connect. No agenda required.
            </p>
            <button onclick="openCalendlyPopup('coffee-chat')" class="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              <i class="fas fa-calendar-alt mr-2"></i>Schedule Coffee Chat →
            </button>
          </div>
        </div>
      </div>
      
      <!-- Partnership Discussion -->
      <div class="bg-gradient-to-br from-neutral-bg to-white rounded-2xl p-8 border border-neutral-border">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fas fa-handshake text-xl text-green-600"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-neutral-heading mb-2">Partnership Discussion</h3>
            <p class="text-neutral-muted text-sm mb-4">
              30-minute call to explore potential collaborations, joint ventures, or strategic partnerships.
            </p>
            <button onclick="openCalendlyPopup('partnership')" class="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              <i class="fas fa-calendar-alt mr-2"></i>Discuss Partnership →
            </button>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</section>

<!-- Embedded Calendar Section -->
<section id="calendar-embed" class="py-16 bg-neutral-bg">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-neutral-heading mb-4">Or View My Full Availability</h2>
      <p class="text-neutral-muted">Browse all available time slots and book directly below</p>
    </div>
    
    <!-- Calendar Embed Placeholder (will be replaced by actual embed) -->
    <div id="calendly-inline-embed" class="bg-white rounded-2xl shadow-lg border border-neutral-border overflow-hidden" style="min-height: 700px;">
      <div class="flex flex-col items-center justify-center h-full py-20">
        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
          <i class="fas fa-calendar-alt text-2xl text-primary-600"></i>
        </div>
        <h3 class="text-xl font-semibold text-neutral-heading mb-2">Calendar Loading...</h3>
        <p class="text-neutral-muted text-center max-w-md mb-6">
          If the calendar doesn't load, you can also book directly via:
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="https://calendly.com/aiplacide" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
            <i class="fas fa-external-link-alt mr-2"></i>Open Calendly
          </a>
          <a href="mailto:pierre@aiplacide.com?subject=Meeting Request" class="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-200 hover:border-primary-300 transition-colors">
            <i class="fas fa-envelope mr-2"></i>Email to Schedule
          </a>
        </div>
      </div>
    </div>
    
    <p class="text-center text-sm text-neutral-muted mt-6">
      <i class="fas fa-info-circle mr-2"></i>
      All times shown in your local timezone. Meetings conducted via Zoom or Google Meet.
    </p>
  </div>
</section>

<!-- What to Expect Section -->
<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-neutral-heading mb-4">What to Expect</h2>
      <p class="text-neutral-muted">A seamless, professional scheduling experience</p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      
      <div class="text-center">
        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="text-2xl font-bold text-primary-600">1</span>
        </div>
        <h3 class="text-lg font-semibold text-neutral-heading mb-2">Book Your Slot</h3>
        <p class="text-neutral-muted text-sm">
          Choose a meeting type and select a time that works for you. Instant confirmation via email.
        </p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="text-2xl font-bold text-accent-600">2</span>
        </div>
        <h3 class="text-lg font-semibold text-neutral-heading mb-2">Get Prepared</h3>
        <p class="text-neutral-muted text-sm">
          You'll receive a calendar invite with meeting link and any prep questions to maximize our time.
        </p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="text-2xl font-bold text-green-600">3</span>
        </div>
        <h3 class="text-lg font-semibold text-neutral-heading mb-2">Connect & Transform</h3>
        <p class="text-neutral-muted text-sm">
          Join the video call on time. Let's have a productive conversation and unlock new possibilities.
        </p>
      </div>
      
    </div>
    
    <!-- Preparation Tips -->
    <div class="mt-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
      <h3 class="text-xl font-bold text-neutral-heading mb-4">
        <i class="fas fa-lightbulb text-accent-500 mr-2"></i>
        Preparation Tips for a Great Meeting
      </h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-semibold text-neutral-heading mb-2">Before the Call:</h4>
          <ul class="text-sm text-neutral-body space-y-2">
            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>Test your video/audio setup</li>
            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>Find a quiet, well-lit space</li>
            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>Have specific questions ready</li>
            <li class="flex items-start"><i class="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>Review your current challenges</li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-neutral-heading mb-2">What I'll Need from You:</h4>
          <ul class="text-sm text-neutral-body space-y-2">
            <li class="flex items-start"><i class="fas fa-arrow-right text-primary-500 mt-0.5 mr-2"></i>Brief overview of your business</li>
            <li class="flex items-start"><i class="fas fa-arrow-right text-primary-500 mt-0.5 mr-2"></i>Current pain points or goals</li>
            <li class="flex items-start"><i class="fas fa-arrow-right text-primary-500 mt-0.5 mr-2"></i>Timeline expectations</li>
            <li class="flex items-start"><i class="fas fa-arrow-right text-primary-500 mt-0.5 mr-2"></i>Budget range (for strategy sessions)</li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-16 bg-neutral-bg">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-neutral-heading mb-4">What Clients Say</h2>
      <p class="text-neutral-muted">Real feedback from real conversations</p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-neutral-border">
        <div class="flex items-center gap-1 text-accent-500 mb-4">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p class="text-neutral-body mb-4 font-serif italic">
          "The discovery call exceeded my expectations. Pierre quickly understood our challenges and provided actionable insights even before we engaged."
        </p>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
            <span class="text-primary-600 font-bold text-sm">JM</span>
          </div>
          <div>
            <p class="font-semibold text-neutral-heading text-sm">James Mitchell</p>
            <p class="text-neutral-muted text-xs">CEO, TechFlow Solutions</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-neutral-border">
        <div class="flex items-center gap-1 text-accent-500 mb-4">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p class="text-neutral-body mb-4 font-serif italic">
          "The strategy session was transformative. We left with a clear AI roadmap and have already started implementing the recommendations."
        </p>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center mr-3">
            <span class="text-accent-600 font-bold text-sm">SK</span>
          </div>
          <div>
            <p class="font-semibold text-neutral-heading text-sm">Sarah Kim</p>
            <p class="text-neutral-muted text-xs">Operations Director, GlobalCorp</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-neutral-border">
        <div class="flex items-center gap-1 text-accent-500 mb-4">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p class="text-neutral-body mb-4 font-serif italic">
          "Pierre's podcast interview was engaging and informative. Our audience loved the practical AI insights he shared. Highly recommend!"
        </p>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <span class="text-purple-600 font-bold text-sm">DR</span>
          </div>
          <div>
            <p class="font-semibold text-neutral-heading text-sm">David Rodriguez</p>
            <p class="text-neutral-muted text-xs">Host, Future Tech Podcast</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-16 bg-white">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-neutral-heading mb-4">Frequently Asked Questions</h2>
    </div>
    
    <div class="space-y-4">
      
      <details class="bg-neutral-bg rounded-xl p-6 group">
        <summary class="flex justify-between items-center cursor-pointer list-none">
          <span class="font-semibold text-neutral-heading">What if I need to reschedule?</span>
          <i class="fas fa-chevron-down text-primary-500 transition-transform group-open:rotate-180"></i>
        </summary>
        <p class="text-neutral-body mt-4">
          No problem! You can reschedule or cancel up to 24 hours before your meeting using the link in your confirmation email. Life happens—I understand.
        </p>
      </details>
      
      <details class="bg-neutral-bg rounded-xl p-6 group">
        <summary class="flex justify-between items-center cursor-pointer list-none">
          <span class="font-semibold text-neutral-heading">What video platform do you use?</span>
          <i class="fas fa-chevron-down text-primary-500 transition-transform group-open:rotate-180"></i>
        </summary>
        <p class="text-neutral-body mt-4">
          I typically use Zoom for video calls, but I can accommodate Google Meet or Microsoft Teams if preferred. Just mention your preference when booking.
        </p>
      </details>
      
      <details class="bg-neutral-bg rounded-xl p-6 group">
        <summary class="flex justify-between items-center cursor-pointer list-none">
          <span class="font-semibold text-neutral-heading">What timezone are you in?</span>
          <i class="fas fa-chevron-down text-primary-500 transition-transform group-open:rotate-180"></i>
        </summary>
        <p class="text-neutral-body mt-4">
          I'm based in Naples, FL (Eastern Time), but I work with clients globally. The booking system automatically shows times in your local timezone.
        </p>
      </details>
      
      <details class="bg-neutral-bg rounded-xl p-6 group">
        <summary class="flex justify-between items-center cursor-pointer list-none">
          <span class="font-semibold text-neutral-heading">Do you offer phone calls instead of video?</span>
          <i class="fas fa-chevron-down text-primary-500 transition-transform group-open:rotate-180"></i>
        </summary>
        <p class="text-neutral-body mt-4">
          I prefer video calls as they allow for better connection and the ability to share screens if needed. However, if video isn't possible, we can arrange a phone call—just let me know.
        </p>
      </details>
      
      <details class="bg-neutral-bg rounded-xl p-6 group">
        <summary class="flex justify-between items-center cursor-pointer list-none">
          <span class="font-semibold text-neutral-heading">What if I'm not sure which meeting type to choose?</span>
          <i class="fas fa-chevron-down text-primary-500 transition-transform group-open:rotate-180"></i>
        </summary>
        <p class="text-neutral-body mt-4">
          Start with a free Discovery Call! It's the perfect way to explore your needs and determine the best path forward. There's no commitment, and we can always upgrade to a Strategy Session if needed.
        </p>
      </details>
      
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gradient-to-br from-primary-600 to-primary-700">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold text-white mb-4">Ready to Take the Next Step?</h2>
    <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
      The best time to start transforming your business with AI is now. Let's have a conversation that could change everything.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <button onclick="scrollToCalendar()" class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 shadow-lg transition-all">
        <i class="fas fa-calendar-check mr-3"></i>
        Book Your Free Call Now
      </button>
      <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all">
        <i class="fas fa-envelope mr-3"></i>
        Have Questions First?
      </a>
    </div>
  </div>
</section>

<!-- Calendly Widget Script -->
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<script>
// Calendly configuration - Replace with your actual Calendly username
const CALENDLY_USERNAME = 'aiplacide';

// Meeting type URLs
const meetingTypes = {
  'discovery-call': CALENDLY_USERNAME + '/discovery-call',
  'strategy-session': CALENDLY_USERNAME + '/strategy-session',
  'speaking-inquiry': CALENDLY_USERNAME + '/speaking-inquiry',
  'coffee-chat': CALENDLY_USERNAME + '/coffee-chat',
  'partnership': CALENDLY_USERNAME + '/partnership-discussion'
};

// Open Calendly popup for specific meeting type
function openCalendlyPopup(type) {
  const url = meetingTypes[type] || CALENDLY_USERNAME;
  
  // Track booking intent in GA4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'booking_initiated', {
      event_category: 'scheduling',
      event_label: type,
      meeting_type: type
    });
  }
  
  Calendly.initPopupWidget({
    url: 'https://calendly.com/' + url,
    prefill: {},
    utm: {
      utmSource: 'aiplacide-website',
      utmMedium: 'booking-page',
      utmCampaign: type
    }
  });
  
  return false;
}

// Scroll to calendar embed
function scrollToCalendar() {
  const calendarSection = document.getElementById('calendar-embed');
  if (calendarSection) {
    calendarSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Initialize inline embed when page loads
document.addEventListener('DOMContentLoaded', function() {
  const embedContainer = document.getElementById('calendly-inline-embed');
  
  if (typeof Calendly !== 'undefined' && embedContainer) {
    // Clear placeholder and initialize embed
    embedContainer.innerHTML = '';
    Calendly.initInlineWidget({
      url: 'https://calendly.com/' + CALENDLY_USERNAME,
      parentElement: embedContainer,
      prefill: {},
      utm: {
        utmSource: 'aiplacide-website',
        utmMedium: 'inline-embed',
        utmCampaign: 'booking-page'
      }
    });
    
    // Set minimum height for embed
    embedContainer.style.minHeight = '700px';
  }
  
  // Track Calendly events
  window.addEventListener('message', function(e) {
    if (e.data.event && e.data.event.indexOf('calendly') === 0) {
      // Track booking completed
      if (e.data.event === 'calendly.event_scheduled') {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'booking_completed', {
            event_category: 'scheduling',
            event_label: 'meeting_booked',
            value: 1
          });
          gtag('event', 'generate_lead', {
            currency: 'USD',
            value: 25.00
          });
        }
      }
    }
  });
});
</script>
`;

  return layout(content, {
    title: 'Book a Meeting - Schedule Time with Pierre',
    description: 'Schedule a discovery call, strategy session, or speaking inquiry with Pierre Placide. Free consultations available. All meetings via video call.',
    canonical: 'https://aiplacide.com/booking',
    ogImage: 'https://aiplacide.com/static/images/og-contact.jpg'
  });
};
