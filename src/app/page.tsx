import Image from "next/image";

import { Contact } from "@/components/home/contact";
import heroDesk from "@/assets/hero-desk.jpg";
import parentAvatar from "@/assets/parent-avatar.jpg";
import studentAvatar from "@/assets/student-avatar.jpg";

const NAV_LINKS = [
  { href: "#course", label: "과정" },
  { href: "#why", label: "이유" },
  { href: "#schedule", label: "타임테이블" },
  { href: "#contact", label: "문의" },
];

const COURSES = [
  {
    audience: "초등 · 7~12세",
    title: "블록코딩 기초",
    description: "스크래치와 시각적 블록으로 논리적 사고의 첫 단추를 채웁니다.",
    schedule: "주 2회 · 90분",
    level: "레벨 A",
  },
  {
    audience: "중·고등 · 13~18세",
    title: "파이썬 & 웹",
    description: "실제 프로젝트로 파이썬과 웹 개발을 함께 다룹니다.",
    schedule: "주 2회 · 120분",
    level: "레벨 B",
  },
  {
    audience: "성인 · 취업 전환",
    title: "전직 트랙",
    description: "포트폴리오와 면접까지, 개발자 전환을 위한 완성형 과정입니다.",
    schedule: "주 3회 · 180분",
    level: "레벨 C",
  },
];

const REASONS = [
  {
    title: "1:1 실습 피드백",
    description: "매 수업 코드를 화면에서 바로 함께 봅니다.",
  },
  {
    title: "주간 학습 리포트",
    description: "부모님께 매주 진도를 한눈에 전달합니다.",
  },
  {
    title: "실전 프로젝트 중심",
    description: "학기에 하나씩, 진짜 결과물을 만듭니다.",
  },
];

const SCHEDULE = [
  { day: "월요일", course: "블록코딩", time: "16:00 – 17:30" },
  { day: "수요일", course: "파이썬", time: "18:00 – 20:00" },
  { day: "목요일", course: "웹 개발", time: "18:00 – 20:00" },
  { day: "토요일", course: "프로젝트", time: "10:00 – 13:00" },
];

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

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/55 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-[10px] bg-brand font-display font-semibold text-primary-foreground">
            A
          </span>
          <span className="font-semibold tracking-tight text-ink">애플코딩학원</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper ring-1 ring-ink/10"
        >
          상담 신청
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cool">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 78% 10%, rgba(120,170,255,0.35), transparent 60%), radial-gradient(50% 50% at 15% 90%, rgba(20,184,166,0.22), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-paper/70 px-3 py-1.5 text-xs font-medium text-brand ring-1 ring-ink/5 backdrop-blur-md">
            2026학년도 신규 과정 오픈
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-balance text-ink lg:text-5xl">
            깨끗한 첫 장에서,
            <br />
            코딩을 시작합니다
          </h1>
          <p className="mt-5 max-w-[46ch] text-pretty text-base text-ink/65 lg:text-lg">
            새 교과서를 펼친 깨끗한 책상처럼, 초보자에게 가장 명확한 배움을 설계했습니다. 초·중·고,
            취업을 원하는 성인까지 함께.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#course"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-primary-foreground ring-1 ring-brand/20"
            >
              과정 살펴보기
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-full bg-paper/60 px-5 py-3 text-sm font-medium text-ink ring-1 ring-ink/5 backdrop-blur-md"
            >
              수업 시간표
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-ink/60">
            <div>
              <span className="block font-display text-2xl font-semibold text-ink">6,400+</span>
              수료생
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div>
              <span className="block font-display text-2xl font-semibold text-ink">98%</span>
              만족도
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-[20px] bg-paper/65 p-3 ring-1 ring-ink/5 backdrop-blur-2xl">
            <Image
              src={heroDesk}
              alt="코드가 켜진 노트북이 놓인 깨끗한 학습 책상"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full rounded-[14px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="course" className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-brand">과정</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            연령별 맞춤 커리큘럼
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="rounded-2xl bg-cool/60 p-6 ring-1 ring-ink/5 backdrop-blur-xl"
            >
              <span className="text-xs font-medium text-ink/50">{course.audience}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{course.title}</h3>
              <p className="mt-2 text-pretty text-sm text-ink/65">{course.description}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-ink/50">
                <span>{course.schedule}</span>
                <span className="font-medium text-brand">{course.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="bg-cool">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-brand">우리의 방식</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
              교과서처럼 명확하게
            </h2>
            <p className="mt-4 max-w-[44ch] text-pretty text-base text-ink/65">
              복잡함은 배움의 적입니다. 우리는 각 단계를 가장 단순한 문장으로 정리해, 어디서부터
              무엇을 하는지 언제나 보여줍니다.
            </p>
          </div>
          <div className="grid gap-4">
            {REASONS.map((reason, index) => (
              <div
                key={reason.title}
                className="flex gap-4 rounded-2xl bg-paper/60 p-5 ring-1 ring-ink/5 backdrop-blur-xl"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 font-display font-semibold text-brand">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-ink">{reason.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="schedule" className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
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

function Testimonials() {
  return (
    <section className="bg-cool">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
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

function Footer() {
  return (
    <footer className="bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg bg-brand font-display font-semibold text-primary-foreground">
            A
          </span>
          <span className="font-semibold text-ink">애플코딩학원</span>
        </div>
        <p className="text-xs text-ink/50">© 2026 Apple Coding Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Header />
      <main>
        <Hero />
        <Courses />
        <WhyUs />
        <Schedule />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
