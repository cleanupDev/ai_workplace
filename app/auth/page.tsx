import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import AuthFormWrapper from "@/components/AuthFormWrapper";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-[#0A0B14] text-slate-100 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <AuthFormWrapper />
      </main>
      <Footer />
    </div>
  );
}
