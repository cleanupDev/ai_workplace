import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AnimatedBackground } from "@/components/ui/animated-background";

export const metadata: Metadata = {
  title: "AI Workplace",
  description: "Welcome to the future of work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${GeistSans.className} bg-[#0A0B14] min-h-full`}>
        <AnimatedBackground />
        <div className="relative">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
