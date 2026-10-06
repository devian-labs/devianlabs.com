import { products } from "@/lib/products";
import { services } from "@/lib/services";
import { PHONE, WHATSAPP_URL } from "@/lib/contact";
import { HOME_DESCRIPTION, SITE_URL } from "@/lib/seo";

/* /llms.txt: a plain-Markdown map of the site for AI assistants and answer engines (llmstxt.org). */

export const dynamic = "force-static";

export function GET() {
  const body = [
    "# Devian Labs",
    "",
    `> ${HOME_DESCRIPTION}`,
    "",
    "Devian Labs is a software studio from India. It designs, builds and runs its own products, takes on client projects on any platform (mobile, web, desktop, browser extensions, plugins, automations, backends and AI agents), and works as a long-term technology partner on a monthly retainer.",
    "",
    "## Products (case studies)",
    "",
    ...products.map(
      (p) =>
        `- [${p.name}](${SITE_URL}/products/${p.slug}): ${p.tagline} ${p.category}; ${p.platforms.join(", ")}; ${p.status}.${p.openSource ? ` Open source: ${p.github}` : ""}`,
    ),
    "",
    "## Services",
    "",
    ...services.map((s) => `- [${s.seo.title}](${SITE_URL}/services/${s.slug}): ${s.seo.description}`),
    "",
    "## Company",
    "",
    `- [About](${SITE_URL}/about): who we are and how we work`,
    `- [All products](${SITE_URL}/products)`,
    `- [Client work](${SITE_URL}/#work): Nolia, Aveline Homes, The Balkrishna Palace, Siridi Sai Mobiles, Sri Ganesh Bike Point`,
    "",
    "## Contact",
    "",
    `- Phone: ${PHONE.display}`,
    `- WhatsApp: ${WHATSAPP_URL}`,
    `- [Contact page](${SITE_URL}/contact)`,
    "",
    "## Optional",
    "",
    `- [Privacy policy](${SITE_URL}/privacy)`,
    `- [Terms of use](${SITE_URL}/terms)`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
