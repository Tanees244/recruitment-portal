"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { useUser } from "@/lib/user-context"

export default function SettingsPage() {
  const { user } = useUser()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-600 mt-2">Manage your account and system preferences</p>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Email Notifications</label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                <span className="text-sm text-slate-700">Receive email notifications</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Language</label>
              <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06C144]">
                <option>English</option>
                <option>Arabic</option>
              </select>
            </div>
          </div>
        </div>

        {/* Admin Settings */}
        {user?.role === "admin" && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">System Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Platform Name</label>
                <input
                  type="text"
                  defaultValue="HopeFront Health Hire"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06C144]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Maintenance Mode</label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="text-sm text-slate-700">Enable maintenance mode</span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <button className="btn-primary px-6 py-2">Save Settings</button>
          <button className="btn-secondary px-6 py-2">Cancel</button>
        </div>
      </div>
    </DashboardLayout>
  )
}
