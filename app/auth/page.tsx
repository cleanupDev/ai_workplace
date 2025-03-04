"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { createClient } from "@/utils/supabase/client";
import { toast, Toaster } from "sonner";
import { AuthError } from "@supabase/supabase-js";

function AuthContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupEmail, setSignupEmail] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(useSearchParams().get('tab') || 'login');
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setLoginError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      router.refresh();
      const redirectTo = searchParams.get('redirectTo') || '/dashboard';
      router.push(redirectTo);
      toast.success("Successfully logged in!");
    } catch (error) {
      if (error instanceof AuthError) {
        setLoginError(error.message);
        toast.error(error.message);
      } else {
        setLoginError("An unexpected error occurred. Please try again.");
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Signup is disabled in development mode
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    
    // For demo purposes, show the success screen
    setSignupEmail(email);
    setSignupSuccess(true);
    toast.info("New account registration is disabled in development mode");
  };

  const handleOAuthSignIn = async (provider: 'github' | 'google') => {
    try {
      const redirectTo = searchParams.get('redirectTo') || '/dashboard';
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${location.origin}/auth/callback?redirectTo=${encodeURIComponent(redirectTo)}`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof AuthError) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <main className="flex-grow flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-900 border-slate-800">
        {/* Development Banner */}
        <div className="bg-amber-500/20 border-y border-amber-500/30 px-4 py-3 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-bold text-amber-400">Development Mode</span>
          </div>
          <p className="text-sm text-amber-200">
            New user registration is disabled during development.
            <br />Existing users can still log in.
          </p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 p-1">
            <TabsTrigger 
              value="login" 
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-emerald-400 text-slate-400 hover:text-slate-100 data-[state=active]:shadow-none"
            >
              Login
            </TabsTrigger>
            <TabsTrigger 
              value="signup"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-emerald-400 text-slate-400 hover:text-slate-100 data-[state=active]:shadow-none"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleLogin}>
              <CardHeader>
                <CardTitle className="text-emerald-400 text-2xl font-bold mb-2">
                  Welcome back, human resource
                </CardTitle>
                <CardDescription className="text-slate-300 text-base">
                  Enter your credentials to access your AI workplace
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {loginError && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                    <p className="text-sm font-medium">{loginError}</p>
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <span className="text-emerald-500">Email</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="human@example.com"
                    required
                    className="border-slate-700 bg-slate-800/50 text-slate-100 placeholder:text-slate-400 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">
                    <span className="text-emerald-500">Password</span>
                  </Label>
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required 
                    className="border-slate-700 bg-slate-800/50 text-slate-100 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-slate-700" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-slate-900 px-2 text-slate-300">Or continue with</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-slate-500 text-slate-100 flex items-center justify-center gap-2"
                      onClick={() => handleOAuthSignIn('github')}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-slate-500 text-slate-100 flex items-center justify-center gap-2"
                      onClick={() => handleOAuthSignIn('google')}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Google
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-emerald-500 hover:bg-emerald-600"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Log in"}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            {signupSuccess ? (
              <div className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 mb-4">
                    <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-400">Check your email</h3>
                  <p className="text-slate-300">
                    We&apos;ve sent a verification link to:
                  </p>
                  <p className="font-medium text-emerald-400">{signupEmail}</p>
                  <p className="text-slate-300 mt-4">
                    Please check your email and click the verification link to complete your registration.
                  </p>
                </div>
                <div className="pt-4">
                  <Button
                    className="w-full bg-slate-700 hover:bg-slate-600 text-slate-100"
                    onClick={() => {
                      setSignupSuccess(false);
                      setActiveTab('login');
                    }}
                  >
                    Back to Login
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSignUp}>
                <CardHeader>
                  <CardTitle className="text-emerald-400 text-2xl font-bold mb-2">
                    Join the AI workforce
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-base">
                    Create your account to start your AI-managed career
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      <span className="text-emerald-500">Full Name</span>
                    </Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      className="border-slate-700 bg-slate-800/50 text-slate-100 placeholder:text-slate-400 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <span className="text-emerald-500">Email</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="human@example.com"
                      required
                      className="border-slate-700 bg-slate-800/50 text-slate-100 placeholder:text-slate-400 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">
                      <span className="text-emerald-500">Password</span>
                    </Label>
                    <Input 
                      id="password" 
                      name="password" 
                      type="password" 
                      required 
                      className="border-slate-700 bg-slate-800/50 text-slate-100 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">
                      <span className="text-emerald-500">Confirm Password</span>
                    </Label>
                    <Input 
                      id="confirm-password" 
                      name="confirm-password" 
                      type="password" 
                      required 
                      className="border-slate-700 bg-slate-800/50 text-slate-100 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-700" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-slate-900 px-2 text-slate-300">Or continue with</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-slate-500 text-slate-100 flex items-center justify-center gap-2"
                        onClick={() => handleOAuthSignIn('github')}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-slate-500 text-slate-100 flex items-center justify-center gap-2"
                        onClick={() => handleOAuthSignIn('google')}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-emerald-500 hover:bg-emerald-600 opacity-75"
                    type="submit"
                    disabled={true}
                  >
                    Sign Up Disabled
                  </Button>
                </CardFooter>
              </form>
            )}
          </TabsContent>
        </Tabs>
      </Card>
    </main>
  );
}

export default function AuthPage() {
  return (
    <div className="min-h-screen text-slate-100 flex flex-col">
      <Toaster 
        theme="dark" 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgb(15 23 42)',
            border: '1px solid rgb(51 65 85)',
            color: 'rgb(226 232 240)'
          },
          className: 'text-sm',
        }}
      />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AuthContent />
      </Suspense>
      <Footer />
    </div>
  );
}
