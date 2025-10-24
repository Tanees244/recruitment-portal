"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { useUser } from "@/lib/user-context"

export default function UsersPage() {
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
          <h1 className="text-3xl font-bold text-slate-900">User Management</h1>
          <p className="text-slate-600 mt-2">Manage all users in the system</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-slate-900">All Users</h2>
            <input
              type="text"
              placeholder="Search users..."
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Role</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-3 px-4">User {i}</td>
                    <td className="py-3 px-4">user{i}@example.com</td>
                    <td className="py-3 px-4 capitalize">{["candidate", "recruiter", "admin"][i % 3]}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${i % 2 === 0 ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}
                      >
                        {i % 2 === 0 ? "Active" : "Pending"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
