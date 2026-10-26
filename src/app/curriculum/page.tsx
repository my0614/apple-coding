import type { Metadata } from "next";

import { ClassList } from "@/components/sections/class-list";
import { FocusAreas } from "@/components/sections/focus-areas";
import { TrialCta } from "@/components/sections/trial-cta";
import { Reveal } from "@/components/site/reveal";
import { OPEN_GRAPH } from "@/lib/site";

const TITLE = "커리큘럼 | 애플코딩학원";
const DESCRIPTION =
  "레고 창의코딩, 스크래치 블록 코딩, 피지컬 AI·드론, 파이썬·C언어·자바 언어반까지. 7세부터 고등학생까지 수준별 과정과 수업 내용을 확인하세요.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { ...OPEN_GRAPH, title: TITLE, description: DESCRIPTION },
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
