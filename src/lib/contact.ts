import { z } from "zod";

import { CLASS_GROUPS } from "@/lib/classes";

// 상담 폼의 "관심 과정" 선택지: 커리큘럼의 과정 묶음 + 미정
export const COURSE_OPTIONS = [
  ...CLASS_GROUPS.map((group) => group.title),
  "잘 모르겠어요 (상담 후 결정)",
];

export const contactSchema = z.object({
  name: z.string().trim().min(1, "이름을 입력해 주세요.").max(30),
  phone: z
    .string()
    .trim()
    .regex(/^0\d{1,2}-?\d{3,4}-?\d{4}$/, "연락처를 010-0000-0000 형식으로 입력해 주세요."),
  course: z.enum(COURSE_OPTIONS as [string, ...string[]], {
    errorMap: () => ({ message: "관심 과정을 선택해 주세요." }),
  }),
  message: z.string().trim().max(1000).optional().default(""),
  consent: z.literal(true, {
    errorMap: () => ({ message: "개인정보 수집·이용에 동의해 주세요." }),
  }),
  // 스팸 봇 차단용 숨은 입력칸. 사람은 보지 못해 항상 비어 있어야 합니다.
  website: z.string().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
