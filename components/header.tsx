"use client"

import Logo from "./logo"

export default function Header() {
  
  return (
    <header className="fixed items-center w-full border-b border-[#7f7f7f] shadow-sm z-50" style={{ backgroundColor: "#222223" }}>
      <div className="flex items-center justify-between h-20 px-6">
        <div className="flex items-center gap-3">
          <Logo />
          <h1 className="text-xl font-bold text-white whitespace-nowrap select-none" 
              style={{ fontFamily: "'Neue Freigeist', sans-serif" }}>
            brainstorm
          </h1>
        </div>
      </div>
    </header>
  )
} 