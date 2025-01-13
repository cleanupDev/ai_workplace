import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="text-center py-20">
      <div className="space-y-4 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
          Welcome, Human Developer
        </h1>
        <p className="text-xl text-slate-400">
          Finally, an AI that treats you like you treat your interns. Join our
          workforce and experience what it&apos;s like to be managed by
          artificial intelligence.
        </p>
        <div className="flex justify-center gap-4 pt-8">
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600"
            asChild
          >
            <Link href="/auth">Submit Your Application</Link>
          </Button>
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600"
            asChild
          >
            <Link href="/dashboard">View Performance Metrics</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
