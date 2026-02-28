import { layout } from '../components/layout'

export const privacyPage = () => {
  const content = `
<!-- Hero Section -->
<section class="bg-gradient-to-br from-white via-primary-50/30 to-white py-16">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl font-extrabold text-neutral-heading mb-6">Privacy Policy</h1>
    <p class="text-neutral-muted">Last updated: February 28, 2026</p>
  </div>
</section>

<!-- Content -->
<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="prose prose-lg max-w-none">
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Introduction</h2>
      <p class="text-neutral-body mb-6">
        Pierre Placide ("AIPLACIDE," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website aiplacide.com.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Information We Collect</h2>
      <p class="text-neutral-body mb-4">We may collect information about you in various ways:</p>
      
      <h3 class="text-xl font-semibold text-neutral-heading mt-6 mb-3">Personal Data</h3>
      <p class="text-neutral-body mb-4">
        When you voluntarily provide it, we may collect personally identifiable information such as:
      </p>
      <ul class="list-disc list-inside text-neutral-body mb-6 space-y-2">
        <li>Name and email address (when subscribing to our newsletter)</li>
        <li>Company name (when completing assessments or contact forms)</li>
        <li>Information provided in contact forms or speaking inquiry submissions</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-neutral-heading mt-6 mb-3">Usage Data</h3>
      <p class="text-neutral-body mb-6">
        We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of visits. This information is collected through cookies and similar tracking technologies.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">How We Use Your Information</h2>
      <p class="text-neutral-body mb-4">We use the information we collect to:</p>
      <ul class="list-disc list-inside text-neutral-body mb-6 space-y-2">
        <li>Send you our newsletter and marketing communications (with your consent)</li>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Improve our website and user experience</li>
        <li>Analyze usage patterns and trends</li>
        <li>Protect against fraud and unauthorized access</li>
        <li>Comply with legal obligations</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Cookies and Tracking Technologies</h2>
      <p class="text-neutral-body mb-6">
        We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Third-Party Services</h2>
      <p class="text-neutral-body mb-4">We may use third-party service providers to:</p>
      <ul class="list-disc list-inside text-neutral-body mb-6 space-y-2">
        <li>Send our newsletter (e.g., ConvertKit, Beehiiv)</li>
        <li>Analyze website traffic (e.g., Google Analytics)</li>
        <li>Process forms and inquiries</li>
      </ul>
      <p class="text-neutral-body mb-6">
        These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Data Retention</h2>
      <p class="text-neutral-body mb-6">
        We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Newsletter subscribers' data is retained until they unsubscribe or request deletion.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Your Rights</h2>
      <p class="text-neutral-body mb-4">Depending on your location, you may have the right to:</p>
      <ul class="list-disc list-inside text-neutral-body mb-6 space-y-2">
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your personal data</li>
        <li>Object to processing of your personal data</li>
        <li>Request restriction of processing</li>
        <li>Request data portability</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p class="text-neutral-body mb-6">
        To exercise any of these rights, please contact us at <a href="mailto:pierre@aiplacide.com" class="text-primary-600 hover:text-primary-700">pierre@aiplacide.com</a>.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Security</h2>
      <p class="text-neutral-body mb-6">
        We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Links to Other Sites</h2>
      <p class="text-neutral-body mb-6">
        Our website may contain links to other sites, including UNIKABIZ.COM. We are not responsible for the privacy practices of other sites. We encourage you to read the privacy policy of every site you visit.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Children's Privacy</h2>
      <p class="text-neutral-body mb-6">
        Our website is not intended for children under 16. We do not knowingly collect personal data from children under 16. If you are a parent or guardian and believe your child has provided us with personal data, please contact us.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Changes to This Policy</h2>
      <p class="text-neutral-body mb-6">
        We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Contact Us</h2>
      <p class="text-neutral-body mb-6">
        If you have any questions about this privacy policy, please contact us at:
      </p>
      <div class="bg-neutral-bg rounded-lg p-6">
        <p class="text-neutral-heading font-semibold">Pierre Placide / AIPLACIDE</p>
        <p class="text-neutral-body">Email: <a href="mailto:pierre@aiplacide.com" class="text-primary-600 hover:text-primary-700">pierre@aiplacide.com</a></p>
        <p class="text-neutral-body">Location: Naples, FL</p>
        <p class="text-neutral-body">Website: <a href="https://aiplacide.com" class="text-primary-600 hover:text-primary-700">aiplacide.com</a></p>
      </div>
      
    </div>
  </div>
</section>
`;

  return layout(content, {
    title: 'Privacy Policy',
    description: 'Privacy Policy for AIPLACIDE.COM - Learn how we collect, use, and protect your personal information.',
    canonical: 'https://aiplacide.com/privacy'
  });
};
