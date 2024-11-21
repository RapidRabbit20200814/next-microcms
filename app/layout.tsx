import "./globals.css";

import type { Metadata } from "next";
import ModuleHeader from "@/app/_components/Header";
import ModuleFooter from "@/app/_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://next-microcms-mauve.vercel.app/"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description: "「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description: "「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://next-microcms-mauve.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ModuleHeader />
        {children}
        <ModuleFooter />
      </body>
    </html>
  );
}
