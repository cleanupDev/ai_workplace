import { Card } from "@/components/ui/card";

export default function CurrentTask() {
  return (
    <Card className="bg-slate-900 border-slate-800 p-4">
      <h2 className="text-sm font-medium text-emerald-500 mb-2">
        Current Task
      </h2>
      <p className="text-slate-200 mb-3">
        Implement responsive dashboard layout and start user onboarding flow
        design
      </p>
      <div className="space-y-2 text-sm text-slate-400">
        <p>• Finish mobile responsiveness for dashboard</p>
        <p>• Create mockup for 3-step onboarding process</p>
        <p>• Research gamification elements for potential integration</p>
        <p>• Update project timeline to include new requirements</p>
        <p>
          • Schedule meeting with stakeholders to clarify &quot;flashy
          animations&quot; request
        </p>
      </div>
    </Card>
  );
}
