'use client'

import { useState, useEffect } from 'react'
import { Bot } from 'lucide-react'

export default function TechLeadChat() {
  const [messages, setMessages] = useState([
    { sender: 'ai', content: "How's the progress on the dashboard layout?" },
    { sender: 'user', content: "I've completed the desktop layout, working on mobile responsiveness now." },
    { sender: 'ai', content: "Great progress! Make sure to test on various device sizes. Let me know if you need any help with the responsive design patterns." },
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        content: "Just checking in. How's the mobile responsiveness coming along? Any challenges you're facing?" 
      }])
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-3 mt-4">
      <h2 className="text-lg font-semibold text-slate-200 mb-2">Tech Lead Chat</h2>
      {messages.map((message, index) => (
        <div key={index} className="flex gap-2 items-start">
          {message.sender === 'ai' ? (
            <Bot className="w-5 h-5 mt-1 text-emerald-500 flex-shrink-0" />
          ) : (
            <div className="w-5 h-5 mt-1 rounded-full bg-slate-700 flex-shrink-0" />
          )}
          <p className="text-slate-300 text-sm">{message.content}</p>
        </div>
      ))}
    </div>
  )
}

