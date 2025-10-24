"use client"

import { StatsCard } from "./stats-card"
import { RecentActivity } from "./recent-activity"
import { AnnouncementBanner } from "./announcement-banner"

export function CandidateDashboard() {
  return (
    <div className="space-y-6">
      <AnnouncementBanner />

      <h1 className="text-3xl font-bold text-slate-900">Welcome Back!</h1>

      {/* Candidate Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Job Matches" value="12" change="+3 new" icon="💼" />
        <StatsCard title="Applications" value="8" change="2 pending" icon="📝" />
        <StatsCard title="Interviews" value="3" change="1 upcoming" icon="📅" />
        <StatsCard title="Profile Views" value="24" change="+5 this week" icon="👁️" />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary px-6 py-3 w-full">Browse Jobs</button>
          <button className="btn-secondary px-6 py-3 w-full">View Matches</button>
          <button className="btn-secondary px-6 py-3 w-full">Update Profile</button>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recommended for You</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-start justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50"
            >
              <div>
                <h3 className="font-semibold text-slate-900">Registered Nurse - ICU</h3>
                <p className="text-sm text-slate-600">Healthcare Institute {i}</p>
                <p className="text-xs text-slate-500 mt-1">Match Score: 92%</p>
              </div>
              <button className="btn-primary px-4 py-2">Apply</button>
            </div>
          ))}
        </div>
      </div>

      <RecentActivity />
    </div>
  )
}
