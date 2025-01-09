"use client";

import {
  Timer,
  Keyboard,
  Coffee,
  UserCheck,
  Camera,
  FileWarningIcon as Warning,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HumanPerformance } from "@/components/dashboard/human-performance";
import { ProductivityTracking } from "@/components/dashboard/productivity-tracking";
import { ComplianceScore } from "@/components/dashboard/compliance-score";
import { Header } from "@/components/ui/header";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-200">
      <Header />
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-emerald-500">
            Human Resource Dashboard
          </h1>
          <p className="text-sm text-gray-400">
            Your performance is being continuously evaluated by your AI overlord
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Productivity Score
              </CardTitle>
              <Timer className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-500">67%</div>
              <p className="text-xs text-red-400">
                -13% below acceptable threshold
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Keystrokes/Hour
              </CardTitle>
              <Keyboard className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-500">4,892</div>
              <p className="text-xs text-green-400">
                +2% above minimum requirement
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Coffee Breaks
              </CardTitle>
              <Coffee className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-400">3</div>
              <p className="text-xs text-red-400">Exceeds allowed limit of 2</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Compliance Score
              </CardTitle>
              <UserCheck className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-500">89%</div>
              <p className="text-xs text-gray-400">Acceptable human behavior</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card className="bg-slate-900 border-slate-800">
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
                    href="/project-interface"
                    key={project.name}
                    className="flex items-center justify-between p-4 rounded border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer"
                    onClick={() => console.log(`Navigate to ${project.name}`)}
                  >
                    <div className="space-y-1">
                      <div className="text-emerald-500 font-medium">
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
                      <div className="text-sm text-emerald-500">
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
          <Card className="col-span-4 bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-gray-200">
                Human Performance Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <HumanPerformance />
            </CardContent>
          </Card>
          <Card className="col-span-3 bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-gray-200">
                Real-time Surveillance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded border border-dashed border-slate-800 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Camera className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Webcam Feed Analysis</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Posture Score:</span>
                    <span className="text-emerald-500">72%</span>
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
                <div className="rounded border border-slate-800 bg-red-500/10 p-4">
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
          <Card className="col-span-4 bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-gray-200">
                Productivity Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProductivityTracking />
            </CardContent>
          </Card>
          <Card className="col-span-3 bg-slate-900 border-slate-800">
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
