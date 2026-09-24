import type { Metadata } from "next";

import { Schedule } from "@/components/sections/schedule";
import { TrialCta } from "@/components/sections/trial-cta";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "타임테이블 | 애플코딩학원",
};

export default function SchedulePage() {
  return (
    <>
      <Reveal>
        <Schedule />
      </Reveal>
      <Reveal>
        <TrialCta />
      </Reveal>
    </>
  );
}
