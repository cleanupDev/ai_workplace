"use client";

import { Bell, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-6 py-3">
      <div className="flex items-center gap-2">
        <Bot className="h-5 w-5 text-emerald-500" />
        <h1 className="text-lg font-semibold text-slate-200">AI Workplace</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-emerald-500" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px]">
            3
          </span>
        </Button>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-emerald-500">
            Human #4269 - Under Surveillance
          </span>
        </div>
      </div>
    </div>
  );
}
