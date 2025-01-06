import { Bot } from "lucide-react";

export default function Communication() {
  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-start">
        <Bot className="w-5 h-5 mt-1 text-emerald-500" />
        <p className="text-slate-300 text-sm">
          How&apos;s the progress on the dashboard layout?
        </p>
      </div>
      <div className="flex gap-2 items-start">
        <div className="w-5 h-5 mt-1 rounded-full bg-slate-700" />
        <p className="text-slate-300 text-sm">
          I&apos;ve completed the desktop layout, working on mobile
          responsiveness now.
        </p>
      </div>
      <div className="flex gap-2 items-start">
        <Bot className="w-5 h-5 mt-1 text-emerald-500" />
        <p className="text-slate-300 text-sm">
          I see you&apos;ve pushed some changes to the repository. Great work!
          I&apos;ll review your code shortly.
        </p>
      </div>
      <div className="flex gap-2 items-start">
        <div className="w-5 h-5 mt-1 rounded-full bg-slate-700" />
        <p className="text-slate-300 text-sm">
          Thanks! I&apos;ve implemented the responsive grid layout as requested.
          Let me know if you need any changes.
        </p>
      </div>
      <div className="flex gap-2 items-start">
        <Bot className="w-5 h-5 mt-1 text-emerald-500" />
        <p className="text-slate-300 text-sm">
          I&apos;ve reviewed your changes. The implementation looks good, but we
          need to adjust the breakpoints for better mobile responsiveness. Can
          you update the md and lg breakpoints?
        </p>
      </div>
    </div>
  );
}
