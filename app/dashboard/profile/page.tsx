"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { useUser } from "@/lib/user-context"

export default function ProfilePage() {
  const { user } = useUser()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-6">
            <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold text-white"
            style={{ background: "linear-gradient(135deg, #174460 0%, #06C144 100%)" }}
          >
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900">{user?.name}</h2>
              <p className="text-slate-600">{user?.email}</p>
              <p className="text-sm text-slate-500 mt-2 capitalize">Role: {user?.role}</p>
              {user?.status === "pending" && <p className="text-sm text-orange-600 mt-2">Status: Pending Approval</p>}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Full Name</label>
                <input
                  type="text"
                  value={user?.name}
                  disabled
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="btn-primary px-6 py-2">Edit Profile</button>
            <button className="btn-secondary px-6 py-2">Change Password</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
