import { layout } from '../components/layout'

export const termsPage = () => {
  const content = `
<!-- Hero Section -->
<section class="bg-gradient-to-br from-white via-primary-50/30 to-white py-16">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl font-extrabold text-neutral-heading mb-6">Terms of Use</h1>
    <p class="text-neutral-muted">Last updated: February 28, 2026</p>
  </div>
</section>

<!-- Content -->
<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="prose prose-lg max-w-none">
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Agreement to Terms</h2>
      <p class="text-neutral-body mb-6">
        By accessing and using aiplacide.com ("the Website"), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not access the Website.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Intellectual Property Rights</h2>
      <p class="text-neutral-body mb-6">
        The Website and its original content, features, and functionality are owned by Pierre Placide / AIPLACIDE and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
      </p>
      <p class="text-neutral-body mb-6">
        You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website without prior written consent, except as follows:
      </p>
      <ul class="list-disc list-inside text-neutral-body mb-6 space-y-2">
        <li>Your computer may temporarily store copies of such materials in RAM</li>
        <li>You may store files that are automatically cached by your Web browser</li>
        <li>You may print or download one copy of a reasonable number of pages for your own personal, non-commercial use</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">User Representations</h2>
      <p class="text-neutral-body mb-4">By using the Website, you represent and warrant that:</p>
      <ul class="list-disc list-inside text-neutral-body mb-6 space-y-2">
        <li>You have the legal capacity and agree to comply with these Terms of Use</li>
        <li>You are not a minor in the jurisdiction in which you reside</li>
        <li>You will not use the Website for any illegal or unauthorized purpose</li>
        <li>Your use of the Website will not violate any applicable law or regulation</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Prohibited Activities</h2>
      <p class="text-neutral-body mb-4">You may not access or use the Website for any purpose other than that for which we make the Website available. The Website may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us. Prohibited activities include:</p>
      <ul class="list-disc list-inside text-neutral-body mb-6 space-y-2">
        <li>Systematically retrieving data to create a collection or database</li>
        <li>Circumventing security-related features of the Website</li>
        <li>Using the Website to advertise or sell goods and services</li>
        <li>Engaging in unauthorized framing or linking to the Website</li>
        <li>Uploading or transmitting viruses or other malicious code</li>
        <li>Using automated means to access the Website</li>
        <li>Interfering with or disrupting the Website's operation</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Newsletter and Communications</h2>
      <p class="text-neutral-body mb-6">
        By subscribing to our newsletter, you consent to receive periodic emails from us. You can unsubscribe at any time by clicking the unsubscribe link at the bottom of any email. We will not sell or share your email address with third parties for marketing purposes.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Third-Party Links</h2>
      <p class="text-neutral-body mb-6">
        The Website may contain links to third-party websites or services, including UNIKABIZ.COM. We are not responsible for the content or practices of any third-party websites. Your use of third-party websites is at your own risk, and you should review the terms and privacy policies of those sites.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Disclaimer</h2>
      <p class="text-neutral-body mb-6">
        THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE WEBSITE'S OPERATION OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED THEREIN. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Limitation of Liability</h2>
      <p class="text-neutral-body mb-6">
        IN NO EVENT SHALL PIERRE PLACIDE / AIPLACIDE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE WEBSITE.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Indemnification</h2>
      <p class="text-neutral-body mb-6">
        You agree to defend, indemnify, and hold harmless Pierre Placide / AIPLACIDE from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the Website.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Governing Law</h2>
      <p class="text-neutral-body mb-6">
        These Terms of Use shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Collier County, Florida.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Changes to Terms</h2>
      <p class="text-neutral-body mb-6">
        We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website following the posting of revised Terms of Use means you accept and agree to the changes.
      </p>
      
      <h2 class="text-2xl font-bold text-neutral-heading mt-8 mb-4">Contact Us</h2>
      <p class="text-neutral-body mb-6">
        If you have any questions about these Terms of Use, please contact us at:
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
    title: 'Terms of Use',
    description: 'Terms of Use for AIPLACIDE.COM - Please read these terms carefully before using our website.',
    canonical: 'https://aiplacide.com/terms'
  });
};
