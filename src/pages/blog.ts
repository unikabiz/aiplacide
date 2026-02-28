import { layout } from '../components/layout'

// Sample blog posts data (in production, this would come from a CMS or database)
const blogPosts = [
  {
    slug: 'genspark-custom-agents-guide',
    title: 'The Ultimate Guide to Genspark Custom Super Agents: Architecture, Implementation & ROI',
    excerpt: 'Learn how to design, build, and deploy custom Genspark super agents that transform business operations. This comprehensive guide covers architecture patterns, implementation strategies, and ROI optimization techniques.',
    category: 'AI Agent Innovation',
    readTime: '12 min read',
    date: 'February 25, 2026',
    image: '/static/images/blog-genspark-guide.jpg',
    featured: true
  },
  {
    slug: 'ai-implementation-mistakes',
    title: 'Why Most AI Implementations Fail (And How to Avoid the 5 Common Mistakes)',
    excerpt: 'Discover the critical factors that determine AI project success. Avoid costly mistakes with proven strategies that actually deliver measurable ROI.',
    category: 'Business Strategy',
    readTime: '8 min read',
    date: 'February 20, 2026',
    image: '/static/images/blog-ai-mistakes.jpg',
    featured: true
  },
  {
    slug: 'multi-agent-healthcare-case-study',
    title: 'Building a Multi-Agent Workflow: A Case Study in Healthcare Transformation',
    excerpt: 'How we automated patient onboarding for a healthcare SaaS company, achieving 87% time reduction. Real implementation insights from the field.',
    category: 'Behind the Scenes',
    readTime: '10 min read',
    date: 'February 15, 2026',
    image: '/static/images/blog-multi-agent.jpg',
    featured: true
  },
  {
    slug: 'prompt-engineering-masterclass',
    title: 'Prompt Engineering Masterclass: From Basic to Advanced Techniques',
    excerpt: 'Master the art of prompt engineering with techniques that have been refined through hundreds of real-world implementations.',
    category: 'AI Agent Innovation',
    readTime: '15 min read',
    date: 'February 10, 2026',
    image: '/static/images/blog-prompt.jpg',
    featured: false
  },
  {
    slug: 'ai-transformation-roadmap',
    title: 'From Vision to Execution: The Complete AI Strategy Playbook',
    excerpt: 'A step-by-step guide to creating an AI transformation roadmap that aligns with your business objectives and delivers measurable outcomes.',
    category: 'Business Strategy',
    readTime: '11 min read',
    date: 'February 5, 2026',
    image: '/static/images/blog-roadmap.jpg',
    featured: false
  },
  {
    slug: 'genspark-vs-chatgpt',
    title: 'Why Genspark Outperforms ChatGPT for Business Automation (Data-Backed Analysis)',
    excerpt: 'A comprehensive comparison of Genspark and ChatGPT for business applications, with real performance data and use case analysis.',
    category: 'Industry Trends',
    readTime: '9 min read',
    date: 'January 30, 2026',
    image: '/static/images/blog-comparison.jpg',
    featured: false
  },
  {
    slug: 'ai-consulting-pricing',
    title: 'How to Price AI Consulting Services for Maximum Value',
    excerpt: 'Strategies for pricing AI consulting services that reflect your value while remaining competitive in the market.',
    category: 'AI Consulting Mastery',
    readTime: '7 min read',
    date: 'January 25, 2026',
    image: '/static/images/blog-pricing.jpg',
    featured: false
  },
  {
    slug: 'ai-trends-2026',
    title: 'AI in 2026: The 12 Trends Every Business Leader Should Watch',
    excerpt: 'A forward-looking analysis of the AI trends that will shape business strategy in 2026 and beyond.',
    category: 'Industry Trends',
    readTime: '10 min read',
    date: 'January 20, 2026',
    image: '/static/images/blog-trends.jpg',
    featured: false
  }
];

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'AI Agent Innovation', count: blogPosts.filter(p => p.category === 'AI Agent Innovation').length },
  { name: 'Business Strategy', count: blogPosts.filter(p => p.category === 'Business Strategy').length },
  { name: 'Behind the Scenes', count: blogPosts.filter(p => p.category === 'Behind the Scenes').length },
  { name: 'AI Consulting Mastery', count: blogPosts.filter(p => p.category === 'AI Consulting Mastery').length },
  { name: 'Industry Trends', count: blogPosts.filter(p => p.category === 'Industry Trends').length }
];

