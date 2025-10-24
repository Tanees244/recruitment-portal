"use client"

import { StatsCard } from "./stats-card"
import { RecentActivity } from "./recent-activity"
import { AnnouncementBanner } from "./announcement-banner"

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <AnnouncementBanner />

      <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Jobs" value="1,234" change="+12%" icon="💼" />
        <StatsCard title="Active Candidates" value="5,678" change="+8%" icon="👥" />
        <StatsCard title="Scheduled Interviews" value="89" change="+5%" icon="📅" />
        <StatsCard title="Approved Recruiters" value="42" change="+3%" icon="✅" />
      </div>

      {/* Pending Approvals */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-orange-400">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Pending Approvals</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">Recruiter {i} - Healthcare Institute</p>
                <p className="text-sm text-slate-600">Pending since 2 days ago</p>
              </div>
              <div className="flex gap-2">
                <button className="btn-primary px-4 py-2 text-sm">Approve</button>
                <button className="btn-secondary px-4 py-2 text-sm">Reject</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Admin Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary px-6 py-3 w-full">Manage Users</button>
          <button className="btn-secondary px-6 py-3 w-full">View Reports</button>
          <button className="btn-secondary px-6 py-3 w-full">System Settings</button>
        </div>
      </div>

      {/* User Management Summary */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">User Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-slate-600">Total Candidates</p>
            <p className="text-2xl font-bold text-blue-600">5,678</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-slate-600">Active Recruiters</p>
            <p className="text-2xl font-bold text-green-600">42</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <p className="text-sm text-slate-600">Pending Approvals</p>
            <p className="text-2xl font-bold text-orange-600">7</p>
          </div>
        </div>
      </div>

      <RecentActivity />
    </div>
  )
}
