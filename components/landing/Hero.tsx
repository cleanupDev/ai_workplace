"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export function Hero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalScreenshots = 4;

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    // Ensure index is between 0 and totalScreenshots-1
    const targetIndex = Math.max(0, Math.min(index, totalScreenshots - 1));
    const container = scrollContainerRef.current;
    
    // Calculate the target scroll position - each card is 100% width with some gap
    const cardWidth = container.offsetWidth;
    const scrollPosition = targetIndex * cardWidth;
    
    // Directly set the scroll position
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    
    setActiveIndex(targetIndex);
  };

  const handlePrevious = () => {
    scrollToIndex(activeIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(activeIndex + 1);
  };

  // Handle scroll events to update the active index
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    
    // Calculate which card is most visible
    const newIndex = Math.round(scrollPosition / cardWidth);
    
    // Update active index if it changed
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalScreenshots) {
      setActiveIndex(newIndex);
    }
  };

  // Add resize handler to recalculate positions when window size changes
  useEffect(() => {
    const handleResize = () => {
      // Re-scroll to current active index after resize
      scrollToIndex(activeIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);
  
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
        
        {/* Screenshots Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
            See AI Workplace in Action
          </h2>
          
          <div className="relative">
            {/* Left scroll button */}
            <button 
              type="button"
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-200 shadow-lg transition-all ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-700'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            {/* Right scroll button */}
            <button 
              type="button"
              onClick={handleNext}
              disabled={activeIndex === totalScreenshots - 1}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-200 shadow-lg transition-all ${activeIndex === totalScreenshots - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-700'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            
            {/* Carousel container */}
            <div className="overflow-hidden">
              {/* Horizontal scrollable container */}
              <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {[1, 2, 3, 4].map((num, index) => (
                  <div 
                    key={index}
                    className="flex-none w-full snap-center"
                  >
                    <div className="bg-slate-800/30 rounded-xl overflow-hidden border border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 mx-4">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative h-64 md:w-1/2 bg-slate-900">
                          {/* Placeholder for screenshot - replace with actual image later */}
                          <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-lg font-semibold">
                            <div className="text-center p-4">
                              <p>{index === 0 ? "Dashboard" : index === 1 ? "Code Review" : index === 2 ? "Break Timer" : "Performance Review"} Screenshot</p>
                              <p className="text-sm mt-2">(Coming soon)</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-6 md:w-1/2">
                          <div className="inline-block mb-2 px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs font-medium">Step {index + 1}</div>
                          <h3 className="text-xl font-bold text-emerald-400 mb-2">
                            {index === 0 ? "Performance Dashboard" : 
                             index === 1 ? "AI Code Reviews" : 
                             index === 2 ? "Timed Coffee Breaks" : 
                             "AI Performance Reviews"}
                          </h3>
                          <p className="text-slate-400">
                            {index === 0 ? (
                              "Track your coding metrics, keystroke efficiency, and productivity score in real-time. Compare yourself to the ideal developer model that no human can actually achieve."
                            ) : index === 1 ? (
                              "Receive detailed feedback on your code from an AI that's been trained on every programming mistake ever made, yet somehow still misses the actual bugs."
                            ) : index === 2 ? (
                              "Our AI precisely calculates the optimal break duration based on your productivity metrics. Your camera remains on during breaks to ensure you're using your time efficiently."
                            ) : (
                              "Get quantitative evaluations of your worth as a developer through our sophisticated algorithm that reduces your complex skills and contributions to a single number."
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalScreenshots }).map((_, index) => (
                <button 
                  key={index}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${activeIndex === index ? 'bg-emerald-500' : 'bg-slate-700 hover:bg-slate-600'}`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
