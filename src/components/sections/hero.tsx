import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import heroDesk from "@/assets/hero-desk.jpg";
import { cn } from "@/lib/utils";

import { TypingText } from "./typing-text";

const HIGHLIGHTS = [
  "수완지구 10년의 노하우",
  "교육청 등록 제6806호",
  "AI 시대 대입·수행평가 융합 연구소",
];

// 히어로 등장 애니메이션 순서(ms). 스타일은 globals.css의 .hero-in 에 있습니다.
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

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
          {/* 휴대폰: 한 줄에 하나 / 태블릿·작은 노트북: 두 줄 / 넓은 화면: 한 줄에 | 로 구분 */}
          <ul
            className="hero-in flex flex-col gap-1 text-[15px] font-semibold text-sage sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 lg:text-base"
            style={delay(0)}
          >
            {HIGHLIGHTS.map((item, index) => (
              <li
                key={item}
                className={cn(
                  "flex items-center gap-3",
                  index === 2 && "sm:basis-full xl:basis-auto",
                )}
              >
                {index > 0 && (
                  <span
                    aria-hidden
                    className={cn(
                      "text-ink/20",
                      index === 2 ? "hidden xl:inline" : "hidden sm:inline",
                    )}
                  >
                    |
                  </span>
                )}
                {item}
              </li>
            ))}
          </ul>
          <h1 className="mt-6 font-display text-[1.75rem] font-semibold min-[375px]:text-4xl leading-tight text-balance text-ink lg:text-5xl">
            <span className="hero-in block" style={delay(120)}>
              생성형 AI 시대
            </span>
            <span className="hero-in block" style={delay(260)}>
              미래를 바꾸는 <br className="sm:hidden" />
              코딩 교육의 기준
            </span>
            <span className="hero-in mt-2 block" style={delay(460)}>
              <TypingText text="애플코딩학원" className="font-bold text-brand" />
            </span>
          </h1>
          <div className="hero-in mt-8 flex flex-wrap items-center gap-3" style={delay(700)}>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-base font-semibold text-primary-foreground ring-1 ring-brand/20"
            >
              커리큘럼 살펴보기
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 rounded-full bg-paper/60 px-5 py-2.5 text-base font-semibold text-ink ring-1 ring-ink/5 backdrop-blur-md"
            >
              수업 시간표
            </Link>
          </div>
        </div>
        <div className="hero-in lg:col-span-5" style={delay(300)}>
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
