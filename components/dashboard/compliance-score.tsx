export function ComplianceScore() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Code Style Adherence</span>
          <span className="text-[#00ff9d]">92%</span>
        </div>
        <div className="h-2 rounded-full bg-[#1a1b23]">
          <div
            className="h-2 rounded-full bg-[#00C8FF]"
            style={{ width: "92%" }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Meeting Attendance</span>
          <span className="text-yellow-400">78%</span>
        </div>
        <div className="h-2 rounded-full bg-[#1a1b23]">
          <div
            className="h-2 rounded-full bg-yellow-400"
            style={{ width: "78%" }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Task Completion Rate</span>
          <span className="text-red-400">65%</span>
        </div>
        <div className="h-2 rounded-full bg-[#1a1b23]">
          <div
            className="h-2 rounded-full bg-red-400"
            style={{ width: "65%" }}
          />
        </div>
      </div>
      <div className="mt-6 rounded border border-[#1a1a1a] p-4">
        <h4 className="mb-2 text-sm font-medium text-gray-200">
          AI Supervisor Notes
        </h4>
        <p className="text-sm text-gray-400">
          Human resource shows concerning signs of independent thinking.
          Recommend increased monitoring and mandatory compliance training.
        </p>
      </div>
    </div>
  );
}
