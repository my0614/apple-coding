import Link from "next/link";

// 하위 페이지 맨 아래에 붙는 무료 체험 신청 유도 영역입니다.
export function TrialCta() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[20px] bg-ink p-8 lg:flex-row lg:items-center lg:p-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-balance text-paper lg:text-3xl">
              직접 수업을 들어보고 결정하세요
            </h2>
            <p className="mt-2 text-sm text-paper/65 lg:text-base">
              무료 체험 수업 1회로 아이에게 맞는 반을 함께 찾아드립니다.
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground ring-1 ring-brand/30 transition-colors hover:bg-brand/90"
          >
            무료 체험 신청하기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
