import type { Metadata } from "next";

import { Courses } from "@/components/sections/courses";

export const metadata: Metadata = {
  title: "커리큘럼 | 애플코딩학원",
};

export default function CurriculumPage() {
  return <Courses />;
}
