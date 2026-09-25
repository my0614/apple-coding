// 수업 진행과정 페이지의 단계별 커리큘럼 로드맵.
// 대상 학년과 과정 이름은 src/lib/classes.ts(교습비표 기준)를 따릅니다. 단계 구성은 초안입니다.
const STEPS = [
  {
    title: "레고 창의코딩",
    target: "7세 ~ 초5",
    classes: ["레고 WeDo 2.0", "레고 스파이크 에센셜"],
  },
  {
    title: "블록 코딩",
    target: "초2 ~",
    classes: ["스크래치 3.0", "스크래치 자격증반", "코딩수학 (사고력 · 알고리즘)"],
  },
  {
    title: "피지컬 · 드론",
    target: "초4 ~",
    classes: ["레고 스파이크 프라임", "피지컬 AI (레고 심화)", "코드론 1·2단계"],
  },
  {
    title: "언어반",
    target: "초5 ~",
    classes: ["파이썬", "C언어", "자바", "자바스크립트"],
  },
  {
    title: "자격증 · 입시 연계",
    target: "중 · 고등",
    classes: ["정보처리기능사", "수행평가 · 탐구 프로젝트", "코딩수학 (교과연계)"],
  },
];

export function LearningPath() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">단계별 커리큘럼</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            처음 만나는 코딩부터 자격증까지
          </h2>
          <p className="mt-4 text-pretty text-base text-ink/65">
            아이의 나이와 수준에 맞춰 시작하고, 한 단계씩 다음 과정으로 이어집니다.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-8 lg:grid-cols-5 lg:gap-4">
          {/* 컴퓨터: 단계를 잇는 가로선 */}
          <span
            aria-hidden
            className="absolute top-5 right-[10%] left-[10%] hidden h-0.5 bg-brand/20 lg:block"
          />
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-4 lg:text-center"
            >
              {/* 휴대폰: 다음 단계까지 이어지는 세로선 (마지막 단계 제외) */}
              {index < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-10 -bottom-8 left-5 w-0.5 bg-brand/20 lg:hidden"
                />
              )}
              <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-brand font-display text-base font-bold text-primary-foreground shadow-sm ring-4 ring-mist">
                {index + 1}
              </span>
              <div className="flex-1 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-ink/10 lg:w-full">
                <p className="text-xs font-semibold text-brand">{step.target}</p>
                <h3 className="mt-1 text-lg font-bold text-ink">{step.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-ink/65">
                  {step.classes.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-ink/50">
          * 시작 단계와 진행 속도는 상담 후 학생 수준에 맞춰 정해 드립니다.
        </p>
      </div>
    </section>
  );
}
