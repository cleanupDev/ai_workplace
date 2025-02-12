"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 p-4 flex justify-between items-center bg-[#0A0B14]/90 backdrop-blur-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <Terminal className="w-6 h-6 text-emerald-500" />
        <span className="text-xl font-mono font-bold">AI Workplace</span>
        <span className="text-xs font-bold text-emerald-500 animate-pulse bg-blue-500/10 px-2 py-0.5 rounded-full">
          Coming soon...
        </span>
      </Link>
      <nav>
        {!pathname.startsWith("/auth") && (
          <>
            <Button variant="ghost" className="mr-2" asChild>
              <Link href="/auth?redirectTo=/dashboard">Login as Human Resource</Link>
            </Button>
            <Button
              variant="default"
              className="bg-emerald-500 hover:bg-emerald-600"
              asChild
            >
              <Link href="/auth?tab=signup">Apply for Position</Link>
            </Button>
          </>
        )}
      </nav>
    </header>
  );
}
