import { Module } from "module";
import "./globals.css";
import ModuleHeader from "@/app/_components/Header";
import ModuleFooter from "@/app/_components/Footer";

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
