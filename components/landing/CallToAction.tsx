import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="py-16 text-center">
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">Ready to Submit to AI Authority?</h2>
        <p className="text-slate-400">
          Join thousands of developers who have already surrendered their
          work-life balance to the machine.
        </p>
        <Button
          size="lg"
          className="bg-emerald-500 hover:bg-emerald-600"
          asChild
        >
          <Link href="#pricing">Begin Your Service</Link>
        </Button>
      </div>
    </section>
  );
}
