"use client"

import { useState } from "react"
import ImageDisplay from "./image-display"
import PromptInput from "./prompt-input"
import ImageHistory from "./image-history"

export default function ImageGenerator() {
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [imageHistory, setImageHistory] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const generateImage = async (prompt: string) => {
    try {
      setIsGenerating(true)
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate image")
      }

      const data = await response.json()
      setCurrentImage(data.output)
      setImageHistory((prev) => [data.output, ...prev])
    } catch (error) {
      console.error("Error generating image:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <>
      <div className="w-1/4 overflow-y-auto" style={{ backgroundColor: "#222223" }}>
        <ImageHistory images={imageHistory} setCurrentImage={setCurrentImage} />
      </div>
      <div className="w-3/4 flex flex-col overflow-hidden" style={{ backgroundColor: "#222223" }}>
        <PromptInput onGenerate={generateImage} />
        <div className="flex-1 overflow-hidden">
          <ImageDisplay imageUrl={currentImage} isLoading={isGenerating} />
        </div>
      </div>
    </>
  )
}

