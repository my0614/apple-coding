import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Space_Grotesk } from "next/font/google";

import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "애플코딩학원 | 초·중·고부터 성인까지 코딩 전문 학원",
  description:
    "애플코딩학원 — 블록코딩, 파이썬, 웹 개발, 취업 전환까지 수준별 코딩 교육. 무료 체험 수업을 신청해 보세요.",
  authors: [{ name: "애플코딩학원" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "애플코딩학원",
    description: "블록코딩, 파이썬, 웹 개발, 취업 전환까지 수준별 코딩 교육. 무료 체험 수업 신청.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
