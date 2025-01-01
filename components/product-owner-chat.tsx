'use client'

import { useState, useEffect } from 'react'
import { User } from 'lucide-react'

export default function ProductOwnerChat() {
  const [messages, setMessages] = useState([
    { sender: 'ai', content: "We need to prioritize the user onboarding flow. Can you estimate how long it would take to implement?" },
    { sender: 'user', content: "Based on the current design, I'd estimate about 3-4 days for a basic implementation. Do we have any specific requirements for the onboarding process?" },
    { sender: 'ai', content: "We want to keep it simple for now. Let's aim for a 3-step process: account creation, profile setup, and feature tour. Can you create a quick mockup for this?" },
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        content: "Hey, just wanted to check if you've started on that onboarding flow mockup. The stakeholders are eager to see it." 
      }])
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-3 mt-4">
      <h2 className="text-lg font-semibold text-slate-200 mb-2">Product Owner Chat</h2>
      {messages.map((message, index) => (
        <div key={index} className="flex gap-2 items-start">
          {message.sender === 'ai' ? (
            <User className="w-5 h-5 mt-1 text-blue-500 flex-shrink-0" />
          ) : (
            <div className="w-5 h-5 mt-1 rounded-full bg-slate-700 flex-shrink-0" />
          )}
          <p className="text-slate-300 text-sm">{message.content}</p>
        </div>
      ))}
    </div>
  )
}

