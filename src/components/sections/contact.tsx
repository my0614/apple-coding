"use client";

import { CircleCheck, Mail, MapPin, Newspaper, Phone } from "lucide-react";
import { useState } from "react";

import { COURSE_OPTIONS } from "@/lib/contact";
import { SITE } from "@/lib/site";

import { NaverMap } from "./naver-map";

const fieldClass =
  "w-full rounded-xl bg-mist px-4 py-3 text-base text-ink ring-1 ring-ink/10 outline-none transition placeholder:text-ink/35 focus:bg-card focus:ring-2 focus:ring-brand sm:text-sm";

const CONTACT_ITEMS = [
  { label: "위치", value: SITE.address, icon: MapPin },
  { label: "전화번호", value: SITE.phone, href: `tel:${SITE.phone}`, icon: Phone },
  { label: "이메일", value: SITE.email, href: `mailto:${SITE.email}`, icon: Mail },
  {
    label: "블로그",
    value: "blog.naver.com/aqi2255 ↗",
    href: SITE.blogUrl,
    external: true,
    icon: Newspaper,
  },
];

type Status = "idle" | "sending" | "success";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setError("");
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          course: form.get("course"),
          message: form.get("message"),
          consent: form.get("consent") === "on",
          website: form.get("website"),
        }),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };
      if (!result.ok) throw new Error(result.error);
      setStatus("success");
    } catch (err) {
      const reason =
        err instanceof Error && err.message ? err.message : "잠시 후 다시 시도해 주세요.";
      setError(`${reason} 급하시면 전화(${SITE.phone})로 문의해 주세요.`);
      setStatus("idle");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-medium text-brand">무료 상담 신청</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            함께 배워볼까요?
          </h2>
          <p className="mt-4 max-w-[42ch] text-pretty text-base text-ink/65">
            무료 체험 수업을 신청해 주세요. 담당 선생님이 24시간 안에 연락드립니다.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-card text-brand shadow-sm ring-1 ring-ink/10">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <div className="pt-0.5">
                    <p className="text-xs text-ink/45">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="font-semibold text-ink transition-colors hover:text-brand"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-ink">{item.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <NaverMap
              title="애플코딩학원"
              address="광주 광산구 임방울대로 330"
              placeUrl={SITE.naverPlaceUrl}
            />
          </div>
        </div>
        {status === "success" ? (
          <div className="grid place-items-center rounded-3xl bg-card p-8 text-center shadow-lg ring-1 ring-ink/5">
            <div>
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand-soft text-brand">
                <CircleCheck className="size-7" aria-hidden />
              </span>
              <p className="mt-5 text-xl font-bold text-ink">상담 신청이 접수되었습니다</p>
              <p className="mt-2 text-sm text-ink/60">담당 선생님이 24시간 안에 연락드릴게요.</p>
            </div>
          </div>
        ) : (
          <form
            className="space-y-5 rounded-3xl bg-card p-6 shadow-lg ring-1 ring-ink/5 sm:p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-sm font-semibold text-ink/80"
              >
                이름 <span className="text-brand">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                maxLength={30}
                autoComplete="name"
                className={fieldClass}
                placeholder="홍길동"
              />
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="mb-1.5 block text-sm font-semibold text-ink/80"
              >
                연락처 <span className="text-brand">*</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                className={fieldClass}
                placeholder="010-0000-0000"
              />
            </div>
            <div>
              <label
                htmlFor="contact-course"
                className="mb-1.5 block text-sm font-semibold text-ink/80"
              >
                관심 과정
              </label>
              <select id="contact-course" name="course" className={fieldClass}>
                {COURSE_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-semibold text-ink/80"
              >
                문의 내용 (선택)
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                maxLength={1000}
                className={`${fieldClass} resize-none`}
                placeholder="학생 학년, 코딩 경험, 궁금한 점을 적어 주세요."
              />
            </div>
            {/* 스팸 봇 차단용 숨은 입력칸 (사람에게는 보이지 않음) */}
            <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="contact-website">웹사이트</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="rounded-xl bg-mist p-4 text-xs leading-relaxed text-ink/55">
              <label className="flex cursor-pointer items-start gap-2.5 text-sm font-medium text-ink/85">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 size-4 shrink-0 accent-brand"
                />
                <span>
                  개인정보 수집·이용에 동의합니다. <span className="text-brand">*</span>
                </span>
              </label>
              <ul className="mt-2 space-y-0.5 pl-6">
                <li>수집 항목: 이름, 연락처, 관심 과정, 문의 내용</li>
                <li>이용 목적: 상담 및 체험 수업 안내 연락</li>
                <li>보관 기간: 상담 완료 후 1년 이내 파기</li>
              </ul>
            </div>
            {error && (
              <p
                role="alert"
                className="rounded-xl bg-brand-soft px-4 py-3 text-sm font-medium text-brand"
              >
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-brand py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-brand/90 disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? "보내는 중…" : "상담 신청하기"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
