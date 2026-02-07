"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/user-context"

interface LoginFormProps {
  userType: "candidate" | "recruiter" | "admin"
}

export function LoginForm({ userType }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { setUser } = useUser()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setUser({
      id: "user-" + Date.now(),
      name: email.split("@")[0],
      email,
      role: userType,
      status: userType === "recruiter" ? "pending" : "active",
    })
    router.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-[#174460] mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-2 border border-[#174460]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06C144] focus:border-[#06C144]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#174460] mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-[#174460]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06C144] focus:border-[#06C144]"
          required
        />
      </div>

      <button type="submit" className="w-full btn-primary py-2 font-semibold">
        Sign In
      </button>

      {/* SSO Options */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#174460]/20"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-[#174460]/80">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="flex items-center justify-center gap-2 px-4 py-2 border border-[#174460]/20 rounded-lg hover:bg-[#174460]/5"
        >
          <span>Microsoft</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 px-4 py-2 border border-[#174460]/20 rounded-lg hover:bg-[#174460]/5"
        >
          <span>Google</span>
        </button>
      </div>
    </form>
  )
}
