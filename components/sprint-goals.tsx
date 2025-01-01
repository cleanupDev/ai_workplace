import { Card } from "@/components/ui/card"

export default function SprintGoals() {
  return (
    <Card className="bg-slate-900 border-slate-800 p-4">
      <h2 className="text-sm font-medium text-slate-400 mb-2">Current Sprint Goals</h2>
      <ul className="space-y-2">
        <li className="text-slate-200">✓ Set up authentication system</li>
        <li className="text-slate-200">→ Implement user dashboard</li>
        <li className="text-slate-200 opacity-50">Create API endpoints</li>
      </ul>
    </Card>
  )
}

