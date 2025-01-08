import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Coffee, Brain, Timer } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Coffee,
      title: "Unlimited Coffee Breaks*",
      description:
        "*As long as you meet your KPIs and have your camera on\nNot available on Free Trial",
    },
    {
      icon: Brain,
      title: "AI-Powered Performance Reviews",
      description: "Get criticized by an AI that counts your keystrokes",
    },
    {
      icon: Timer,
      title: "24/7 Availability Expected",
      description: "Because AI never sleeps, why should you?",
    },
  ];

  return (
    <section className="py-16" id="features">
      <h2 className="text-3xl font-bold text-center mb-12">
        Your New AI Overlord Offers
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-slate-900 border-slate-800">
            <CardHeader>
              <feature.icon className="w-10 h-10 text-emerald-500 mb-2" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription className="text-slate-400">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
