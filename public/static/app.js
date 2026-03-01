// AIPLACIDE.COM Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        icon.className = 'fas fa-bars text-xl text-neutral-heading';
      } else {
        icon.className = 'fas fa-times text-xl text-neutral-heading';
      }
    });
  }
  
  // Sticky banner show/hide on scroll
  const stickyBanner = document.getElementById('sticky-banner');
  const closeBanner = document.getElementById('close-banner');
  let bannerDismissed = sessionStorage.getItem('bannerDismissed') === 'true';
  
  if (stickyBanner && !bannerDismissed) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 800) {
        stickyBanner.classList.add('show');
      } else {
        stickyBanner.classList.remove('show');
      }
    });
    
    if (closeBanner) {
      closeBanner.addEventListener('click', function() {
        stickyBanner.classList.remove('show');
        stickyBanner.style.display = 'none';
        sessionStorage.setItem('bannerDismissed', 'true');
      });
    }
  }
  
  // Form submission handlers
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      const formId = form.id;
      
      // Determine API endpoint based on form
      let endpoint = '/api/newsletter';
      let isNewsletter = true;
      if (formId.includes('speaking') || formId.includes('inquiry')) {
        endpoint = '/api/speaking';
        isNewsletter = false;
      } else if (formId.includes('partnership') || formId.includes('contact')) {
        endpoint = '/api/contact';
        isNewsletter = false;
      } else if (formId.includes('assessment')) {
        endpoint = '/api/assessment';
        isNewsletter = false;
      }
      
      // Validate email for newsletter
      if (isNewsletter && data.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
          showToast('Please enter a valid email address.', 'error');
          return;
        }
      }
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Subscribing...';
      submitBtn.disabled = true;
      
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        const result = await response.json();
        
        if (result.success) {
          // Special handling for newsletter subscriptions
          if (isNewsletter) {
            showToast('🎉 ' + result.message, 'success');
            form.reset();
            
            // Show success state on the form
            const formContainer = form.closest('.bg-neutral-bg, .bg-gradient-to-br');
            if (formContainer && formId.includes('main')) {
              showNewsletterSuccess(form, data.email);
            }
            
            // Track newsletter conversion with GA4
            if (typeof window.trackNewsletterSignup === 'function') {
              window.trackNewsletterSignup(data.interest || 'general');
            } else if (typeof gtag !== 'undefined') {
              gtag('event', 'newsletter_signup', {
                event_category: 'engagement',
                event_label: data.interest || 'general',
                value: 1
              });
              gtag('event', 'generate_lead', {
                currency: 'USD',
                value: 5.00
              });
            }
          } else if (formId.includes('speaking') || formId.includes('inquiry')) {
            showToast('Success! ' + result.message, 'success');
            form.reset();
            
            // Track speaking inquiry with GA4
            if (typeof window.trackSpeakingInquiry === 'function') {
              window.trackSpeakingInquiry(data.eventType || 'general');
            } else if (typeof gtag !== 'undefined') {
              gtag('event', 'speaking_inquiry', {
                event_category: 'leads',
                event_label: data.eventType || 'general',
                value: 50.00
              });
            }
          } else if (formId.includes('contact')) {
            showToast('Success! ' + result.message, 'success');
            form.reset();
            
            // Track contact form with GA4
            if (typeof window.trackContactForm === 'function') {
              window.trackContactForm(data.subject || 'general');
            } else if (typeof gtag !== 'undefined') {
              gtag('event', 'contact_form_submit', {
                event_category: 'engagement',
                event_label: data.subject || 'general'
              });
            }
          } else {
            showToast('Success! ' + result.message, 'success');
            form.reset();
          }
        } else {
          showToast(result.message || 'Something went wrong. Please try again.', 'error');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        showToast('Network error. Please check your connection and try again.', 'error');
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  });
  
  // Newsletter success state
  function showNewsletterSuccess(form, email) {
    const successHtml = `
      <div class="text-center py-8 animate-fadeIn">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i class="fas fa-check text-4xl text-green-500"></i>
        </div>
        <h3 class="text-2xl font-bold text-neutral-heading mb-3">You're In! 🎉</h3>
        <p class="text-neutral-muted mb-4">
          We've sent a confirmation email to<br>
          <strong class="text-neutral-heading">${email}</strong>
        </p>
        <p class="text-sm text-neutral-muted">
          Check your inbox and click the confirmation link to complete your subscription.
        </p>
        <div class="mt-6 pt-6 border-t border-neutral-border">
          <p class="text-sm text-neutral-muted mb-3">
            <i class="fas fa-gift text-accent-500 mr-2"></i>
            Your free guide "The 10 Best Prompts for Business AI Agents" is on its way!
          </p>
        </div>
        <button onclick="location.reload()" class="mt-6 text-primary-600 hover:text-primary-700 font-medium text-sm">
          <i class="fas fa-redo mr-2"></i>Subscribe another email
        </button>
      </div>
    `;
    form.innerHTML = successHtml;
  }
  
  // Toast notification function
  function showToast(message, type = 'success') {
    // Remove existing toasts
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
      existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="flex items-center">
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-3"></i>
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Hide toast after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
  
  // Category filter for blog page
  const categoryFilters = document.querySelectorAll('.category-filter');
  const blogCards = document.querySelectorAll('.blog-card');
  
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active state
      categoryFilters.forEach(f => {
        f.classList.remove('bg-primary-500', 'text-white');
        f.classList.add('bg-neutral-bg', 'text-neutral-body');
      });
      this.classList.remove('bg-neutral-bg', 'text-neutral-body');
      this.classList.add('bg-primary-500', 'text-white');
      
      // Filter cards
      blogCards.forEach(card => {
        if (category === 'All' || card.dataset.category === category) {
          card.style.display = 'block';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add active state to current nav link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    }
  });
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
  
  // Copy link functionality
  window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Link copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Failed to copy link', 'error');
    });
  };
  
  // Track outbound links (external links)
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    const href = link.getAttribute('href');
    // Only track links that go to external domains
    if (href && !href.includes('aiplacide.com') && !href.includes('aiplacide.pages.dev')) {
      link.addEventListener('click', function(e) {
        const linkText = this.textContent.trim() || this.getAttribute('aria-label') || 'Unknown';
        if (typeof window.trackOutboundLink === 'function') {
          window.trackOutboundLink(href, linkText);
        } else if (typeof gtag !== 'undefined') {
          gtag('event', 'click', {
            event_category: 'outbound',
            event_label: linkText,
            transport_type: 'beacon'
          });
        }
      });
    }
  });
  
  // Track page scroll depth
  let scrollDepthTracked = { 25: false, 50: false, 75: false, 100: false };
  window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    
    [25, 50, 75, 100].forEach(depth => {
      if (scrollPercent >= depth && !scrollDepthTracked[depth]) {
        scrollDepthTracked[depth] = true;
        if (typeof gtag !== 'undefined') {
          gtag('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: `${depth}%`,
            value: depth
          });
        }
      }
    });
  });
  
  // Track time on page
  let timeOnPage = 0;
  const timeTrackingIntervals = [30, 60, 120, 300]; // seconds
  let trackedIntervals = {};
  
  setInterval(() => {
    timeOnPage++;
    timeTrackingIntervals.forEach(interval => {
      if (timeOnPage === interval && !trackedIntervals[interval]) {
        trackedIntervals[interval] = true;
        if (typeof gtag !== 'undefined') {
          gtag('event', 'time_on_page', {
            event_category: 'engagement',
            event_label: `${interval}s`,
            value: interval
          });
        }
      }
    });
  }, 1000);
  
  console.log('AIPLACIDE.COM initialized successfully with GA4 tracking');
});
