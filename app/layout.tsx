import type React from "react"
import "./globals.css"
import "./styles/fonts.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Replicate Brainstorm",
  description: "Generate Images fast with NVIDIA Sana Sprint on Replicate",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-gray-50`} style={{ backgroundColor: "#222223" }}>
        {children}
      </body>
    </html>
  )
}

