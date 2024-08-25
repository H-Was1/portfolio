import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
const myFont = localFont({
  src: "./fonts/AnekLatin-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Hammad Wasi",
  description:
    "As a seasoned Full-Stack Developer, I have a passion for creating exceptional applications. I specialize in React and Next.js, engineering high-quality solutions that enhance user experiences. My versatile skill set includes Docker, AWS, and Kubernetes. I'm eager to join your team and bring my skills and creativity to your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
//
