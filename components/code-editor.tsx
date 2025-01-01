import { Card } from "@/components/ui/card"

export default function CodeEditor() {
  return (
    <Card className="bg-slate-900 border-slate-800 h-full p-4">
      <pre className="text-sm text-slate-300">
        <code>{`// dashboard-grid.tsx
export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Add your grid items here */}
    </div>
  )
}`}</code>
      </pre>
    </Card>
  )
}

