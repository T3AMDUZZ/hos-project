import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "성모영상의학과 | 종합검진센터",
  description:
    "대전 성모영상의학과 종합검진센터 - 정밀한 진단, 따뜻한 진료. 영상의학, 내시경, 종합검진, 여성클리닉",
  keywords: "성모영상의학과, 대전, 종합검진, 영상의학, 내시경, 건강검진",
  openGraph: {
    title: "성모영상의학과 | 종합검진센터",
    description: "대전 성모영상의학과 종합검진센터 - 정밀한 진단, 따뜻한 진료",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