export const blogPage = (slug?: string) => {
  if (slug) {
    return blogPostPage(slug);
  }
  return blogListPage();
};

const blogListPage = () => {
  const featuredPosts = blogPosts.filter(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);

  const content = `
<!-- Hero Section -->
<section class="bg-gradient-to-br from-white via-primary-50/30 to-white py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto">
      <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
        Blog & Insights
      </span>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-neutral-heading leading-tight mb-6">
        AI Transformation <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Insights</span>
      </h1>
      <p class="text-xl text-neutral-muted">
        Exclusive frameworks, case studies, and actionable strategies for AI-powered business transformation from the field.
      </p>
    </div>
  </div>
</section>

<!-- Categories Filter -->
<section class="border-b border-neutral-border sticky top-20 bg-white z-30">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
      ${categories.map((cat, i) => `
        <button class="category-filter px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${i === 0 ? 'bg-primary-500 text-white' : 'bg-neutral-bg text-neutral-body hover:bg-primary-100 hover:text-primary-700'}" data-category="${cat.name}">
          ${cat.name} <span class="ml-1 opacity-70">(${cat.count})</span>
        </button>
      `).join('')}
    </div>
  </div>
</section>

<!-- Featured Posts -->
<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold text-neutral-heading mb-8 flex items-center">
      <i class="fas fa-star text-accent-500 mr-3"></i>
      Featured Articles
    </h2>
    
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Large Featured Post -->
      <div class="lg:col-span-2">
        <article class="bg-neutral-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group h-full">
          <a href="/blog/${featuredPosts[0].slug}" class="block h-full">
            <div class="aspect-[16/9] bg-gradient-to-br from-primary-200 to-accent-200 relative overflow-hidden">
              <img src="${featuredPosts[0].image}" alt="${featuredPosts[0].title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.style.display='none'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span class="inline-block px-3 py-1 bg-primary-500 rounded-full text-xs font-semibold mb-3">
                  ${featuredPosts[0].category}
                </span>
                <h3 class="text-2xl font-bold mb-2 group-hover:text-primary-200 transition-colors">
                  ${featuredPosts[0].title}
                </h3>
                <div class="flex items-center text-sm text-white/80">
                  <span><i class="far fa-calendar mr-1"></i>${featuredPosts[0].date}</span>
                  <span class="mx-3">•</span>
                  <span><i class="far fa-clock mr-1"></i>${featuredPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
      
      <!-- Stacked Featured Posts -->
      <div class="space-y-6">
        ${featuredPosts.slice(1).map(post => `
          <article class="bg-neutral-bg rounded-xl overflow-hidden shadow hover:shadow-lg transition-all group">
            <a href="/blog/${post.slug}" class="flex">
              <div class="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-primary-100 to-accent-100">
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" onerror="this.style.display='none'">
              </div>
              <div class="p-4 flex flex-col justify-center">
                <span class="text-xs text-primary-600 font-semibold mb-1">${post.category}</span>
                <h3 class="font-bold text-neutral-heading line-clamp-2 group-hover:text-primary-600 transition-colors text-sm mb-2">
                  ${post.title}
                </h3>
                <span class="text-xs text-neutral-muted"><i class="far fa-clock mr-1"></i>${post.readTime}</span>
              </div>
            </a>
          </article>
        `).join('')}
      </div>
    </div>
  </div>
</section>

<!-- All Posts Grid -->
<section class="py-16 bg-neutral-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-bold text-neutral-heading">
        All Articles
      </h2>
      <div class="flex items-center gap-2 text-sm text-neutral-muted">
        <span>Sort by:</span>
        <select class="bg-white border border-neutral-border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500">
          <option>Most Recent</option>
          <option>Most Popular</option>
          <option>Oldest First</option>
        </select>
      </div>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="posts-grid">
      ${blogPosts.map(post => blogCard(post)).join('')}
    </div>
    
    <!-- Load More -->
    <div class="text-center mt-12">
      <button class="inline-flex items-center px-8 py-4 bg-white text-neutral-heading font-semibold rounded-xl border-2 border-neutral-border hover:border-primary-300 hover:bg-primary-50 transition-all shadow">
        <i class="fas fa-plus mr-3 text-primary-500"></i>
        Load More Articles
      </button>
    </div>
  </div>
</section>

<!-- Newsletter CTA -->
<section class="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold mb-4">Get Strategies Like This Every Week</h2>
    <p class="text-xl opacity-90 mb-8">Join 500+ forward-thinking leaders receiving exclusive AI transformation insights.</p>
    <form id="blog-newsletter-form" class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
      <input type="email" name="email" required placeholder="Enter your email address" class="flex-1 px-6 py-4 rounded-xl text-neutral-heading focus:ring-2 focus:ring-accent-500 focus:outline-none">
      <button type="submit" class="px-8 py-4 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-all shadow-lg whitespace-nowrap">
        Subscribe Free
      </button>
    </form>
  </div>
</section>

<!-- Sidebar CTA (for desktop) -->
<div class="fixed right-4 bottom-24 hidden lg:block z-30">
  <div class="bg-white rounded-xl shadow-2xl p-4 w-64 border border-neutral-border">
    <h4 class="font-bold text-neutral-heading mb-2 text-sm">📊 Featured Assessment</h4>
    <p class="text-xs text-neutral-muted mb-3">Discover your AI readiness in 5 minutes</p>
    <a href="/#assessment" class="block w-full text-center py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors">
      Take Assessment
    </a>
  </div>
</div>
`;

  return layout(content, {
    title: 'Blog & Insights - AI Transformation Strategies',
    description: 'Explore exclusive AI transformation frameworks, Genspark tutorials, case studies, and actionable strategies from Pierre Placide. Learn how to implement AI that delivers real ROI.',
    canonical: 'https://aiplacide.com/blog',
    ogImage: 'https://aiplacide.com/static/images/og-blog.jpg',
    type: 'blog'
  });
};

