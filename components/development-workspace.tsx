'use client'

import { Code2, FileCode2, GitBranch, MessageSquare } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeEditor from './code-editor'
import TaskList from './task-list'
import GitHubIntegration from './github-integration'

export default function DevelopmentWorkspace() {
  return (
    <div className="w-1/2 p-4 flex flex-col h-full">
      <Tabs defaultValue="code" className="flex-1">
        <TabsList className="bg-slate-900">
          <TabsTrigger value="code" className="data-[state=active]:bg-slate-800">
            <Code2 className="w-4 h-4 mr-2" />
            Code
          </TabsTrigger>
          <TabsTrigger value="tasks" className="data-[state=active]:bg-slate-800">
            <FileCode2 className="w-4 h-4 mr-2" />
            Tasks
          </TabsTrigger>
          <TabsTrigger value="github" className="data-[state=active]:bg-slate-800">
            <GitBranch className="w-4 h-4 mr-2" />
            GitHub
          </TabsTrigger>
          <TabsTrigger value="chat" className="data-[state=active]:bg-slate-800">
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat
          </TabsTrigger>
        </TabsList>

        <TabsContent value="code" className="flex-1 mt-4 overflow-auto">
          <CodeEditor />
        </TabsContent>

        <TabsContent value="tasks" className="mt-4 overflow-auto">
          <TaskList />
        </TabsContent>

        <TabsContent value="github" className="mt-4 overflow-auto">
          <GitHubIntegration />
        </TabsContent>

        <TabsContent value="chat" className="mt-4 overflow-auto">
          {/* Add chat content here if needed */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

