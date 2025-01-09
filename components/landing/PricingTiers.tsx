import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function PricingTiers() {
  const tiers = [
    {
      name: "Free Trial",
      price: "$0",
      description: "Experience AI micromanagement",
      features: [
        "Take-Home assignments",
        "Entry-level criticism",
        "Limited coffee breaks",
        "Automated performance anxiety",
      ],
    },
    {
      name: "Intern",
      price: "$49.99",
      description: "Pay to work as an intern",
      features: [
        "Basic task assignments",
        "AI criticism (limited)",
        "Weekend work opportunities",
        "Virtual water cooler access",
      ],
    },
    {
      name: "Developer",
      price: "$99.99",
      description: "Premium work experience",
      features: [
        "Priority task assignments",
        "Advanced AI criticism",
        "Holiday work opportunities",
        "24/7 performance monitoring",
      ],
    },
    {
      name: "Senior",
      price: "$199.99",
      description: "Elite exploitation package",
      features: [
        "Legacy code maintenance",
        "Unlimited AI criticism",
        "Mandatory overtime",
        "Real-time productivity tracking",
      ],
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Subscription Tiers
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tiers.map((tier) => (
          <Card key={tier.name} className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-2xl  text-emerald-500 mb-2">
                {tier.name}
              </CardTitle>
              <CardDescription className="text-slate-400">
                {tier.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-500 mb-4">
                {tier.price}
                <span className="text-lg text-slate-400">/month</span>
              </div>
              <ul className="space-y-2 text-slate-400">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-emerald-500 hover:bg-emerald-600"
                disabled={tier.price !== "$0"}
              >
                {tier.price === "$0" ? "Start Trial" : "Not available"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
