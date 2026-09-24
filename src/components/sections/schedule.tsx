const SCHEDULE = [
  { day: "월요일", course: "블록코딩", time: "16:00 – 17:30" },
  { day: "수요일", course: "파이썬", time: "18:00 – 20:00" },
  { day: "목요일", course: "웹 개발", time: "18:00 – 20:00" },
  { day: "토요일", course: "프로젝트", time: "10:00 – 13:00" },
];

export function Schedule() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-brand">타임테이블</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            주간 수업 시간표
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-[18px] bg-cool/50 p-4 ring-1 ring-ink/5 backdrop-blur-xl lg:grid-cols-4 lg:p-6">
          {SCHEDULE.map((item) => (
            <div key={item.day} className="rounded-xl bg-paper/70 p-4">
              <p className="text-xs font-medium text-ink/50">{item.day}</p>
              <p className="mt-2 text-sm font-medium text-ink">{item.course}</p>
              <p className="mt-1 text-xs text-ink/50">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
