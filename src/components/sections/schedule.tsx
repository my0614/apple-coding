const SCHEDULE = [
  { day: "월요일", course: "블록코딩", time: "16:00 – 17:30" },
  { day: "수요일", course: "파이썬", time: "18:00 – 20:00" },
  { day: "목요일", course: "웹 개발", time: "18:00 – 20:00" },
  { day: "토요일", course: "프로젝트", time: "10:00 – 13:00" },
];

export function Schedule() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-xl">
          <span className="font-mono text-[13px] font-bold tracking-[0.16em] text-brand">
            타임테이블
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-balance text-ink lg:text-4xl">
            주간 수업 시간표
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-[18px] border border-border bg-background p-4 lg:grid-cols-4 lg:p-6">
          {SCHEDULE.map((item) => (
            <div key={item.day} className="rounded-xl border border-border bg-paper p-4">
              <p className="text-xs font-bold text-ink/50">{item.day}</p>
              <p className="mt-2 text-sm font-bold text-ink">{item.course}</p>
              <p className="mt-1 text-xs text-ink/50">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
