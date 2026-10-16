const STEPS = [
  {
    stage: "유치 · 초등부",
    title: "피지컬 컴퓨팅으로 성공 경험 쌓기",
    description:
      "레고에듀케이션(스파이크 에센셜·프라임)과 코드론 EDU 같은 실물 교구로 코딩의 기초를 다지며 배움의 즐거움을 깨닫습니다.",
  },
  {
    stage: "중 · 고등부",
    title: "텍스트 코딩 & AI 융합 프로젝트",
    description:
      "블록 코딩에서 자연스럽게 파이썬과 AI 알고리즘으로 넘어가며 공학적 기초 체력을 완성합니다.",
  },
  {
    stage: "입시 준비",
    title: "학생부 세특 & 과기원·영재원 포트폴리오",
    description:
      "남들이 다 하는 뻔한 스펙 대신, 아이만의 관심사를 담은 독창적인 탐구 프로젝트 결과물을 함께 완성합니다.",
  },
];

export function AdmissionRoadmap() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">입시 로드맵</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            애플코딩학원에 등록하면 달라지는 것
          </h2>
          <p className="mt-4 text-pretty text-base text-ink/65">
            아이가 자신의 적성을 발견하고 진로를 스스로 설계할 수 있도록 돕는 베이스캠프입니다.
          </p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.stage} className="relative rounded-3xl bg-card p-7 ring-1 ring-ink/5">
              <span
                aria-hidden
                className="absolute top-5 right-6 font-display text-5xl font-bold text-ink/[0.07]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-semibold text-brand">{step.stage}</p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
