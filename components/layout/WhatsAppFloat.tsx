import Image from "next/image";

import { FOOTER_PHONE_NUMBERS, getWhatsAppUrl } from "@/constants/footer";

const whatsappUrl = getWhatsAppUrl(FOOTER_PHONE_NUMBERS[1].whatsapp);

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 flex size-[60px] shrink-0 items-center justify-center rounded-full shadow-[0_4px_16px_rgb(0_0_0/35%)] transition-transform hover:scale-105 active:scale-95 sm:right-5 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] md:size-[44px]"
    >
      <Image
        src="/assets/images/whatsapp-logo.png"
        alt=""
        width={60}
        height={60}
        className="size-full rounded-full object-cover"
      />
    </a>
  );
}
