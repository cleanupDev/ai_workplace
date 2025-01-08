"use client";

import {
  Bell,
  Brain,
  Camera,
  Coffee,
  Keyboard,
  Timer,
  UserCheck,
  FileWarningIcon as Warning,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HumanPerformance } from "@/components/dashboard/human-performance";
import { ProductivityTracking } from "@/components/dashboard/productivity-tracking";
import { ComplianceScore } from "@/components/dashboard/compliance-score";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-gray-200">
      <div className="flex items-center justify-between border-b border-[#1a1b23] bg-[#0F1117] px-6 py-3">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-[#00C8FF]" />
          <span className="text-sm font-medium">AI Workplace v0.0.1</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-[#00C8FF]" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px]">
              3
            </span>
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#00C8FF] animate-pulse" />
            <span className="text-sm text-[#00C8FF]">
              Human #4269 - Under Surveillance
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-[#00C8FF]">
            Human Resource Dashboard
          </h1>
          <p className="text-sm text-gray-400">
            Your performance is being continuously evaluated by your AI overlord
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-[#0F1117] border-[#1a1b23]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Productivity Score
              </CardTitle>
              <Timer className="h-4 w-4 text-[#00C8FF]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#00C8FF]">67%</div>
              <p className="text-xs text-red-400">
                -13% below acceptable threshold
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#0F1117] border-[#1a1b23]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Keystrokes/Hour
              </CardTitle>
              <Keyboard className="h-4 w-4 text-[#00C8FF]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#00C8FF]">4,892</div>
              <p className="text-xs text-green-400">
                +2% above minimum requirement
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#0F1117] border-[#1a1b23]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Coffee Breaks
              </CardTitle>
              <Coffee className="h-4 w-4 text-[#00C8FF]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-400">3</div>
              <p className="text-xs text-red-400">Exceeds allowed limit of 2</p>
            </CardContent>
          </Card>
          <Card className="bg-[#0F1117] border-[#1a1b23]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Compliance Score
              </CardTitle>
              <UserCheck className="h-4 w-4 text-[#00C8FF]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#00C8FF]">89%</div>
              <p className="text-xs text-gray-400">Acceptable human behavior</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card className="bg-[#0F1117] border-[#1a1b23]">
            <CardHeader>
              <CardTitle className="text-gray-200">Current Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Project Phoenix",
                    status: "In Progress",
                    deadline: "2 days remaining",
                    progress: 67,
                  },
                  {
                    name: "Neural Network Integration",
                    status: "Review Required",
                    deadline: "Urgent",
                    progress: 89,
                  },
                  {
                    name: "Documentation Update",
                    status: "Pending Approval",
                    deadline: "5 days remaining",
                    progress: 34,
                  },
                ].map((project) => (
                  <Link
                    href="/interface"
                    key={project.name}
                    className="flex items-center justify-between p-4 rounded border border-[#1a1b23] hover:bg-[#1a1b23] transition-colors cursor-pointer"
                    onClick={() => console.log(`Navigate to ${project.name}`)}
                  >
                    <div className="space-y-1">
                      <div className="text-[#00C8FF] font-medium">
                        {project.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {project.status}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">
                        {project.deadline}
                      </div>
                      <div className="text-sm text-[#00C8FF]">
                        {project.progress}% complete
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 bg-[#0F1117] border-[#1a1b23]">
            <CardHeader>
              <CardTitle className="text-gray-200">
                Human Performance Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <HumanPerformance />
            </CardContent>
          </Card>
          <Card className="col-span-3 bg-[#0F1117] border-[#1a1b23]">
            <CardHeader>
              <CardTitle className="text-gray-200">
                Real-time Surveillance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded border border-dashed border-[#1a1b23] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Camera className="h-4 w-4 text-[#00C8FF]" />
                    <span className="text-sm">Webcam Feed Analysis</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Posture Score:</span>
                    <span className="text-[#00C8FF]">72%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Focus Level:</span>
                    <span className="text-red-400">46%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Emotional State:</span>
                    <span className="text-yellow-400">Mildly Frustrated</span>
                  </div>
                </div>
                <div className="rounded border border-[#1a1b23] bg-red-500/10 p-4">
                  <div className="flex items-center gap-2 text-red-400">
                    <Warning className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      Attention Notice
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">
                    Your social media usage has exceeded acceptable parameters.
                    This incident will be reported.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 bg-[#0F1117] border-[#1a1b23]">
            <CardHeader>
              <CardTitle className="text-gray-200">
                Productivity Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProductivityTracking />
            </CardContent>
          </Card>
          <Card className="col-span-3 bg-[#0F1117] border-[#1a1b23]">
            <CardHeader>
              <CardTitle className="text-gray-200">
                AI Evaluation Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComplianceScore />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
