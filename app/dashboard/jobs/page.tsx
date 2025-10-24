"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { JobsManagement } from "@/components/dashboard/jobs-management"
import { useUser } from "@/lib/user-context"

export default function JobsPage() {
  const { user } = useUser()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {user?.role === "candidate" ? "Browse Jobs" : user?.role === "recruiter" ? "Post Jobs" : "Job Postings"}
          </h1>
          <p className="text-slate-600 mt-2">
            {user?.role === "candidate"
              ? "Find your next opportunity"
              : user?.role === "recruiter"
                ? "Manage your job postings"
                : "Manage all job postings"}
          </p>
        </div>
        <JobsManagement />
      </div>
    </DashboardLayout>
  )
}
