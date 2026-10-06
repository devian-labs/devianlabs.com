/** Direct WhatsApp chat with Devian Labs, with a prefilled first message. */
export const WHATSAPP_URL =
  "https://wa.me/919187657958?text=" + encodeURIComponent("Hi Devian Labs, I'd like to talk about a project.");

export const PHONE = { display: "+91 91876 57958", href: "tel:+919187657958", schema: "+91-91876-57958" };

/*
 * The email address is kept in two parts and joined in the browser (see EmailLink),
 * so it never appears as plain text in the HTML that scrapers harvest.
 */
const EMAIL_PARTS = ["hello", "devianlabs.com"] as const;
export const emailAddress = () => EMAIL_PARTS.join("@");
export const mailto = (subject = "New project enquiry") =>
  `mailto:${emailAddress()}?subject=${encodeURIComponent(subject)}`;

export const GITHUB_ORG_URL = "https://github.com/devian-labs";

/*
 * Official profiles, shown in the footer and listed as `sameAs` in structured data.
 * Add LinkedIn, X, Facebook and Instagram here once the profiles exist.
 */
export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "GitHub", href: GITHUB_ORG_URL },
];
