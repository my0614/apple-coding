import { Logo } from "@/components/site/logo";

const BUSINESS_INFO = [
  { label: "상호", value: "애플코딩학원" },
  { label: "대표", value: "[대표자명]", placeholder: true },
  { label: "개인정보보호책임자", value: "[책임자명]", placeholder: true },
  { label: "사업자 번호", value: "[000-00-00000]", placeholder: true },
  { label: "학원 등록", value: "교육청 등록 제6806호" },
  { label: "전화", value: "062-961-8866" },
  { label: "주소", value: "광주광역시 광산구 임방울대로 330, 8층 802호", wide: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-6 py-10 lg:py-12">
        <Logo />
        <div className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
          {BUSINESS_INFO.map((item) => (
            <div
              key={item.label}
              className={`flex gap-3 ${item.wide ? "sm:col-span-2" : ""}`}
            >
              <span className="min-w-24 shrink-0 text-ink/45">{item.label}</span>
              <span
                className={item.placeholder ? "text-brand-hover" : "font-medium text-ink/80"}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <div className="flex gap-5 text-sm font-bold">
            <a href="#" className="text-ink/80 transition-colors hover:text-brand">
              사용자 이용 약관
            </a>
            <a href="#" className="text-ink transition-colors hover:text-brand">
              개인정보 처리방침
            </a>
          </div>
          <span className="text-[13px] text-ink/60">
            © 2026 Apple Coding Academy. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
