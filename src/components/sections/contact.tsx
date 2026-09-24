"use client";

import { useState } from "react";

import { SITE } from "@/lib/site";

import { NaverMap } from "./naver-map";

const contactLinkClass = "transition-colors hover:text-paper";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(55% 55% at 80% 0%, rgba(226,55,45,0.4), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">
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
        {submitted ? (
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
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-xs text-paper/60">
                이름
              </label>
              <input
                id="contact-name"
                type="text"
                required
                className="w-full rounded-[10px] bg-paper/10 px-4 py-3 text-sm text-paper ring-1 ring-paper/10 outline-none placeholder:text-paper/40 focus:ring-2 focus:ring-brand"
                placeholder="홍길동"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-1.5 block text-xs text-paper/60">
                연락처
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                className="w-full rounded-[10px] bg-paper/10 px-4 py-3 text-sm text-paper ring-1 ring-paper/10 outline-none placeholder:text-paper/40 focus:ring-2 focus:ring-brand"
                placeholder="010-0000-0000"
              />
            </div>
            <div>
              <label htmlFor="contact-course" className="mb-1.5 block text-xs text-paper/60">
                관심 과정
              </label>
              <select
                id="contact-course"
                className="w-full rounded-[10px] bg-paper/10 px-4 py-3 text-sm text-paper ring-1 ring-paper/10 outline-none focus:ring-2 focus:ring-brand"
              >
                <option className="text-ink">블록코딩 기초</option>
                <option className="text-ink">파이썬 &amp; 웹</option>
                <option className="text-ink">전직 트랙</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-[10px] bg-brand py-3 text-sm font-medium text-primary-foreground ring-1 ring-brand/30 transition-colors hover:bg-brand/90"
            >
              상담 신청하기
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
