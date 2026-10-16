import { Check } from "lucide-react";

const ITEMS = [
  "컴퓨터·휴대폰으로 게임만 하고 있어 생산적인 활동으로 이끌어주고 싶다.",
  "수학·과학은 좋아하는데 이를 어떻게 진로와 연결해야 할지 막막하다.",
  "실패하면 쉽게 포기하는 아이에게 스스로 문제를 끝까지 해결하는 끈기를 길러주고 싶다.",
  "AI·반도체 등 급변하는 첨단 입시 트렌드에 발맞춘 체계적인 로드맵이 필요하다.",
];

export function AdmissionChecklist() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">자가 점검</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            우리 아이 미래 경쟁력, 지금 점검해 보세요
          </h2>
        </div>
        <ul className="mt-10 grid max-w-3xl gap-3">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-mist p-5 ring-1 ring-ink/5"
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-primary-foreground">
                <Check className="size-4" aria-hidden />
              </span>
              <span className="text-base leading-relaxed text-ink/80">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base font-semibold text-ink">
          2개 이상 해당된다면, 지금이 바로 코딩 교육을 시작해야 할 골든타임입니다.
        </p>
      </div>
    </section>
  );
}
