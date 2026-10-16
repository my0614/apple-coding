import { SITE } from "@/lib/site";

// 입시 페이지 맨 위: 핵심 요약 3가지. 문구는 공식 블로그 글(2026.10.13) 기준입니다.
const SUMMARY = [
  {
    title: "입시의 대격변",
    description:
      "4대 과학기술원 지원자가 5년 새 150.5% 늘며 AI·반도체 전공으로 인재가 쏠리고 있습니다.",
  },
  {
    title: "코딩의 본질",
    description: "문법 암기가 아니라 복잡한 문제를 논리적으로 쪼개고 끝까지 해결하는 힘입니다.",
  },
  {
    title: "애플코딩학원의 약속",
    description: "막연한 불안감을 자신감과 확실한 진로 포트폴리오로 바꿔드립니다.",
  },
];

export function AdmissionIntro() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">입시</p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-5xl">
            입시 판도를 바꾸는 코딩 교육 로드맵
          </h1>
          <p className="mt-4 text-pretty text-base text-ink/65">
            &ldquo;세상이 너무 빨리 바뀌어서 우리 아이는 무얼 준비시켜야 할지 막막해요.&rdquo; 그
            답은 최근 입시 데이터가 보여주고 있습니다.
          </p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {SUMMARY.map((item, index) => (
            <li key={item.title} className="rounded-3xl bg-mist p-7 ring-1 ring-ink/5">
              <span className="font-display text-sm font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-xl font-bold leading-snug text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-ink/45">
          더 자세한 입시 소식은{" "}
          <a
            href={SITE.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-ink"
          >
            공식 블로그
          </a>
          에서 확인하세요.
        </p>
      </div>
    </section>
  );
}
