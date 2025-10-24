"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { useUser } from "@/lib/user-context"

export default function AuthorizationPage() {
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
          <h1 className="text-3xl font-bold text-slate-900">Authorization Management</h1>
          <p className="text-slate-600 mt-2">Configure role-based permissions and access control</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Role Permissions</h2>

          <div className="space-y-6">
            {["Candidate", "Recruiter", "Admin"].map((role) => (
              <div key={role} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-3">{role}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "View Jobs",
                    "Post Jobs",
                    "Manage Candidates",
                    "Schedule Interviews",
                    "View Reports",
                    "Manage Users",
                  ].map((permission) => (
                    <label key={permission} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        defaultChecked={
                          role === "Admin" ||
                          (role === "Recruiter" && permission !== "Manage Users") ||
                          (role === "Candidate" && permission === "View Jobs")
                        }
                        className="w-4 h-4 rounded border-slate-300"
                      />
                      <span className="text-sm text-slate-700">{permission}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            <button className="btn-primary px-6 py-2">Save Changes</button>
            <button className="btn-secondary px-6 py-2">Reset to Default</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
