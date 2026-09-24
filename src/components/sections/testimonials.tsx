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
    <section className="bg-cool">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <p className="text-sm font-medium text-brand">수강 후기</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
          함께 배운 이들의 이야기
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-paper/60 p-6 ring-1 ring-ink/5 backdrop-blur-xl"
            >
              <p className="text-pretty text-base leading-relaxed text-ink/80">{item.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={`${item.name} 프로필 사진`}
                  sizes="44px"
                  className="size-11 rounded-full object-cover ring-1 ring-ink/5"
                />
                <div>
                  <p className="text-sm font-medium text-ink">{item.name}</p>
                  <p className="text-xs text-ink/50">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
