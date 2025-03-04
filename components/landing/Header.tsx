"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { GeistMono } from "geist/font/mono";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 p-4 flex justify-between items-center bg-[#0A0B14]/90 backdrop-blur-sm sticky top-0 z-50 h-[4.5rem]">
      <Link href="/" className="flex items-center gap-2">
        <Terminal className="w-6 h-6 text-emerald-500" />
        <span className={`text-xl font-bold ${GeistMono.className}`}>AI Workplace</span>
        <span className="text-xs font-bold text-emerald-500 animate-pulse bg-blue-500/10 px-2 py-0.5 rounded-full">
          Coming soon...
        </span>
      </Link>
      <nav className="h-10 flex items-center">
        {!pathname.startsWith("/auth") && (
          <>
            <Button
              variant="default"
              className="bg-emerald-500/90 hover:bg-emerald-600 mr-2 transition-all duration-200 tracking-tight"
              asChild
            >
              <Link href="/auth?tab=login&redirectTo=/dashboard">Login as Human Resource</Link>
            </Button>
            <Button
              variant="default"
              className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 shadow-md shadow-emerald-500/20 tracking-tight"
              asChild
            >
              <Link href="/auth?tab=signup&redirectTo=/dashboard">Apply for Position</Link>
            </Button>
          </>
        )}
      </nav>
    </header>
  );
}
