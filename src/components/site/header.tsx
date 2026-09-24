"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/curriculum", label: "커리큘럼" },
  { href: "/process", label: "수업 진행과정" },
  { href: "/schedule", label: "타임테이블" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-6">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="ml-auto hidden items-center gap-6 text-sm font-medium text-ink/75 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "transition-colors hover:text-brand",
                pathname === link.href && "text-brand",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:ml-0 ml-auto">
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="rounded-lg bg-ink px-3.5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-brand"
          >
            상담 신청
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            className="grid size-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-menu" className="border-t border-border md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-2 py-3 text-base text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink",
                    pathname === link.href && "font-medium text-brand",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
