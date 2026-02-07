"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/user-context"

interface NavbarProps {
  onMenuClick: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [showProfile, setShowProfile] = useState(false)
  const router = useRouter()
  const { user, logout } = useUser()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <nav className="bg-white border-b border-[#174460]/15 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="md:hidden p-2 hover:bg-[#174460]/5 rounded-lg text-[#174460]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden md:flex items-center bg-[#174460]/5 rounded-lg px-4 py-2 border border-[#174460]/10">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-[#174460] placeholder-[#174460]/50"
          />
          <svg className="w-5 h-5 text-[#174460]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Language Switcher */}
        <select className="bg-transparent text-[#174460] font-medium outline-none cursor-pointer">
          <option>EN</option>
          <option>AR</option>
        </select>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-[#174460]/5 rounded-lg text-[#174460]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#06C144] rounded-full"></span>
        </button>

        {/* Profile Menu */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 p-2 hover:bg-[#174460]/5 rounded-lg"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
              style={{ background: "linear-gradient(135deg, #174460 0%, #06C144 100%)" }}
            >
              {user?.name.charAt(0).toUpperCase() || "U"}
            </div>
            <span className="hidden sm:inline text-[#174460] font-medium">{user?.name || "User"}</span>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#174460]/15 z-50">
              <a href="/dashboard/profile" className="block px-4 py-2 text-[#174460] hover:bg-[#174460]/5">
                Profile
              </a>
              <a href="/dashboard/settings" className="block px-4 py-2 text-[#174460] hover:bg-[#174460]/5">
                Settings
              </a>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-[#174460] hover:bg-[#174460]/5 border-t border-[#174460]/10"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
