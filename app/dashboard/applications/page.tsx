"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { useUser } from "@/lib/user-context"

export default function ApplicationsPage() {
  const { user } = useUser()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Applications</h1>
          <p className="text-slate-600 mt-2">Track your job applications and their status</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-start justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Registered Nurse - ICU</h3>
                  <p className="text-sm text-slate-600">Healthcare Institute {i}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Applied 3 days ago</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Under Review</span>
                  </div>
                </div>
                <button className="btn-secondary px-4 py-2">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
