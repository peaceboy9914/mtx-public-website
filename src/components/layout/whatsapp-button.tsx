import { IconWhatsApp } from "@/components/ui/icons";
import { whatsapp } from "@/content/site";

/** Floating WhatsApp chat button, on every page. Most Ethiopian clients would rather message than fill a form. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MTX on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-[14.5px] font-semibold text-[#0b3d1f] shadow-[0_12px_30px_-10px_rgba(11,22,51,0.55)] transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <IconWhatsApp className="size-6" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
