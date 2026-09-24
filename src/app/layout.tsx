import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Space_Grotesk } from "next/font/google";

import { CallButton } from "@/components/site/call-button";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

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
  title: "생성형 AI 시대, 미래를 바꾸는 코딩 교육의 기준 | 애플코딩학원",
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
      <body>
        <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CallButton />
        </div>
      </body>
    </html>
  );
}
