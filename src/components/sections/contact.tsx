"use client";

import { useState } from "react";

import { NaverMap } from "./naver-map";

const ADDRESS = "전남광주 광산구 임방울대로 330, 8층 802호";
const PHONE = "062-961-8866";
const EMAIL = "aqi2255@naver.com";
const BLOG_URL = "https://blog.naver.com/aqi2255";
const NAVER_PLACE_URL = "https://map.naver.com/p/entry/place/1541412027";

const contactLinkClass = "transition-colors hover:text-paper";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid gap-12 rounded-[28px] bg-ink p-8 lg:grid-cols-2 lg:p-16">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-balance text-paper lg:text-4xl">
              함께 배워볼까요?
            </h2>
            <p className="mt-4 max-w-[42ch] text-pretty text-[17px] leading-[1.7] text-paper/70">
              무료 체험 수업을 신청해 주세요. 담당 선생님이 24시간 안에 연락드립니다.
            </p>
            <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-[15px]">
              <dt className="text-paper/45">위치</dt>
              <dd className="text-paper/75">{ADDRESS}</dd>
              <dt className="text-paper/45">전화번호</dt>
              <dd className="text-paper/75">
                <a href={`tel:${PHONE}`} className={contactLinkClass}>
                  {PHONE}
                </a>
              </dd>
              <dt className="text-paper/45">이메일</dt>
              <dd className="text-paper/75">
                <a href={`mailto:${EMAIL}`} className={contactLinkClass}>
                  {EMAIL}
                </a>
              </dd>
              <dt className="text-paper/45">블로그</dt>
              <dd className="text-paper/75">
                <a
                  href={BLOG_URL}
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
                placeUrl={NAVER_PLACE_URL}
              />
            </div>
          </div>
          {submitted ? (
            <div className="grid place-items-center rounded-[20px] bg-paper p-8">
              <p className="text-center text-base text-ink">
                상담 신청이 접수되었습니다.
                <br />
                <span className="text-sm text-ink/50">담당 선생님이 24시간 안에 연락드릴게요.</span>
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-4 rounded-[20px] bg-paper p-8"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-ink">
                  이름
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full rounded-[10px] border border-border bg-paper px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-ink/35 focus:border-brand"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm font-bold text-ink">
                  연락처
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  className="w-full rounded-[10px] border border-border bg-paper px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-ink/35 focus:border-brand"
                  placeholder="010-0000-0000"
                />
              </div>
              <div>
                <label htmlFor="contact-course" className="mb-2 block text-sm font-bold text-ink">
                  관심 과정
                </label>
                <select
                  id="contact-course"
                  className="w-full rounded-[10px] border border-border bg-paper px-4 py-3.5 text-[15px] text-ink outline-none focus:border-brand"
                >
                  <option>블록코딩 기초</option>
                  <option>파이썬 &amp; 웹</option>
                  <option>전직 트랙</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-brand py-4 text-[17px] font-bold text-primary-foreground transition-colors hover:bg-brand-hover"
              >
                상담 신청하기
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
