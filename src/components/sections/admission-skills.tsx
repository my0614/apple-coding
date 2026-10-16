import { Puzzle, Rocket, Wrench } from "lucide-react";

const SKILLS = [
  {
    title: "문제를 작게 분해하는 사고력",
    description: "복잡한 상황을 단계별로 쪼개어 분석합니다.",
    icon: Puzzle,
  },
  {
    title: "실패를 두려워하지 않는 디버깅",
    description:
      "로봇이 멈추거나 코드가 꼬였을 때 스스로 원인을 찾아 다시 도전하는 끈기를 기릅니다.",
    icon: Wrench,
  },
  {
    title: "아이디어를 꺼내는 구현력",
    description: "머릿속 생각을 실물 로봇과 소프트웨어로 완성하는 성취감을 경험합니다.",
    icon: Rocket,
  },
];

export function AdmissionSkills() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">코딩을 배우는 이유</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            AI가 코드를 짜주는 시대, 진짜 필요한 것은 &lsquo;문제 해결력&rsquo;
          </h2>
          <p className="mt-4 text-pretty text-base text-ink/65">
            코드를 따라 치는 타이핑이 아니라 생각을 구체화하는 힘이 필요합니다. 이 과정에서 아이들은
            &ldquo;나도 할 수 있다!&rdquo;는 자신감을 얻고, 공부하는 태도가 능동적으로 바뀝니다.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <li key={skill.title} className="rounded-3xl bg-mist p-7 ring-1 ring-ink/5">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand text-primary-foreground shadow-sm">
                  <Icon className="size-7" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-bold leading-snug text-ink">{skill.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{skill.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
