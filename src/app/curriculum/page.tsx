import type { Metadata } from "next";

import { Courses } from "@/components/sections/courses";
import { TrialCta } from "@/components/sections/trial-cta";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "커리큘럼 | 애플코딩학원",
};

export default function CurriculumPage() {
  return (
    <>
      <Reveal>
        <Courses />
      </Reveal>
      <Reveal>
        <TrialCta />
      </Reveal>
    </>
  );
}
