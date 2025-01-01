'use client'

import { useState, useEffect } from 'react'
import { Users } from 'lucide-react'

export default function StakeholderChat() {
  const [messages, setMessages] = useState([
    { sender: 'ai', content: "We need the app to be more engaging. Can we add some gamification elements?" },
    { sender: 'user', content: "Could you provide more specific examples of the type of gamification you're looking for?" },
    { sender: 'ai', content: "You know, like points and badges and stuff. Make it fun! And can we make it pop more? Maybe add some flashy animations?" },
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        content: "I just saw a cool app that has confetti animations when you complete a task. Can we add something like that?" 
      }])
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-3 mt-4">
      <h2 className="text-lg font-semibold text-slate-200 mb-2">Stakeholder Chat</h2>
      {messages.map((message, index) => (
        <div key={index} className="flex gap-2 items-start">
          {message.sender === 'ai' ? (
            <Users className="w-5 h-5 mt-1 text-purple-500 flex-shrink-0" />
          ) : (
            <div className="w-5 h-5 mt-1 rounded-full bg-slate-700 flex-shrink-0" />
          )}
          <p className="text-slate-300 text-sm">{message.content}</p>
        </div>
      ))}
    </div>
  )
}

