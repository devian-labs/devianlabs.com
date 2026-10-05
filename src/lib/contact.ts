/** Direct WhatsApp chat with Devian Labs (+91 91876 57958), with a prefilled first message. */
export const WHATSAPP_URL =
  "https://wa.me/919187657958?text=" + encodeURIComponent("Hi Devian Labs, I'd like to talk about a project.");

export const EMAIL = "hello@devianlabs.com";

/** Email link with a subject line, so enquiries are easy to spot in the inbox. */
export const mailto = (subject = "New project enquiry") =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

export const GITHUB_ORG_URL = "https://github.com/devian-labs";
