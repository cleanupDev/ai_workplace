"use client";

import { useState } from "react";
import ProjectManagement from "@/components/project-management";
import DevelopmentWorkspace from "@/components/development-workspace";
import { Header } from "@/components/ui/header";

type ChatType = "tech-lead" | "product-owner" | "stakeholder" | "tasks";

export default function Workspace() {
  const [activeChat, setActiveChat] = useState<ChatType>("tech-lead");

  return (
    <div className="flex flex-col h-screen bg-slate-950">
      <Header />

      {/* <header className="flex items-center gap-2 p-2 bg-slate-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-emerald-500"
        >
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
        <h1 className="text-lg font-semibold text-slate-200">AI Workplace</h1>
      </header> */}
      <div className="flex flex-1 overflow-hidden">
        <ProjectManagement
          activeChat={activeChat}
          setActiveChat={setActiveChat}
        />
        <DevelopmentWorkspace />
      </div>
    </div>
  );
}
