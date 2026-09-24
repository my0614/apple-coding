import Link from "next/link";

import { SITE } from "@/lib/site";

import { Logo } from "./logo";

const FOOTER_LINKS = [
  { href: "/curriculum", label: "커리큘럼" },
  { href: "/process", label: "수업 진행과정" },
  { href: "/schedule", label: "타임테이블" },
  { href: "/#contact", label: "상담 신청" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-card">
      {/* 모바일에서는 떠 있는 전화 버튼에 가리지 않도록 아래 여백을 더 둡니다. */}
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-28 md:pb-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size="sm" />
            <p className="mt-3 text-xs font-medium text-brand">{SITE.registration}</p>
            <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs">
              <dt className="text-ink/40">위치</dt>
              <dd className="text-ink/65">{SITE.address}</dd>
              <dt className="text-ink/40">전화번호</dt>
              <dd>
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-ink/65 transition-colors hover:text-ink"
                >
                  {SITE.phone}
                </a>
              </dd>
              <dt className="text-ink/40">이메일</dt>
              <dd>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-ink/65 transition-colors hover:text-ink"
                >
                  {SITE.email}
                </a>
              </dd>
            </dl>
          </div>
          <nav className="md:col-span-3 md:col-start-7" aria-label="바로가기">
            <p className="text-xs font-medium text-ink/40">바로가기</p>
            <ul className="mt-3 space-y-3 text-base font-semibold">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ink/80 transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="text-xs font-medium text-ink/40">소식</p>
            <div className="mt-3 flex flex-col items-start gap-3">
              <a
                href={SITE.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-ink/80 transition-colors hover:text-brand"
              >
                <span className="grid size-4 place-items-center rounded-sm bg-[#03c75a] text-[9px] font-bold text-white">
                  N
                </span>
                네이버 블로그
              </a>
              <a
                href={SITE.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-ink/80 transition-colors hover:text-brand"
              >
                <span className="grid size-4 place-items-center rounded-sm bg-[#03c75a] text-[9px] font-bold text-white">
                  N
                </span>
                네이버 지도
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-ink/5 pt-6 text-xs text-ink/40">
          © 2026 {SITE.name} (Apple Coding Academy). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
