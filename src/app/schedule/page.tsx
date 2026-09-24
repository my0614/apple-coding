import type { Metadata } from "next";

import { Schedule } from "@/components/sections/schedule";

export const metadata: Metadata = {
  title: "타임테이블 | 애플코딩학원",
};

export default function SchedulePage() {
  return <Schedule />;
}
