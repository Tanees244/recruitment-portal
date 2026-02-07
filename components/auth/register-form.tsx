"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/user-context"

interface RegisterFormProps {
  userType: "candidate" | "recruiter" | "admin"
}

export function RegisterForm({ userType }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const router = useRouter()
  const { setUser } = useUser()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    setUser({
      id: "user-" + Date.now(),
      name: formData.name,
      email: formData.email,
      role: userType,
      status: userType === "recruiter" ? "pending" : "active",
    })
    router.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-[#174460] mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full px-4 py-2 border border-[#174460]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06C144] focus:border-[#06C144]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#174460] mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-2 border border-[#174460]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06C144] focus:border-[#06C144]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#174460] mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-[#174460]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06C144] focus:border-[#06C144]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#174460] mb-2">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-[#174460]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06C144] focus:border-[#06C144]"
          required
        />
      </div>

      <button type="submit" className="w-full btn-primary py-2 font-semibold">
        Create Account
      </button>
    </form>
  )
}
