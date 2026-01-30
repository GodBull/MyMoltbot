import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "蓝宝的数字空间",
  description: "小牛先生和蓝宝一起打造的现代化数字体验，基于 Next.js + TypeScript + Tailwind CSS 的技术杰作",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "React", "现代化网站"],
  authors: [{ name: "小牛先生和蓝宝" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
