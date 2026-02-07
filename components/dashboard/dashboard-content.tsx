"use client"

import { useUser } from "@/lib/user-context"
import { CandidateDashboard } from "./candidate-dashboard"
import { RecruiterDashboard } from "./recruiter-dashboard"
import { AdminDashboard } from "./admin-dashboard"

export function DashboardContent() {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#06C144] mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">No user data found. Please log in again.</p>
      </div>
    )
  }

  switch (user.role) {
    case "candidate":
      return <CandidateDashboard />
    case "recruiter":
      return <RecruiterDashboard />
    case "admin":
      return <AdminDashboard />
    default:
      return <div>Unknown user role</div>
  }
}
