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
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-center text-slate-600 mb-8">
            {isLogin ? "Sign in to your account" : "Join our healthcare recruitment platform"}
          </p>

          {/* User Type Selection */}
          <div className="flex gap-2 mb-8">
            {(["candidate", "recruiter", "admin"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all ${
                  userType === type ? "bg-yellow-400 text-slate-900" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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
            <p className="text-slate-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-yellow-600 font-semibold hover:text-yellow-700"
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
