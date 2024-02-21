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
    "Wasi is a seasoned Fullstack Engineer, excels in diverse tech stacks and containerization. His expertise enables him to create robust, scalable systems and his proficiency in cloud technologies leads to unparalleled digital solutions. His tech prowess and creativity ignite innovation. Curious about his skillset?",
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
