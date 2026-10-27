import { Lightbulb, Puzzle, Rocket } from "lucide-react";
import type { Metadata } from "next";

import { TrialCta } from "@/components/sections/trial-cta";
import { Reveal } from "@/components/site/reveal";
import { OPEN_GRAPH } from "@/lib/site";

const TITLE = "비전 | 애플코딩학원";
const DESCRIPTION =
  "디지털 세상의 설계자, AI와 함께 성장하는 아이들의 꿈을 디자인합니다. 창의적 상상력, 문제 해결력과 자신감, 융합형 리더로의 성장까지 애플코딩학원의 3가지 핵심 약속을 소개합니다.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { ...OPEN_GRAPH, title: TITLE, description: DESCRIPTION },
};

// 학원장 비전 문서(애플코딩학원 홈페이지 비전.pdf)의 3가지 핵심 약속.
const PROMISES = [
  {
    title: "나만의 생각을 마음껏 펼치는 '창의적 상상력' 교육",
    description:
      "유치원생부터 고등학생까지, 아이들의 눈높이에 맞춘 흥미진진한 프로젝트와 체험 중심 학습을 통해 호기심을 자극하고 아이디어에 생명력을 불어넣습니다. **무한한 상상력을 코딩과 AI로 현실화하는 즐거움**을 발견합니다.",
    icon: Lightbulb,
  },
  {
    title: "AI와 함께 미래를 주도하는 '문제 해결력'과 '자신감'",
    description:
      "복잡한 문제를 논리적으로 분석하고 단계별로 해결해 나가는 과정 속에서 **스스로 문제를 풀어낼 수 있다는 자신감**을 심어줍니다. 생성형 AI를 도구로 활용하여 더욱 효과적이고 창의적인 문제 해결 능력을 함양합니다.",
    icon: Puzzle,
  },
  {
    title: "미래 사회를 이끌어가는 '융합형 리더'로의 성장",
    description:
      "코딩과 AI뿐만 아니라 과학, 수학, 예술 등 다양한 분야와 융합된 교육을 통해 **폭넓은 시야를 가진 인재**로 성장하도록 돕습니다. 창의적인 아이디어로 세상에 긍정적인 변화를 이끌어내는 미래 리더를 육성합니다.",
    icon: Rocket,
  },
];

// **...** 로 감싼 부분만 형광펜처럼 강조합니다.
function Emphasis({ text }: { text: string }) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <mark
        key={i}
        className="rounded-sm bg-[#fff2a8] px-0.5 font-bold text-ink [box-decoration-break:clone]"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export default function VisionPage() {
  return (
    <>
      <Reveal>
        <section className="bg-card">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-brand">비전 (VISION)</p>
              <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
                디지털 세상의 설계자, AI와 함께 성장하는 아이들의 꿈을 디자인하다
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed font-semibold text-ink/80 lg:text-xl lg:leading-relaxed">
                애플코딩학원은 우리 아이들이 미래 디지털 사회의 주인공으로 당당하게 성장할 수 있도록
                돕는 <Emphasis text="**든든한 디딤돌**" />
                입니다. 단순히 코딩 기술을 배우는 것을 넘어, AI라는 무한한 가능성을 도구 삼아
                아이들의 생각에 날개를 달아주고,{" "}
                <Emphasis text="**스스로 미래를 설계하는 자신감 넘치는 ‘생각 설계자’**" />로
                키워냅니다.
              </p>
            </div>

            <h2 className="mt-16 text-xl font-bold text-ink">애플코딩학원의 3가지 핵심 약속</h2>
            <ul className="mt-6 grid gap-5 lg:grid-cols-3">
              {PROMISES.map((promise, index) => {
                const Icon = promise.icon;
                return (
                  <li
                    key={promise.title}
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
                    <h3 className="mt-6 text-lg font-bold leading-snug text-balance text-ink">
                      {promise.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed font-semibold text-ink/70">
                      <Emphasis text={promise.description} />
                    </p>
                  </li>
                );
              })}
            </ul>

            <blockquote className="mt-16 max-w-3xl border-l-4 border-brand pl-6">
              <p className="text-pretty text-base leading-relaxed text-ink/75">
                애플코딩학원은 아이들의 무한한 잠재력을 믿습니다. 아이들이 꿈을 향해 힘차게 나아갈
                수 있도록 끊임없이 연구하고 지원하며, 즐거운 배움과 성장의 기쁨을 함께 나누는 행복한
                교육 공동체가 되겠습니다.
              </p>
              <footer className="mt-4 text-sm font-semibold text-ink/60">애플코딩학원장</footer>
            </blockquote>

            {/* 29MB 영상. preload="metadata"로 재생 전엔 앞부분 정보만 받습니다. */}
            <video
              src="/apple_coding.mp4"
              controls
              playsInline
              preload="metadata"
              aria-label="애플코딩학원 소개 영상"
              className="mt-16 aspect-video w-full rounded-3xl bg-ink ring-1 ring-ink/5"
            />
          </div>
        </section>
      </Reveal>
      <Reveal>
        <TrialCta />
      </Reveal>
    </>
  );
}
