"use client"

import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-slate-900">
            HR
          </div>
          <span className="font-bold text-xl text-slate-900 hidden sm:inline">HealthCare Recruitment</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium">
            Home
          </Link>
          <Link href="/services" className="text-slate-600 hover:text-slate-900 font-medium">
            Services
          </Link>
          <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium">
            About
          </Link>
          <Link href="/auth" className="btn-primary">
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-slate-100 rounded-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium">
                Home
              </Link>
              <Link href="/services" className="text-slate-600 hover:text-slate-900 font-medium">
                Services
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium">
                About
              </Link>
              <Link href="/auth" className="btn-primary w-full text-center">
                Sign In
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
