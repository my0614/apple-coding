import { Logo } from "@/components/site/logo";

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <Logo />
        <p className="text-xs text-ink/50">© 2026 Apple Coding Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
