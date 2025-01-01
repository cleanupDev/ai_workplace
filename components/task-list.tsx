import { CheckCircle2, Circle } from 'lucide-react'

const tasks = [
  { id: 1, title: 'Implement responsive dashboard layout', completed: true },
  { id: 2, title: 'Create mockup for 3-step onboarding process', completed: false },
  { id: 3, title: 'Research gamification elements', completed: false },
  { id: 4, title: 'Update project timeline', completed: false },
  { id: 5, title: 'Schedule meeting with stakeholders', completed: false },
]

export default function TaskList() {
  return (
    <div className="space-y-3 mt-4">
      <h2 className="text-lg font-semibold text-slate-200 mb-2">Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-2">
            {task.completed ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            ) : (
              <Circle className="w-5 h-5 text-slate-500" />
            )}
            <span className={`text-sm ${task.completed ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

