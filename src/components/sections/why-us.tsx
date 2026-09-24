const REASONS = [
  {
    title: "1:1 실습 피드백",
    description: "매 수업 코드를 화면에서 바로 함께 봅니다.",
  },
  {
    title: "주간 학습 리포트",
    description: "부모님께 매주 진도를 한눈에 전달합니다.",
  },
  {
    title: "실전 프로젝트 중심",
    description: "학기에 하나씩, 진짜 결과물을 만듭니다.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-cool">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-brand">수업 진행과정</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
              교과서처럼 명확하게
            </h2>
            <p className="mt-4 max-w-[44ch] text-pretty text-base text-ink/65">
              복잡함은 배움의 적입니다. 우리는 각 단계를 가장 단순한 문장으로 정리해, 어디서부터
              무엇을 하는지 언제나 보여줍니다.
            </p>
          </div>
          <div className="grid gap-4">
            {REASONS.map((reason, index) => (
              <div
                key={reason.title}
                className="flex gap-4 rounded-2xl bg-paper/60 p-5 ring-1 ring-ink/5 backdrop-blur-xl"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 font-display font-semibold text-brand">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-ink">{reason.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
