"use client"

import Image from "next/image"

interface ImageHistoryProps {
  images: string[]
  setCurrentImage: (url: string) => void
}

export default function ImageHistory({ images, setCurrentImage }: ImageHistoryProps) {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-2 gap-0">
        {images.map((url, index) => (
          <div
            key={index}
            className="cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setCurrentImage(url)}
          >
            <Image
              src={url || "/placeholder.svg"}
              alt={`Generated image ${index + 1}`}
              width={150}
              height={150}
              className="rounded-none object-cover w-full h-full block"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

