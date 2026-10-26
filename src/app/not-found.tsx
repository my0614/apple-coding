import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없어요 | 애플코딩학원",
};

export default function NotFound() {
  return (
    <section className="bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center lg:py-32">
        <p className="font-display text-7xl font-bold text-brand">404</p>
        <h1 className="mt-6 font-display text-2xl font-semibold text-balance text-ink lg:text-3xl">
          페이지를 찾을 수 없어요
        </h1>
        <p className="mt-3 text-pretty text-base text-ink/65">
          주소가 바뀌었거나 없는 페이지예요. 아래 버튼으로 이동해 주세요.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand px-5 py-2.5 text-base font-semibold text-primary-foreground ring-1 ring-brand/20"
          >
            홈으로 가기
          </Link>
          <Link
            href="/curriculum"
            className="rounded-full bg-mist px-5 py-2.5 text-base font-semibold text-ink ring-1 ring-ink/5"
          >
            커리큘럼 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
