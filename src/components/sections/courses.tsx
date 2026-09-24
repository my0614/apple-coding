const COURSES = [
  {
    audience: "초등 · 7~12세",
    title: "블록코딩 기초",
    description: "스크래치와 시각적 블록으로 논리적 사고의 첫 단추를 채웁니다.",
    schedule: "주 2회 · 90분",
    level: "레벨 A",
  },
  {
    audience: "중·고등 · 13~18세",
    title: "파이썬 & 웹",
    description: "실제 프로젝트로 파이썬과 웹 개발을 함께 다룹니다.",
    schedule: "주 2회 · 120분",
    level: "레벨 B",
  },
  {
    audience: "성인 · 취업 전환",
    title: "전직 트랙",
    description: "포트폴리오와 면접까지, 개발자 전환을 위한 완성형 과정입니다.",
    schedule: "주 3회 · 180분",
    level: "레벨 C",
  },
];

export function Courses() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-brand">커리큘럼</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            연령별 맞춤 커리큘럼
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="rounded-2xl bg-cool/60 p-6 ring-1 ring-ink/5 backdrop-blur-xl"
            >
              <span className="text-xs font-medium text-ink/50">{course.audience}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{course.title}</h3>
              <p className="mt-2 text-pretty text-sm text-ink/65">{course.description}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-ink/50">
                <span>{course.schedule}</span>
                <span className="font-medium text-brand">{course.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
