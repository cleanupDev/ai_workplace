'use client'

import { useState } from 'react'
import { GitBranch, GitCommit, GitPullRequest } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function GitHubIntegration() {
  const [repoUrl, setRepoUrl] = useState('')
  const [commitMessage, setCommitMessage] = useState('')

  const handlePush = () => {
    // Implement push functionality here
    console.log('Pushing to GitHub:', commitMessage)
  }

  return (
    <Card className="bg-slate-900 border-slate-800 p-4">
      <h2 className="text-lg font-semibold text-slate-200 mb-4">GitHub Integration</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="repo-url" className="block text-sm font-medium text-slate-400 mb-1">Repository URL</label>
          <Input
            id="repo-url"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/username/repo"
            className="bg-slate-800 border-slate-700 text-slate-200"
          />
        </div>
        <div>
          <label htmlFor="commit-message" className="block text-sm font-medium text-slate-400 mb-1">Commit Message</label>
          <Input
            id="commit-message"
            value={commitMessage}
            onChange={(e) => setCommitMessage(e.target.value)}
            placeholder="Update dashboard layout"
            className="bg-slate-800 border-slate-700 text-slate-200"
          />
        </div>
        <Button onClick={handlePush} className="w-full bg-emerald-600 hover:bg-emerald-700">
          <GitCommit className="w-4 h-4 mr-2" />
          Push Changes
        </Button>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-slate-400">
          <GitBranch className="w-4 h-4 mr-2" />
          Current Branch: main
        </div>
        <div className="flex items-center text-sm text-slate-400">
          <GitPullRequest className="w-4 h-4 mr-2" />
          Open PRs: 2
        </div>
      </div>
    </Card>
  )
}

