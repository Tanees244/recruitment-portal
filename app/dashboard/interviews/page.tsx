"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { InterviewsManagement } from "@/components/dashboard/interviews-management"
import { useUser } from "@/lib/user-context"

export default function InterviewsPage() {
  const { user } = useUser()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {user?.role === "candidate" ? "My Interviews" : "Schedule Interviews"}
          </h1>
          <p className="text-slate-600 mt-2">
            {user?.role === "candidate" ? "View your scheduled interviews" : "Schedule and manage interviews"}
          </p>
        </div>
        <InterviewsManagement />
      </div>
    </DashboardLayout>
  )
}
