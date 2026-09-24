import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";

import { ContactFab } from "@/components/site/contact-fab";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "애플코딩학원 | 초·중·고부터 성인까지 코딩 전문 학원",
  description:
    "애플코딩학원 — 블록코딩, 파이썬, 웹 개발, 취업 전환까지 수준별 코딩 교육. 무료 체험 수업을 신청해 보세요.",
  authors: [{ name: "애플코딩학원" }],
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
    <html lang="ko" className={jetbrainsMono.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ContactFab />
      </body>
    </html>
  );
}
