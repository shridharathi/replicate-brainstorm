"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface PromptInputProps {
  onGenerate: (prompt: string) => void
}

export default function PromptInput({ onGenerate }: PromptInputProps) {
  const [prompt, setPrompt] = useState("")
  const lastGeneratedPrompt = useRef("")

  useEffect(() => {
    const timer = setTimeout(() => {
      if (prompt.trim() && prompt !== lastGeneratedPrompt.current) {
        onGenerate(prompt)
        lastGeneratedPrompt.current = prompt
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [prompt, onGenerate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (prompt.trim()) {
      onGenerate(prompt)
      lastGeneratedPrompt.current = prompt
    }
  }

  return (
    <div className="border-t border-l border-b border-[#7f7f7f]">
      <form onSubmit={handleSubmit} className="flex">
        <Input
          type="text"
          placeholder="enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 h-20 rounded-none font-bold text-xl px-4 py-2 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus:border-0"
          style={{ 
            lineHeight: '5rem',
            fontSize: '1.5rem',
            outline: 'none',
            boxShadow: 'none',
            borderColor: 'transparent'
          }}
        />
       
      </form>
    </div>
  )
}

