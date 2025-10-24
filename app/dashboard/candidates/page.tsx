"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { CandidatesManagement } from "@/components/dashboard/candidates-management"
import { useUser } from "@/lib/user-context"

export default function CandidatesPage() {
  const { user } = useUser()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {user?.role === "recruiter" ? "Applications" : "Candidates"}
          </h1>
          <p className="text-slate-600 mt-2">
            {user?.role === "recruiter" ? "Review applications from candidates" : "Browse and manage all candidates"}
          </p>
        </div>
        <CandidatesManagement />
      </div>
    </DashboardLayout>
  )
}
