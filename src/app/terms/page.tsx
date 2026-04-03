import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Terms of Use",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-zinc-950 py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 mb-12 transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-50 mb-4">Terms of Use</h1>
        <p className="text-zinc-500 mb-12 text-sm">Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>

        <div className="prose prose-invert prose-zinc max-w-none text-zinc-300">
          <p className="leading-relaxed">
            These Terms of Use ("Terms") govern your access to and use of the website, software products, and consulting services provided by Devian Labs ("we," "our," or "us"). By accessing our website or utilizing our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
          </p>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">1. Services and Products</h2>
          <p className="leading-relaxed mb-4">
            Devian Labs operates as a modern software engineering agency providing custom software development, MVP building, and proprietary software products.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Client Projects:</strong> Engagements for custom software development are governed by specific mutual Master Service Agreements (MSAs) or Statements of Work (SOWs) signed between Devian Labs and the client, which supersede these general Terms where applicable.</li>
            <li><strong>Proprietary Products:</strong> Our internal software products (such as Devian Desktop, Khao, P2P Share) are offered on an "as is" and "as available" basis, potentially carrying product-specific End User License Agreements (EULAs).</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">2. Intellectual Property Rights</h2>
          <p className="leading-relaxed mb-6">
            Unless otherwise indicated or stipulated in a client agreement, the website and our proprietary products—including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics—are owned or controlled by us and are protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from our proprietary software without express written permission.
          </p>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">3. User Representations</h2>
          <p className="leading-relaxed mb-4">By using our services, you represent and warrant that:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
            <li>You will not access our products through automated or non-human means without our authorization.</li>
            <li>You will not use our services for any illegal or unauthorized purpose.</li>
            <li>Your use of our website or products will not violate any applicable law or regulation.</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">4. Prohibited Activities</h2>
          <p className="leading-relaxed mb-6">
            You may not access or use the website or products for any purpose other than that for which we make them available. You may not interfere with security-related features of the site, reverse engineer our software, transmit viruses, or attempt to bypass any measures designed to prevent or restrict access to our products.
          </p>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">5. Disclaimer of Warranties</h2>
          <p className="leading-relaxed mb-6">
            Our website and public products are provided on an AS-IS and AS-AVAILABLE basis. You agree that your use of the site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof, including inherent bugs, downtime, or data loss.
          </p>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">6. Limitation of Liability</h2>
          <p className="leading-relaxed mb-6">
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website or our public software products, even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">7. Modifications and Interruptions</h2>
          <p className="leading-relaxed mb-6">
            We reserve the right to change, modify, or remove the contents of the website or our proprietary SaaS products at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the products.
          </p>

          <h2 className="text-2xl mt-10 mb-4 text-zinc-100 font-semibold tracking-tight">8. Contact Us</h2>
          <p className="leading-relaxed mb-6">
            In order to resolve a complaint regarding the site or to receive further information regarding use of the site, please contact us at:
            <br /><br />
            <strong>Devian Labs</strong><br />
            Email: <a href="mailto:hello@devianlabs.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">hello@devianlabs.com</a>
          </p>
        </div>

        {/* Cross-link to Privacy */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">Also see how we handle your data.</p>
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
          >
            Privacy Policy <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </div>
  );
}