const blogPostPage = (slug: string) => {
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];
  const relatedPosts = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);

  const content = `
<!-- Article Header -->
<article>
  <header class="bg-gradient-to-br from-white via-primary-50/30 to-white py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <a href="/blog" class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-6">
        <i class="fas fa-arrow-left mr-2"></i>
        Back to Blog
      </a>
      
      <div class="flex items-center gap-3 mb-6">
        <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
          ${post.category}
        </span>
        <span class="text-neutral-muted text-sm">${post.date}</span>
        <span class="text-neutral-muted text-sm"><i class="far fa-clock mr-1"></i>${post.readTime}</span>
      </div>
      
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-heading leading-tight mb-6">
        ${post.title}
      </h1>
      
      <p class="text-xl text-neutral-muted mb-8">
        ${post.excerpt}
      </p>
      
      <!-- Author -->
      <div class="flex items-center">
        <div class="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center overflow-hidden mr-4">
          <img src="/static/images/pierre-avatar.jpg" alt="Pierre Placide" class="w-full h-full object-cover" onerror="this.outerHTML='<span class=\\'text-white font-bold text-lg\\'>PP</span>'">
        </div>
        <div>
          <div class="font-semibold text-neutral-heading">Pierre Placide</div>
          <div class="text-sm text-neutral-muted">AI Generative Consultant & Genspark Specialist</div>
        </div>
      </div>
    </div>
  </header>

  <!-- Featured Image -->
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
    <div class="aspect-[2/1] bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl overflow-hidden shadow-xl">
      <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" onerror="this.style.display='none'">
    </div>
  </div>

  <!-- Article Content -->
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="prose prose-lg max-w-none">
      <!-- Sample Article Content -->
      <p class="lead text-xl text-neutral-body font-serif">
        In today's rapidly evolving business landscape, the ability to leverage AI for strategic transformation has become a critical differentiator. This comprehensive guide explores how custom Genspark super agents can revolutionize your business operations.
      </p>

      <h2 class="text-2xl font-bold text-neutral-heading mt-12 mb-6">Understanding Custom Super Agents</h2>
      
      <p class="text-neutral-body font-serif leading-relaxed mb-6">
        Custom super agents represent the next evolution in AI automation. Unlike generic chatbots or off-the-shelf AI tools, these agents are specifically architected to embody your business strategy, understand your unique workflows, and execute complex tasks autonomously.
      </p>

      <p class="text-neutral-body font-serif leading-relaxed mb-6">
        The key differentiator lies in their ability to maintain context, make decisions based on your business rules, and integrate seamlessly with your existing technology stack. This isn't just about automation—it's about intelligent execution that scales with your ambitions.
      </p>

      <!-- Pull Quote -->
      <blockquote class="border-l-4 border-primary-500 pl-6 py-2 my-8 bg-primary-50 rounded-r-lg">
        <p class="text-xl text-primary-800 italic font-serif">
          "The businesses that win won't be those with the most AI tools, but those with the most intelligently designed AI ecosystems."
        </p>
      </blockquote>

      <h2 class="text-2xl font-bold text-neutral-heading mt-12 mb-6">The Architecture of Success</h2>
      
      <p class="text-neutral-body font-serif leading-relaxed mb-6">
        Building effective custom agents requires a deep understanding of both technical capabilities and business strategy. Here's the framework I use with UNIKABIZ clients:
      </p>

      <ol class="list-decimal list-inside space-y-4 mb-8">
        <li class="text-neutral-body"><strong class="text-neutral-heading">Discovery & Analysis</strong> - Understanding your workflows, pain points, and objectives</li>
        <li class="text-neutral-body"><strong class="text-neutral-heading">Strategic Planning</strong> - Designing the agent architecture aligned with business goals</li>
        <li class="text-neutral-body"><strong class="text-neutral-heading">Implementation</strong> - Building, testing, and iterating on the solution</li>
        <li class="text-neutral-body"><strong class="text-neutral-heading">Integration</strong> - Connecting with existing systems and data sources</li>
        <li class="text-neutral-body"><strong class="text-neutral-heading">Optimization</strong> - Continuous improvement based on performance data</li>
      </ol>

      <h2 class="text-2xl font-bold text-neutral-heading mt-12 mb-6">Measuring ROI</h2>
      
      <p class="text-neutral-body font-serif leading-relaxed mb-6">
        The true measure of any AI implementation is its impact on business outcomes. With custom super agents, we've seen clients achieve remarkable results:
      </p>

      <ul class="list-disc list-inside space-y-2 mb-8">
        <li class="text-neutral-body">87% reduction in time-to-completion for complex workflows</li>
        <li class="text-neutral-body">73% decrease in operational costs</li>
        <li class="text-neutral-body">3x improvement in conversion rates</li>
        <li class="text-neutral-body">95% accuracy in decision-making processes</li>
      </ul>

      <!-- Mid-Article CTA -->
      <div class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 my-12 text-center">
        <h3 class="text-xl font-bold text-neutral-heading mb-3">Want to Calculate YOUR ROI Potential?</h3>
        <p class="text-neutral-muted mb-6">Take our free AI Readiness Assessment and discover your specific opportunities.</p>
        <a href="/#assessment" class="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
          <i class="fas fa-chart-bar mr-2"></i>
          Take the Assessment
        </a>
      </div>

      <h2 class="text-2xl font-bold text-neutral-heading mt-12 mb-6">Getting Started</h2>
      
      <p class="text-neutral-body font-serif leading-relaxed mb-6">
        If you're ready to explore how custom super agents can transform your business, the first step is understanding where you stand today. Take our AI Readiness Assessment to get a personalized report, or reach out directly to discuss your specific situation.
      </p>

      <p class="text-neutral-body font-serif leading-relaxed">
        Remember: the goal isn't to replace human intelligence, but to amplify it. Custom super agents are tools that free your team to focus on what matters most—strategy, creativity, and relationships—while handling the operational complexity that used to consume so much time and energy.
      </p>
    </div>

    <!-- Social Sharing -->
    <div class="border-t border-neutral-border mt-12 pt-8">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <span class="font-semibold text-neutral-heading">Share this article:</span>
        <div class="flex gap-3">
          <a href="https://linkedin.com/shareArticle?url=https://aiplacide.com/blog/${post.slug}" target="_blank" rel="noopener" class="w-10 h-10 bg-[#0077B5] text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Share on LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/intent/tweet?url=https://aiplacide.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}" target="_blank" rel="noopener" class="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Share on Twitter">
            <i class="fab fa-x-twitter"></i>
          </a>
          <button onclick="navigator.clipboard.writeText('https://aiplacide.com/blog/${post.slug}')" class="w-10 h-10 bg-neutral-200 text-neutral-heading rounded-lg flex items-center justify-center hover:bg-neutral-300 transition-colors" aria-label="Copy link">
            <i class="fas fa-link"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Author Box -->
    <div class="bg-neutral-bg rounded-2xl p-8 mt-12">
      <div class="flex items-start gap-6">
        <div class="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center overflow-hidden">
          <img src="/static/images/pierre-avatar.jpg" alt="Pierre Placide" class="w-full h-full object-cover" onerror="this.outerHTML='<span class=\\'text-white font-bold text-2xl\\'>PP</span>'">
        </div>
        <div>
          <h3 class="text-xl font-bold text-neutral-heading mb-2">Pierre Placide</h3>
          <p class="text-neutral-muted mb-4">
            AI Generative Consultant & Genspark Custom Super Agent Specialist. 15+ years transforming complexity into competitive advantage. Founder of UNIKABIZ.
          </p>
          <div class="flex gap-3">
            <a href="/about" class="text-primary-600 font-semibold hover:text-primary-700">Learn More About Pierre</a>
            <span class="text-neutral-muted">|</span>
            <a href="https://linkedin.com/in/pierreplacide" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-700">
              <i class="fab fa-linkedin"></i> Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End Article CTA -->
  <div class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold mb-4">Need Help Implementing This Strategy?</h2>
      <p class="text-xl opacity-90 mb-8">Let's discuss how custom AI agents can transform your specific business challenges.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://unikabiz.com" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 shadow-xl transition-all">
          <span>Explore UNIKABIZ Solutions</span>
          <i class="fas fa-arrow-right ml-3"></i>
        </a>
        <a href="/newsletter" class="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all">
          <i class="fas fa-envelope mr-3"></i>
          <span>Subscribe for More Insights</span>
        </a>
      </div>
    </div>
  </div>
</article>

<!-- Related Posts -->
${relatedPosts.length > 0 ? `
<section class="py-16 bg-neutral-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold text-neutral-heading mb-8">Related Articles</h2>
    <div class="grid md:grid-cols-3 gap-8">
      ${relatedPosts.map(p => blogCard(p)).join('')}
    </div>
  </div>
</section>
` : ''}
`;

  return layout(content, {
    title: post.title,
    description: post.excerpt,
    canonical: `https://aiplacide.com/blog/${post.slug}`,
    ogImage: `https://aiplacide.com${post.image}`,
    type: 'article'
  });
};

// Helper function for blog cards
const blogCard = (post: typeof blogPosts[0]) => `
<article class="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-border hover:shadow-xl transition-all group blog-card" data-category="${post.category}">
  <a href="/blog/${post.slug}" class="block">
    <div class="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
      <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.style.display='none'">
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
          ${post.category}
        </span>
        <span class="text-xs text-neutral-muted">
          <i class="far fa-clock mr-1"></i>${post.readTime}
        </span>
      </div>
      <h3 class="text-lg font-bold text-neutral-heading mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
        ${post.title}
      </h3>
      <p class="text-neutral-muted text-sm line-clamp-2 mb-4">
        ${post.excerpt}
      </p>
      <div class="flex items-center justify-between">
        <span class="text-xs text-neutral-muted">${post.date}</span>
        <span class="inline-flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700">
          Read More
          <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
        </span>
      </div>
    </div>
  </a>
</article>
`;
