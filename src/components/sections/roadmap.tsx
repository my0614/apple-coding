import {
  BrainCircuit,
  ChevronDown,
  ChevronRight,
  Cpu,
  GraduationCap,
  Puzzle,
  Wrench,
} from "lucide-react";

// 애플코딩의 3단계 교육 로드맵. 출처: 학원 제공 자료(인재상.png)
const STAGES = [
  {
    level: "초등",
    keyword: "논리적 사고",
    title: "논리적 사고와 성취감의 시작",
    description:
      "스크래치 기반 코딩과 KPC 자격증 취득을 통해 문제를 순서대로 풀어내는 힘을 기릅니다.",
    icon: Puzzle,
  },
  {
    level: "중등",
    keyword: "실전 구현",
    title: "아이디어를 결과물로 만드는 힘",
    description:
      "피지컬 컴퓨팅을 통해 코드를 실제 하드웨어로 구현하며 포트폴리오 역량을 강화합니다.",
    icon: Cpu,
  },
  {
    level: "고등",
    keyword: "AI 활용",
    title: "AI 활용력과 교과 성취의 연결",
    description:
      "AI를 외국어처럼 자연스럽게 다루며, 학교 교과 내용과 연계하여 실제 입시 경쟁력을 높입니다.",
    icon: BrainCircuit,
  },
];

// 모든 단계에 공통으로 적용되는 수업 방식
const METHODS = [
  {
    title: "직접 만들고 움직이는 수업",
    description:
      "레고·드론 같은 피지컬 컴퓨팅으로 내가 짠 코드가 실제로 움직이는 모습을 보며 배웁니다.",
    icon: Wrench,
  },
  {
    title: "대입·수행평가·자격증까지 연결",
    description:
      "탐구 프로젝트와 수행평가, 정보처리기능사까지 학생의 목표에 맞춰 이어서 준비합니다.",
    icon: GraduationCap,
  },
];

export function Roadmap() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-brand">수업 진행과정</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            명문대 진학의 새로운 공식:
            <br />
            전공 지식보다{" "}
            <span className="whitespace-nowrap text-brand">&lsquo;AI 활용력&rsquo;</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ink/65">
            최근 대학들은 단순한 전공 지식보다 AI를 도구로 활용해 복잡한 문제를 해결하는
            &lsquo;융합형 인재&rsquo;를 요구하고 있습니다. 애플코딩학원은 이러한 흐름에 맞춰
            초등부터 고등까지 <strong className="font-semibold text-ink">논리적 사고</strong>,{" "}
            <strong className="font-semibold text-ink">실전 구현</strong>,{" "}
            <strong className="font-semibold text-ink">AI 활용</strong>으로 이어지는 체계적인
            로드맵을 제공합니다.
          </p>
        </div>

        <h3 className="mt-12 text-lg font-bold text-ink lg:text-xl">
          애플코딩학원만의 3단계 교육 로드맵
        </h3>
        <ol className="mt-4 grid gap-10 lg:grid-cols-3 lg:gap-6">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            const isLast = index === STAGES.length - 1;
            return (
              <li key={stage.level} className="relative">
                <div className="flex h-full flex-col rounded-2xl bg-mist p-6 ring-1 ring-ink/5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-wide text-brand">
                      STEP {index + 1} · {stage.level}
                    </span>
                    <Icon className="size-7 text-ink/70" aria-hidden />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-ink/50">{stage.keyword}</p>
                  <h3 className="mt-1 text-xl font-bold leading-snug text-ink">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{stage.description}</p>
                </div>
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-1/2 -bottom-8 grid size-7 -translate-x-1/2 place-items-center rounded-full bg-card text-brand shadow-sm ring-1 ring-ink/10 lg:top-1/2 lg:-right-5 lg:bottom-auto lg:left-auto lg:translate-x-0 lg:-translate-y-1/2"
                  >
                    <ChevronDown className="size-4 lg:hidden" />
                    <ChevronRight className="hidden size-4 lg:block" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-14">
          <h3 className="text-lg font-bold text-ink">모든 단계에서 함께하는 수업 방식</h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {METHODS.map((method) => {
              const Icon = method.icon;
              return (
                <li
                  key={method.title}
                  className="flex gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-ink/10"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-ink">{method.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{method.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
