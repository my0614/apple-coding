"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ClassItem } from "@/lib/classes";

function TimeChips({ times }: { times: string[] }) {
  return <span className="font-semibold text-ink">{times.join(" · ")}</span>;
}

// 수업 카드. 누르면 상세 팝업이 열립니다.
export function ClassCard({ item, groupTitle }: { item: ClassItem; groupTitle: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group flex h-full w-full cursor-pointer flex-col rounded-2xl bg-card p-5 text-left shadow-sm ring-1 ring-ink/10 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand/40 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
        >
          <h4 className="text-lg font-bold text-ink">{item.name}</h4>
          <p className="mt-1.5 line-clamp-2 text-sm text-ink/60">{item.summary}</p>
          <dl className="mt-4 grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 text-sm">
            <dt className="text-ink/45">대상</dt>
            <dd className="font-semibold text-ink">{item.target}</dd>
            <dt className="text-ink/45">수업</dt>
            <dd>
              <TimeChips times={item.times} />
            </dd>
          </dl>
          <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-ink">
            자세히 보기
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] w-[calc(100%-2rem)] gap-0 overflow-y-auto rounded-2xl p-0 sm:max-w-xl">
        <div className="bg-mist px-6 pt-7 pb-5">
          <DialogHeader className="text-left sm:text-left">
            <p className="text-sm font-semibold text-brand">{groupTitle}</p>
            <DialogTitle className="mt-1 font-display text-2xl leading-tight font-bold text-ink">
              {item.name}
            </DialogTitle>
            <DialogDescription className="mt-2 text-base leading-relaxed text-ink/70">
              {item.summary}
            </DialogDescription>
          </DialogHeader>
          <dl className="mt-5 grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 text-sm">
            <dt className="text-ink/45">대상</dt>
            <dd className="font-semibold text-ink">{item.target}</dd>
            <dt className="text-ink/45">수업</dt>
            <dd>
              <TimeChips times={item.times} />
            </dd>
          </dl>
        </div>
        <div className="space-y-6 px-6 py-6">
          <div>
            <h5 className="text-base font-bold text-ink">이런 걸 배워요</h5>
            <ul className="mt-3 space-y-2">
              {item.learn.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-ink/75">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-base font-bold text-ink">이런 학생에게 추천해요</h5>
            <ul className="mt-3 space-y-2">
              {item.recommend.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-ink/75">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sage" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 border-t border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-ink/50">수업 시간과 반 구성은 상담 후 안내해 드립니다.</p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-1 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
            >
              무료 체험 신청하기
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
