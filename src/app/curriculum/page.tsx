import type { Metadata } from "next";

import { ClassList } from "@/components/sections/class-list";
import { FocusAreas } from "@/components/sections/focus-areas";
import { TrialCta } from "@/components/sections/trial-cta";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "커리큘럼 | 애플코딩학원",
};

export default function CurriculumPage() {
  return (
    <>
      <Reveal>
        <FocusAreas />
      </Reveal>
      <Reveal>
        <ClassList />
      </Reveal>
      <Reveal>
        <TrialCta />
      </Reveal>
    </>
  );
}
