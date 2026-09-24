"use client";

import { useEffect, useState } from "react";

// 글자가 한 글자씩 써졌다가 뒤에서부터 지워지는 것을 반복합니다.
// 스타일은 globals.css의 .type-* 에 있습니다.
// 원래 속도의 0.5배(2배 느리게)로 맞춘 값입니다.
const TYPE_MS = 280;
const DELETE_MS = 180;
const HOLD_MS = 5200;
const EMPTY_MS = 900;
const START_MS = 1600;

export function TypingText({ text, className }: { text: string; className?: string }) {
  const chars = Array.from(text);
  // 서버 렌더링과 첫 화면에는 전체 글자를 보여줍니다.
  const [count, setCount] = useState(chars.length);
  const [deleting, setDeleting] = useState(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(() => setAnimating(true), START_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animating) return;
    let wait: number;
    if (deleting) {
      wait = count === chars.length ? HOLD_MS : DELETE_MS;
    } else {
      wait = count === 0 ? EMPTY_MS : TYPE_MS;
    }
    const timer = setTimeout(() => {
      if (deleting) {
        if (count === 0) setDeleting(false);
        else setCount(count - 1);
      } else if (count === chars.length) {
        setDeleting(true);
      } else {
        setCount(count + 1);
      }
    }, wait);
    return () => clearTimeout(timer);
  }, [animating, count, deleting, chars.length]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="type-text">
        {chars.slice(0, count).map((char, i) => (
          <span key={i} className="type-char">
            {char}
          </span>
        ))}
        {animating && <span className="type-caret" />}
        {/* 아직 안 보이는 글자도 자리를 차지해서 레이아웃이 흔들리지 않게 합니다. */}
        <span className="invisible">{chars.slice(count).join("")}</span>
      </span>
    </span>
  );
}
