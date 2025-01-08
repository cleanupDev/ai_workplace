"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    task: "Code Review",
    completed: 23,
    required: 30,
  },
  {
    task: "Documentation",
    completed: 14,
    required: 20,
  },
  {
    task: "Bug Fixes",
    completed: 38,
    required: 35,
  },
  {
    task: "Meetings",
    completed: 7,
    required: 5,
  },
  {
    task: "Features",
    completed: 16,
    required: 25,
  },
];

export function ProductivityTracking() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="task"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Bar dataKey="completed" fill="#00C8FF" radius={[4, 4, 0, 0]} />
          <Bar dataKey="required" fill="#ef4444" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
