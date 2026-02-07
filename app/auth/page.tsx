"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/auth/login-form"
import { RegisterForm } from "@/components/auth/register-form"

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [userType, setUserType] = useState<"candidate" | "recruiter" | "admin">("candidate")

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg shadow-[#174460]/10 border border-[#174460]/10 p-8">
          <h1 className="text-3xl font-bold text-[#174460] mb-2 text-center">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-center text-[#174460]/80 mb-8">
            {isLogin ? "Sign in to your account" : "Join our healthcare recruitment platform"}
          </p>

          {/* User Type Selection */}
          <div className="flex gap-2 mb-8">
            {(["candidate", "recruiter", "admin"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all ${
                  userType === type
                    ? "bg-[#06C144] text-white shadow-md"
                    : "bg-[#174460]/10 text-[#174460]/80 hover:bg-[#174460]/15"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Auth Forms */}
          {isLogin ? <LoginForm userType={userType} /> : <RegisterForm userType={userType} />}

          {/* Toggle Form */}
          <div className="text-center mt-6">
            <p className="text-[#174460]/80">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#06C144] font-semibold hover:text-[#05a83a]"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
