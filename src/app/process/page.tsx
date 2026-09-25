import type { Metadata } from "next";

import { Roadmap } from "@/components/sections/roadmap";
import { TrialCta } from "@/components/sections/trial-cta";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "수업 진행과정 | 애플코딩학원",
};

export default function ProcessPage() {
  return (
    <>
      <Reveal>
        <Roadmap />
      </Reveal>
      <Reveal>
        <TrialCta />
      </Reveal>
    </>
  );
}
