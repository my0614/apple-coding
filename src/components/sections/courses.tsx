import { cn } from "@/lib/utils";

const COURSES = [
  {
    number: "01",
    audience: "초등",
    title: "블록코딩 기초",
    description: "블록을 맞추며 순서와 반복, 조건을 익힙니다. 코딩을 처음 만나는 초등학생에게 맞춘 과정입니다.",
    schedule: "주 2회 · 90분",
    highlight: false,
  },
  {
    number: "02",
    audience: "중·고등",
    title: "파이썬 & 웹",
    description: "텍스트 코딩으로 넘어가 파이썬과 웹 개발을 배웁니다. 수행평가, 대입 활동과도 연계합니다.",
    schedule: "주 2회 · 120분",
    highlight: false,
  },
  {
    number: "03",
    audience: "성인 · 취업 전환",
    title: "전직 트랙",
    description: "취업을 목표로 하는 성인을 위한 과정입니다. 포트폴리오 제작부터 지원까지 함께합니다.",
    schedule: "주 3회 · 180분",
    highlight: true,
  },
];

export function Courses() {
  return (
    <section id="courses" className="border-y border-border bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[13px] font-bold tracking-[0.16em] text-brand">
            CURRICULUM
          </span>
          <h2 className="text-3xl font-black tracking-tight text-balance text-ink lg:text-4xl">
            수준에 맞춰, 세 단계로
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className={cn(
                "flex flex-col gap-4 rounded-[18px] p-7",
                course.highlight
                  ? "bg-brand text-primary-foreground"
                  : "border border-border bg-cool transition-colors hover:border-brand",
              )}
            >
              <span
                className={cn(
                  "font-mono text-sm font-bold",
                  course.highlight ? "text-primary-foreground" : "text-brand",
                )}
              >
                {course.number}
              </span>
              <h3 className="text-xl font-extrabold tracking-tight">{course.title}</h3>
              <p
                className={cn(
                  "text-pretty text-[15px] leading-[1.7]",
                  course.highlight ? "text-primary-foreground/90" : "text-ink/60",
                )}
              >
                {course.description}
              </p>
              <div
                className={cn(
                  "mt-auto flex items-center justify-between text-sm",
                  course.highlight ? "text-primary-foreground/80" : "text-ink/50",
                )}
              >
                <span className="font-semibold">{course.audience}</span>
                <span>{course.schedule}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
