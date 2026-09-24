// 수업 진행과정 페이지 상단의 3가지 특징. 문구는 초안이니 실제 수업 방식에 맞게 다듬어 주세요.
const REASONS = [
  {
    title: "직접 만들고 움직이는 수업",
    description:
      "레고·드론 같은 피지컬 컴퓨팅으로 내가 짠 코드가 실제로 움직이는 모습을 보며 배웁니다.",
  },
  {
    title: "1:1 실습 피드백",
    description:
      "매 수업 학생의 코드를 함께 보며 막힌 부분을 바로 짚어 주고, 진도는 학부모님께 공유합니다.",
  },
  {
    title: "대입·수행평가·자격증까지 연결",
    description:
      "탐구 프로젝트와 수행평가, 정보처리기능사까지 학생의 목표에 맞춰 이어서 준비합니다.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-brand">수업 진행과정</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
              애플코딩학원의
              <br />
              특별한 수업 진행과정
            </h2>
            <p className="mt-4 max-w-[44ch] text-pretty text-base text-ink/65">
              보고 따라 하는 암기식 코딩이 아니라, 직접 만들고 생각하며 탐구하는 수업을
              설계했습니다. 기초부터 목표까지 한 단계씩 함께 갑니다.
            </p>
          </div>
          <ol className="grid gap-4">
            {REASONS.map((reason, index) => (
              <li
                key={reason.title}
                className="flex gap-4 rounded-2xl bg-mist p-5 ring-1 ring-ink/5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand font-display font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{reason.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
