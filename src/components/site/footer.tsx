export function Footer() {
  return (
    <footer className="bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg bg-brand font-display font-semibold text-primary-foreground">
            A
          </span>
          <span className="font-semibold text-ink">애플코딩학원</span>
        </div>
        <p className="text-xs text-ink/50">© 2026 Apple Coding Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
