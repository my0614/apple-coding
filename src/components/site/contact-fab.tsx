"use client";

import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PHONE = "062-961-8866";
const EMAIL = "aqi2255@naver.com";
const BLOG_URL = "https://blog.naver.com/aqi2255";

const LINK_CLASS =
  "flex items-center justify-between gap-3 rounded-[10px] px-3 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-cool";

export function ContactFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-20 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[280px] overflow-hidden rounded-[18px] border border-border bg-paper shadow-[0_20px_50px_-20px_rgba(23,18,15,0.35)]">
          <div className="flex flex-col gap-1 bg-ink px-5 py-[18px] text-paper">
            <span className="text-[17px] font-extrabold tracking-tight">
              무엇이든 물어보세요
            </span>
            <span className="text-[13px] text-paper/70">
              담당 선생님이 24시간 안에 연락드려요
            </span>
          </div>
          <div className="flex flex-col p-2">
            <a href={`tel:${PHONE}`} className={LINK_CLASS}>
              <span>전화 상담</span>
              <span className="text-xs font-medium text-ink/60">{PHONE}</span>
            </a>
            <Link href="/#contact" onClick={() => setOpen(false)} className={LINK_CLASS}>
              <span>무료 체험 신청</span>
              <span className="text-brand">→</span>
            </Link>
            <a href={`mailto:${EMAIL}`} className={LINK_CLASS}>
              <span>이메일 문의</span>
              <span className="text-xs font-medium text-ink/60">{EMAIL}</span>
            </a>
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              <span>블로그</span>
              <span className="text-ink/60">↗</span>
            </a>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex h-14 items-center gap-1.5 rounded-full bg-brand px-6 text-[15px] font-extrabold text-primary-foreground shadow-[0_12px_30px_-10px_rgba(232,57,43,0.6)] transition-colors hover:bg-brand-hover"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
        {open ? "닫기" : "문의하기"}
      </button>
    </div>
  );
}
