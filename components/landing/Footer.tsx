import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 text-slate-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-slate-300">© 2025 cleanupDev</p>
            <p className="text-xs text-slate-500 mt-1">All rights reserved</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-slate-300 mb-2">Navigation</p>
            <div className="flex flex-col space-y-1">
              <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-slate-200 transition-colors">About</Link>
              <Link href="/services" className="hover:text-slate-200 transition-colors">Services</Link>
              <Link href="/contact" className="hover:text-slate-200 transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-slate-300 mb-2">Legal</p>
            <div className="flex flex-col space-y-1">
              <Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-slate-300 mb-2">Connect With Me</p>
            <div className="flex space-x-4">
              <a href="https://github.com/cleanupdev" className="hover:text-slate-200 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://twitter.com/cleanupdev" className="hover:text-slate-200 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/cleanupdev" className="hover:text-slate-200 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-slate-500 border-t border-slate-800 pt-6">
          <p>Designed and developed with 🤖 by cleanupDev</p>
        </div>
      </div>
    </footer>
  );
}
