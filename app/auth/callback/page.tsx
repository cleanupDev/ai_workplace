'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'

export default function AuthCallback() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    async function handleCallback() {
      const { data, error } = await supabase.auth.exchangeCodeForSession()

      if (error) {
        toast.error("Error confirming email. Please try again.")
        router.push('/auth') // Redirect to login/signup
        return;
      }

      if (data) {
          toast.success("Email confirmed successfully! You are now logged in.")
          router.refresh()
          router.push('/dashboard') // Or wherever you want to send them
      }

    }

    handleCallback()
  }, [router, supabase])

  return (
    <div>
      <h1>Confirming your email...</h1>
      {/* You could add a loading spinner or other UI here */}
    </div>
  )
} 