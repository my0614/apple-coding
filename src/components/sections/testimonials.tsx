import Image from "next/image";

import parentAvatar from "@/assets/parent-avatar.jpg";
import studentAvatar from "@/assets/student-avatar.jpg";

const TESTIMONIALS = [
  {
    quote:
      "아이 스스로 코드를 고치는 모습을 보며 가장 큰 보람을 느꼈습니다. 설명이 정말 친절합니다.",
    name: "김서연",
    role: "초등 3학년 학부모",
    avatar: parentAvatar,
  },
  {
    quote:
      "취업 전환 과정 덕분에 첫 개발자 자리에 합격했습니다. 포트폴리오 지도가 결정적이었습니다.",
    name: "이도현",
    role: "전직 트랙 수료생",
    avatar: studentAvatar,
  },
];

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[13px] font-bold tracking-[0.16em] text-brand">
            REVIEWS
          </span>
          <h2 className="max-w-xl text-3xl font-black tracking-tight text-balance text-ink lg:text-4xl">
            함께 배운 이들의 이야기
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-7 rounded-[18px] border border-border bg-paper p-9"
            >
              <p className="text-pretty text-xl leading-[1.6] font-semibold tracking-tight text-ink">
                “{item.quote}”
              </p>
              <div className="mt-auto flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={`${item.name} 프로필 사진`}
                  sizes="44px"
                  className="size-11 rounded-full object-cover ring-1 ring-ink/5"
                />
                <div>
                  <p className="text-[15px] font-bold text-ink">{item.name}</p>
                  <p className="text-sm text-ink/50">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
