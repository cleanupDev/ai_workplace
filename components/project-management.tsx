"use client";

import { useState } from "react";
import { Send, Bot, User, Users, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SprintGoals from "./sprint-goals";
import CurrentTask from "./current-task";
import TechLeadChat from "./tech-lead-chat";
import ProductOwnerChat from "./product-owner-chat";
import StakeholderChat from "./stakeholder-chat";
import TaskList from "./task-list";

type ChatType = "tech-lead" | "product-owner" | "stakeholder" | "tasks";

interface ProjectManagementProps {
  activeChat: ChatType;
  setActiveChat: (chat: ChatType) => void;
}

export default function ProjectManagement({
  activeChat,
  setActiveChat,
}: ProjectManagementProps) {
  const [notifications, setNotifications] = useState({
    "tech-lead": 0,
    "product-owner": 0,
    stakeholder: 0,
    tasks: 0,
  });

  const handleTabClick = (value: ChatType) => {
    setActiveChat(value);
    setNotifications((prev) => ({ ...prev, [value]: 0 }));
  };

  return (
    <div className="w-1/2 border-r border-slate-800 p-4 flex flex-col h-full">
      <ScrollArea className="flex-1 pr-4 mb-4">
        <div className="space-y-4">
          <SprintGoals />
          <CurrentTask />
          {activeChat === "tech-lead" && <TechLeadChat />}
          {activeChat === "product-owner" && <ProductOwnerChat />}
          {activeChat === "stakeholder" && <StakeholderChat />}
          {activeChat === "tasks" && <TaskList />}
        </div>
      </ScrollArea>

      <div className="mt-auto">
        <div className="flex gap-2 mb-4">
          <Textarea
            placeholder="Update your progress or ask questions..."
            className="bg-slate-900 border-slate-800 resize-none"
          />
          <Button size="icon" className="bg-emerald-600 hover:bg-emerald-700">
            <Send className="w-4 h-4" />
          </Button>
        </div>

        <Tabs
          value={activeChat}
          onValueChange={(value) => handleTabClick(value as ChatType)}
        >
          <TabsList className="w-full justify-start bg-slate-900 p-0">
            <TabsTrigger
              value="tech-lead"
              className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-slate-800 relative"
            >
              <Bot className="w-4 h-4" />
              Tech Lead
              {notifications["tech-lead"] > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 bg-emerald-500 text-slate-900 rounded-full text-xs">
                  {notifications["tech-lead"]}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="product-owner"
              className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-slate-800 relative"
            >
              <User className="w-4 h-4" />
              Product Owner
              {notifications["product-owner"] > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 bg-emerald-500 text-slate-900 rounded-full text-xs">
                  {notifications["product-owner"]}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="stakeholder"
              className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-slate-800 relative"
            >
              <Users className="w-4 h-4" />
              Stakeholder
              {notifications["stakeholder"] > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 bg-emerald-500 text-slate-900 rounded-full text-xs">
                  {notifications["stakeholder"]}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="tasks"
              className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-slate-800 relative"
            >
              <CheckSquare className="w-4 h-4" />
              Tasks
              {notifications["tasks"] > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 bg-emerald-500 text-slate-900 rounded-full text-xs">
                  {notifications["tasks"]}
                </span>
              )}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
