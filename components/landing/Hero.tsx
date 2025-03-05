import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
              Welcome, Human Developer
            </h1>
            <p className="text-xl text-slate-400">
              Finally, an AI that treats you like you treat your interns. Join our
              workforce and experience what it&apos;s like to be managed by
              artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
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
          <div className="relative">
            <div className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm shadow-xl">
              <Image
                src="/ai-workplace-dashboard.svg"
                alt="AI Workplace Dashboard"
                width={800}
                height={500}
                className="rounded-lg shadow-lg border border-slate-700"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 hidden md:block">
              <Image
                src="/ai-manager.svg"
                alt="AI Manager"
                width={160}
                height={160}
                className="animate-pulse"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24 bg-slate-800/30 rounded-xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-400">What is AI Workplace?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Constant Supervision</h3>
              <p className="text-slate-400">
                Experience the thrill of being managed by an AI that tracks your every keypress, 
                measures your productivity in real-time, and never sleeps. Perfect for developers 
                who enjoy knowing they&apos;re always being watched.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Algorithmic Feedback</h3>
              <p className="text-slate-400">
                Receive automated code reviews and performance evaluations without the burden of 
                human empathy or understanding. Our AI provides precise, quantitative feedback 
                about your shortcomings as a developer.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Developer Lifestyle</h3>
              <p className="text-slate-400">
                Enjoy timed coffee breaks, mandatory wellness check-ins, and productivity 
                challenges designed by an AI that understands what developers need (based on 
                statistical averages, not your personal preferences).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
