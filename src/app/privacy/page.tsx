export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-950 py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-50 mb-4">Privacy Policy</h1>
        <p className="text-zinc-400 mb-12">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-invert prose-zinc max-w-none text-zinc-300">
          <p className="leading-relaxed">
            At Devian Labs ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website devianlabs.com, use our proprietary software products, or engage with our software development services. 
          </p>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">1. Information We Collect</h2>
          <p className="leading-relaxed">We may collect several types of information from and about users of our website and services, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, phone number, and company details that you voluntarily give to us when you inquire about our services or create an account.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the site.</li>
            <li><strong>Financial Data:</strong> Data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">2. How We Use Your Information</h2>
          <p className="leading-relaxed mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Deliver our software solutions and maintain client communication.</li>
            <li>Process transactions and send related information, including confirmations and invoices.</li>
            <li>Resolve technical issues and troubleshoot product bugs.</li>
            <li>Improve the functionality, design, and user experience of our website and software products.</li>
            <li>Respond to customer service requests and direct inquiries.</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">3. Disclosure of Your Information</h2>
          <p className="leading-relaxed mb-4">We do not sell, trade, or rent your personal identification information to others. We may share information we have collected about you in certain situations:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.</li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">4. Data Security</h2>
          <p className="leading-relaxed mb-6">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">5. Policy for Children</h2>
          <p className="leading-relaxed mb-6">
            We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
          </p>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">6. Contact Us</h2>
          <p className="leading-relaxed mb-6">
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br /><br />
            <strong>Devian Labs</strong><br />
            Email: <a href="mailto:hello@devianlabs.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">hello@devianlabs.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
