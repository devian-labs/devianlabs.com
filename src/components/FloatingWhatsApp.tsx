import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contact";

/** Floating WhatsApp chat button, pinned to the bottom-right corner on every page. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      title="Message us on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:scale-105 hover:shadow-[0_10px_32px_rgba(37,211,102,0.5)] transition-all duration-200"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
