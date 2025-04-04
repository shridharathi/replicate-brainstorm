"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface ImageDisplayProps {
  imageUrl: string | null
  isLoading: boolean
}

export default function ImageDisplay({ imageUrl, isLoading }: ImageDisplayProps) {
  const [displayedUrl, setDisplayedUrl] = useState<string | null>(null)

  useEffect(() => {
    setDisplayedUrl(imageUrl)
  }, [imageUrl])

  return (
    <div className="h-full w-full relative overflow-hidden border-l border-[#7f7f7f] " style={{ backgroundColor: "#222223" }}>
      {displayedUrl ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className={`relative w-3/4 h-3/4 ${isLoading ? 'animate-pulse' : ''}`}>
            <Image
              src={displayedUrl}
              alt="Generated image"
              fill
              sizes="(max-width: 1024px) 80vw, 70vw"
              priority
              className="rounded-none object-contain"
              style={{ 
                objectFit: 'contain'
              }}
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="text-white text-lg">Generating...</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={`absolute inset-0 flex items-center justify-center ${isLoading ? 'animate-pulse' : ''}`}>
          {isLoading ? (
            <div className="text-white text-lg">Generating...</div>
          ) : (
            <p className="text-gray-400">Generated image will appear here</p>
          )}
        </div>
      )}
    </div>
  )
}

