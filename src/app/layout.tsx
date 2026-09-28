import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Space_Grotesk } from "next/font/google";

import { CallButton } from "@/components/site/call-button";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { SITE } from "@/lib/site";

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

const DESCRIPTION =
  "레고·피지컬 컴퓨팅·드론부터 파이썬·C언어까지, 초등부터 고등까지 수준별 코딩 교육. 수완지구 10년의 노하우, 무료 체험 수업을 신청해 보세요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "생성형 AI 시대, 미래를 바꾸는 코딩 교육의 기준 | 애플코딩학원",
  description: DESCRIPTION,
  authors: [{ name: SITE.name }],
  openGraph: {
    title: "애플코딩학원 | 생성형 AI 시대, 미래를 바꾸는 코딩 교육의 기준",
    description: DESCRIPTION,
    siteName: SITE.name,
    locale: "ko_KR",
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
