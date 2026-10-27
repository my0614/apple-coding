import type { Metadata } from "next";

import { ClassGallery } from "@/components/sections/class-gallery";
import { LearningPath } from "@/components/sections/learning-path";
import { Roadmap } from "@/components/sections/roadmap";
import { TrialCta } from "@/components/sections/trial-cta";
import { Reveal } from "@/components/site/reveal";
import { OPEN_GRAPH } from "@/lib/site";

const TITLE = "수업 진행과정 | 애플코딩학원";
const DESCRIPTION =
  "초등 논리적 사고, 중등 실전 구현, 고등 AI 활용까지. 직접 만들고 움직이는 수업으로 수행평가·자격증·대입까지 이어지는 애플코딩학원 교육 로드맵입니다.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { ...OPEN_GRAPH, title: TITLE, description: DESCRIPTION },
};

export default function ProcessPage() {
  return (
    <>
      <Reveal>
        <Roadmap />
      </Reveal>
      <Reveal>
        <ClassGallery />
      </Reveal>
      <Reveal>
        <LearningPath />
      </Reveal>
      <Reveal>
        <TrialCta />
      </Reveal>
    </>
  );
}
