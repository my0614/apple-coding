import Image from "next/image";
import Link from "next/link";

import heroDesk from "@/assets/hero-desk.png";

const HIGHLIGHTS = [
  "수완지구 10년의 노하우",
  "교육청 등록 제6806호",
  "AI 시대 대입·수행평가 융합 연구소",
];

export function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-18 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-semibold text-ink/50">
            {HIGHLIGHTS.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden className="text-ink/25">·</span>}
                {item}
              </li>
            ))}
          </ul>
          <h1 className="mt-5 text-4xl leading-[1.15] font-black tracking-tight text-balance text-ink lg:text-6xl">
            깨끗한 첫 장에서,
            <br />
            <span className="text-brand">코딩을 시작합니다</span>
          </h1>
          <p className="mt-5 max-w-[46ch] text-pretty text-base leading-[1.7] text-ink/60 lg:text-lg">
            새 교과서를 펼친 깨끗한 책상처럼, 초보자에게 가장 명확한 배움을 설계했습니다. 초·중·고,
            취업을 원하는 성인까지 함께.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-4 text-[15px] font-bold text-primary-foreground transition-colors hover:bg-brand-hover"
            >
              커리큘럼 살펴보기
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-paper px-6 py-4 text-[15px] font-bold text-ink transition-colors hover:border-ink"
            >
              수업 시간표
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-ink/60">
            <div>
              <span className="block text-3xl font-black tracking-tight text-ink">6,400+</span>
              수료생
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <span className="block text-3xl font-black tracking-tight text-ink">98%</span>
              만족도
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-[20px] bg-paper shadow-[0_30px_60px_-30px_rgba(23,18,15,0.35)] ring-1 ring-ink/5">
            <Image
              src={heroDesk}
              alt="코드가 켜진 노트북이 놓인 깨끗한 학습 책상"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
