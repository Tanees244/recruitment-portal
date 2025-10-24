"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { useUser } from "@/lib/user-context"

export default function ApprovalsPage() {
  const { user } = useUser()

  if (user?.role !== "admin") {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-slate-600">You don't have permission to access this page.</p>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Recruiter Approvals</h1>
          <p className="text-slate-600 mt-2">Review and approve pending recruiter registrations</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 border-2 border-orange-200 bg-orange-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">Recruiter {i} - Healthcare Institute</h3>
                    <p className="text-sm text-slate-600 mt-1">Email: recruiter{i}@institute.com</p>
                    <p className="text-sm text-slate-600">Applied: {i} days ago</p>
                    <div className="mt-3 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">Institute:</span> Healthcare Institute {i}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">License:</span> Verified
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-primary px-6 py-2">Approve</button>
                    <button className="btn-secondary px-6 py-2">Reject</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
