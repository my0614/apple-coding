import type { Metadata } from "next";

import { AdmissionChecklist } from "@/components/sections/admission-checklist";
import { AdmissionIntro } from "@/components/sections/admission-intro";
import { AdmissionRoadmap } from "@/components/sections/admission-roadmap";
import { AdmissionSkills } from "@/components/sections/admission-skills";
import { AdmissionStats } from "@/components/sections/admission-stats";
import { TrialCta } from "@/components/sections/trial-cta";
import { Reveal } from "@/components/site/reveal";
import { OPEN_GRAPH } from "@/lib/site";

const TITLE = "입시 | 애플코딩학원";
const DESCRIPTION =
  "GIST 반도체 지원자 80.6% 급증, 4대 과기원 지원자 5년 새 150.5% 증가. 입시 판도를 바꾸는 애플코딩학원 로드맵.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { ...OPEN_GRAPH, title: TITLE, description: DESCRIPTION },
};

export default function AdmissionPage() {
  return (
    <>
      <AdmissionIntro />
      <Reveal>
        <AdmissionStats />
      </Reveal>
      <Reveal>
        <AdmissionSkills />
      </Reveal>
      <Reveal>
        <AdmissionRoadmap />
      </Reveal>
      <Reveal>
        <AdmissionChecklist />
      </Reveal>
      <Reveal>
        <TrialCta />
      </Reveal>
    </>
  );
}
