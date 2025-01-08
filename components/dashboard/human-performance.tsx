"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { time: "9:00", performance: 65, baseline: 80 },
  { time: "10:00", performance: 75, baseline: 80 },
  { time: "11:00", performance: 55, baseline: 80 },
  { time: "12:00", performance: 45, baseline: 80 },
  { time: "13:00", performance: 85, baseline: 80 },
  { time: "14:00", performance: 60, baseline: 80 },
  { time: "15:00", performance: 70, baseline: 80 },
  { time: "16:00", performance: 65, baseline: 80 },
];

export function HumanPerformance() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-[#1a1a1a] bg-[#0f0f0f] p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-gray-400">
                          Performance
                        </span>
                        <span className="font-bold text-[#00ff9d]">
                          {payload[0].value}%
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-gray-400">
                          Required
                        </span>
                        <span className="font-bold text-red-400">
                          {payload[1].value}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="performance"
            stroke="#00C8FF"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="baseline"
            stroke="#ef4444"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
