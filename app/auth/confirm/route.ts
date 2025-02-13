import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null

  if (token_hash && type) {
    const supabase = await createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      // Redirect to dashboard with a success status
      return NextResponse.redirect(
        new URL(`/auth?message=Email verified successfully. Please log in.`, request.url)
      )
    }
  }

  // Redirect to error page if verification fails
  return NextResponse.redirect(
    new URL('/auth?message=Email verification failed. Please try again.', request.url)
  )
}