import { Bot } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-6 h-6 text-emerald-500" />
        <h1 className="text-xl font-semibold text-slate-200">AI Workplace</h1>
      </div>
      {/* Add other sidebar content here if needed */}
    </div>
  );
}
