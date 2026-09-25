import { Blocks, Bot, Calculator, CodeXml } from "lucide-react";

import { CLASS_GROUPS, type ClassGroup } from "@/lib/classes";

import { ClassCard } from "./class-card";

const GROUP_ICONS: Record<ClassGroup["id"], typeof Bot> = {
  robot: Bot,
  block: Blocks,
  text: CodeXml,
  math: Calculator,
};

// 강조 문장: 상자 없이 크고 굵은 글씨로, keyword만 적색으로 강조합니다.
function Highlight({ text, keyword }: { text: string; keyword: string }) {
  const [before, after] = text.split(keyword);
  return (
    <p className="mt-1 text-lg leading-snug font-bold text-ink lg:text-xl">
      {before}
      <strong className="text-brand">{keyword}</strong>
      {after}
    </p>
  );
}

// 커리큘럼 페이지의 과정별 수업 구성. 카드를 누르면 상세 팝업이 열립니다.
export function ClassList() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-brand">수업 안내</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            과정별 수업 구성
          </h2>
          <p className="mt-4 text-pretty text-base text-ink/65">
            수업을 누르면 자세한 내용을 볼 수 있어요. 아이에게 맞는 반은 상담에서 함께 정해
            드립니다.
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {CLASS_GROUPS.map((group) => {
            const Icon = GROUP_ICONS[group.id];
            return (
              <div key={group.id}>
                <div className="flex items-start gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground shadow-sm">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink lg:text-2xl">
                      {group.title}
                    </h3>
                    {group.highlight ? (
                      <Highlight {...group.highlight} />
                    ) : (
                      <p className="mt-0.5 text-sm text-ink/60">{group.description}</p>
                    )}
                  </div>
                </div>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <ClassCard item={item} groupTitle={group.title} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
