import { Phone } from "lucide-react";

import { SITE } from "@/lib/site";

// 모바일 화면 오른쪽 아래에 떠 있는 전화 상담 버튼입니다. 데스크톱에서는 숨깁니다.
export function CallButton() {
  return (
    <a
      href={`tel:${SITE.phone}`}
      aria-label={`${SITE.name}에 전화하기 (${SITE.phone})`}
      className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg ring-1 ring-brand/30 transition-transform active:scale-95 md:hidden"
    >
      <Phone className="size-4" aria-hidden />
      전화 상담
    </a>
  );
}
