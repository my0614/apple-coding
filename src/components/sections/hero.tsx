import Image from "next/image";
import Link from "next/link";

import heroDesk from "@/assets/hero-desk.jpg";

const HIGHLIGHTS = [
  "수완지구 10년의 노하우",
  "교육청 등록 제6806호",
  "AI 시대 대입·수행평가 융합 연구소",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cool">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 78% 10%, rgba(120,170,255,0.35), transparent 60%), radial-gradient(50% 50% at 15% 90%, rgba(20,184,166,0.22), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pt-12 pb-16 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <ul className="flex flex-wrap gap-2">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="rounded-full bg-paper/70 px-3 py-1.5 text-xs font-medium text-brand ring-1 ring-ink/5 backdrop-blur-md"
              >
                {item}
              </li>
            ))}
          </ul>
          <h1 className="mt-6 font-display text-[1.75rem] font-semibold min-[375px]:text-4xl leading-tight text-balance text-ink lg:text-5xl">
            생성형 AI 시대
            <br />
            미래를 바꾸는 <br className="sm:hidden" />
            코딩 교육의 기준
            <span className="mt-2 block font-bold text-crimson">애플코딩학원</span>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-primary-foreground ring-1 ring-brand/20"
            >
              커리큘럼 살펴보기
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 rounded-full bg-paper/60 px-5 py-3 text-sm font-medium text-ink ring-1 ring-ink/5 backdrop-blur-md"
            >
              수업 시간표
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-ink/60">
            <div>
              <span className="block font-display text-2xl font-semibold text-ink">6,400+</span>
              수료생
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div>
              <span className="block font-display text-2xl font-semibold text-ink">98%</span>
              만족도
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-[20px] bg-paper/65 p-3 ring-1 ring-ink/5 backdrop-blur-2xl">
            <Image
              src={heroDesk}
              alt="코드가 켜진 노트북이 놓인 깨끗한 학습 책상"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full lg:aspect-[4/5] rounded-[14px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
