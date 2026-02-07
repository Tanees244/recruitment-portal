"use client"

import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-[#174460]/15 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white"
            style={{ background: "linear-gradient(135deg, #174460 0%, #1a5070 100%)" }}
          >
            HR
          </div>
          <span className="font-bold text-xl text-[#174460] hidden sm:inline">HealthCare Recruitment</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#174460]/80 hover:text-[#174460] font-medium">
            Home
          </Link>
          <Link href="/services" className="text-[#174460]/80 hover:text-[#174460] font-medium">
            Services
          </Link>
          <Link href="/about" className="text-[#174460]/80 hover:text-[#174460] font-medium">
            About
          </Link>
          <Link href="/auth" className="btn-primary">
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-[#174460]/5 rounded-lg text-[#174460]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-[#174460]/15 md:hidden shadow-lg">
            <div className="flex flex-col p-4 gap-4">
              <Link href="/" className="text-[#174460]/80 hover:text-[#174460] font-medium">
                Home
              </Link>
              <Link href="/services" className="text-[#174460]/80 hover:text-[#174460] font-medium">
                Services
              </Link>
              <Link href="/about" className="text-[#174460]/80 hover:text-[#174460] font-medium">
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
