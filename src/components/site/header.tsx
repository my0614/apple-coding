"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/curriculum", label: "커리큘럼" },
  { href: "/process", label: "수업 진행과정" },
  { href: "/schedule", label: "타임테이블" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/55 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-[10px] bg-brand font-display font-semibold text-primary-foreground">
            A
          </span>
          <span className="font-semibold tracking-tight text-ink">애플코딩학원</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "transition-colors hover:text-ink",
                pathname === link.href && "font-medium text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper ring-1 ring-ink/10"
        >
          상담 신청
        </Link>
      </div>
    </header>
  );
}
