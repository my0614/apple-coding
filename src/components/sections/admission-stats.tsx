// 과기원 입시 수치 카드. 수치는 공식 블로그 글(2026.10.13) 기준이며, 입시 결과가 나오면 갱신하세요.
const STATS = [
  { value: "150.5%", label: "4대 과기원 수시 지원자", note: "5년 전 대비 증가" },
  { value: "80.6%", label: "GIST 반도체공학과 지원자", note: "전년 대비 증가" },
  { value: "53.9%", label: "DGIST 반도체공학과 지원자", note: "전년 대비 증가" },
  { value: "340명", label: "AI 신설 학과 추가 모집", note: "KAIST·GIST·DGIST·UNIST" },
];

export function AdmissionStats() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">입시 데이터</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            데이터가 증명하는 미래
          </h2>
          <p className="mt-4 text-pretty text-base text-ink/65">
            삼성전자 계약학과를 비롯한 AI·반도체 학과로 상위권 학생들의 지원이 몰리고 있습니다.
            인공지능과 첨단 기술을 직접 다루고 설계할 줄 아는 인재가 미래의 주역이 되기 때문입니다.
          </p>
        </div>
        <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-3xl bg-card p-7 ring-1 ring-ink/5">
              <dd className="font-display text-4xl font-bold text-brand">{stat.value}</dd>
              <dt className="mt-3 text-base font-bold leading-snug text-ink">{stat.label}</dt>
              <p className="mt-1 text-xs font-semibold text-ink/50">{stat.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
