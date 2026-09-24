import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

// 애플코딩학원 로고 마크 (사과 + 마우스 커서). 원본: public/apple-coding-logo.svg
// 사과 색은 사이트 대표 색(--brand)을 따릅니다.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={cn("shrink-0", className)}>
      <path
        d="M50 26 C36 14 6 18 6 52 C6 80 26 98 40 96 C45 95 47 93 50 93 C53 93 55 95 60 96 C74 98 94 80 94 52 C94 18 64 14 50 26 Z"
        fill="var(--brand)"
      />
      <path d="M53 20 C53 8 63 2 75 2 C75 14 65 20 53 20 Z" fill="var(--brand)" />
      <path
        d="M38 36 L38 78 L48.5 68 L56 83 L63.5 79.5 L56 65 L70 65 Z"
        fill="#fff"
        stroke="var(--ink)"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <span className="flex items-center gap-2">
      <LogoMark className={size === "md" ? "size-8 min-[375px]:size-9" : "size-8"} />
      <span
        className={cn(
          "font-bold tracking-tight text-ink",
          size === "md" ? "text-base min-[375px]:text-lg" : "text-base",
        )}
      >
        {SITE.name}
      </span>
    </span>
  );
}
