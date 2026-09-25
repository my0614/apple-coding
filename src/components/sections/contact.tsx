"use client";

import { useState } from "react";

import { COURSE_OPTIONS } from "@/lib/contact";
import { SITE } from "@/lib/site";

import { NaverMap } from "./naver-map";

const contactLinkClass = "transition-colors hover:text-paper";
const fieldClass =
  "w-full rounded-[10px] bg-paper/10 px-4 py-3 text-base text-paper ring-1 sm:text-sm ring-paper/10 outline-none placeholder:text-paper/40 focus:ring-2 focus:ring-brand";

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
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(55% 55% at 80% 0%, rgba(165,11,37,0.5), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-balance text-paper lg:text-4xl">
            함께 배워볼까요?
          </h2>
          <p className="mt-4 max-w-[42ch] text-pretty text-base text-paper/65">
            무료 체험 수업을 신청해 주세요. 담당 선생님이 24시간 안에 연락드립니다.
          </p>
          <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
            <dt className="text-paper/45">위치</dt>
            <dd className="text-paper/75">{SITE.address}</dd>
            <dt className="text-paper/45">전화번호</dt>
            <dd className="text-paper/75">
              <a href={`tel:${SITE.phone}`} className={contactLinkClass}>
                {SITE.phone}
              </a>
            </dd>
            <dt className="text-paper/45">이메일</dt>
            <dd className="text-paper/75">
              <a href={`mailto:${SITE.email}`} className={contactLinkClass}>
                {SITE.email}
              </a>
            </dd>
            <dt className="text-paper/45">블로그</dt>
            <dd className="text-paper/75">
              <a
                href={SITE.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClass}
              >
                blog.naver.com/aqi2255 ↗
              </a>
            </dd>
          </dl>
          <div className="mt-8">
            <NaverMap
              title="애플코딩학원"
              address="광주 광산구 임방울대로 330"
              placeUrl={SITE.naverPlaceUrl}
            />
          </div>
        </div>
        {status === "success" ? (
          <div className="grid place-items-center rounded-[18px] bg-paper/10 p-6 ring-1 ring-paper/10 backdrop-blur-xl">
            <p className="text-center text-base text-paper">
              상담 신청이 접수되었습니다.
              <br />
              <span className="text-sm text-paper/60">담당 선생님이 24시간 안에 연락드릴게요.</span>
            </p>
          </div>
        ) : (
          <form
            className="space-y-4 rounded-[18px] bg-paper/10 p-6 ring-1 ring-paper/10 backdrop-blur-xl"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-xs text-paper/60">
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
              <label htmlFor="contact-phone" className="mb-1.5 block text-xs text-paper/60">
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
              <label htmlFor="contact-course" className="mb-1.5 block text-xs text-paper/60">
                관심 과정
              </label>
              <select id="contact-course" name="course" className={fieldClass}>
                {COURSE_OPTIONS.map((option) => (
                  <option key={option} className="text-ink">
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-xs text-paper/60">
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
            <div className="rounded-[10px] bg-paper/5 p-3 text-xs leading-relaxed text-paper/55">
              <label className="flex cursor-pointer items-start gap-2.5 text-sm text-paper/80">
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
              <p role="alert" className="rounded-[10px] bg-brand/15 px-3 py-2 text-sm text-paper">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-[10px] bg-brand py-3 text-sm font-medium text-primary-foreground ring-1 ring-brand/30 transition-colors hover:bg-brand/90 disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? "보내는 중…" : "상담 신청하기"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
