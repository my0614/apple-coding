import { BrainCircuit, Cpu, Drone, ToyBrick } from "lucide-react";

// 커리큘럼 페이지 맨 위에서 강조하는 4가지 교육 영역. 설명 문구는 초안입니다.
const AREAS = [
  {
    title: "레고 창의교육",
    description: "레고 WeDo·스파이크로 직접 만들고 움직이며 창의력과 문제 해결력을 키웁니다.",
    classes: "레고 WeDo 2.0 · 스파이크 에센셜 · 스파이크 프라임",
    icon: ToyBrick,
  },
  {
    title: "피지컬 컴퓨팅",
    description: "센서와 하드웨어로 내가 짠 코드를 현실에서 움직이며 AI 원리까지 탐구합니다.",
    classes: "피지컬 AI (레고 심화)",
    icon: Cpu,
  },
  {
    title: "드론 · 로봇 SW 교육",
    description: "드론 비행과 로봇 코딩으로 소프트웨어가 기계를 움직이는 원리를 배웁니다.",
    classes: "코드론 1·2단계 · 스크래치",
    icon: Drone,
  },
  {
    title: "파이썬 · C언어 AI 데이터",
    description: "실제 프로그래밍 언어로 AI와 데이터를 다루고, 정보처리기능사까지 준비합니다.",
    classes: "파이썬 · C언어 · 자바 · 자바스크립트",
    icon: BrainCircuit,
  },
];

export function FocusAreas() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">커리큘럼</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            애플코딩학원의 4가지 교육 영역
          </h2>
          <p className="mt-4 text-pretty text-base text-ink/65">
            만들고, 움직이고, 날리고, 분석하며 생각하는 힘을 키웁니다.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((area, index) => {
            const Icon = area.icon;
            return (
              <li
                key={area.title}
                className="relative flex flex-col overflow-hidden rounded-3xl bg-mist p-7 ring-1 ring-ink/5"
              >
                <span
                  aria-hidden
                  className="absolute top-5 right-6 font-display text-5xl font-bold text-ink/[0.07]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid size-14 place-items-center rounded-2xl bg-brand text-primary-foreground shadow-sm">
                  <Icon className="size-7" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-bold leading-snug text-ink">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{area.description}</p>
                <p className="mt-auto pt-5 text-xs font-semibold text-ink/50">{area.classes}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
