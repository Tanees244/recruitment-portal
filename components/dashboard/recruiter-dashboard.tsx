"use client"

import { StatsCard } from "./stats-card"
import { RecentActivity } from "./recent-activity"
import { AnnouncementBanner } from "./announcement-banner"
import { useUser } from "@/lib/user-context"

export function RecruiterDashboard() {
  const { user } = useUser()

  return (
    <div className="space-y-6">
      <AnnouncementBanner />

      <div>
        <h1 className="text-3xl font-bold text-slate-900">Recruiter Dashboard</h1>
        {user?.status === "pending" && (
          <div className="mt-2 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-sm text-orange-800">
              Your profile is pending approval. You'll be able to post jobs once approved by an admin.
            </p>
          </div>
        )}
      </div>

      {/* Recruiter Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Posted Jobs" value="5" change="2 active" icon="💼" />
        <StatsCard title="Applications" value="34" change="8 new" icon="📝" />
        <StatsCard title="Scheduled Interviews" value="12" change="3 this week" icon="📅" />
        <StatsCard title="Hired" value="3" change="this month" icon="✅" />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            className={`btn-primary px-6 py-3 w-full ${user?.status === "pending" ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={user?.status === "pending"}
          >
            Post New Job
          </button>
          <button className="btn-secondary px-6 py-3 w-full">View Applications</button>
          <button className="btn-secondary px-6 py-3 w-full">Schedule Interview</button>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Applications</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start justify-between p-4 border border-slate-200 rounded-lg">
              <div>
                <h3 className="font-semibold text-slate-900">Candidate Name {i}</h3>
                <p className="text-sm text-slate-600">Applied for: Registered Nurse</p>
                <p className="text-xs text-slate-500 mt-1">Match Score: 85%</p>
              </div>
              <button className="btn-secondary px-4 py-2">Review</button>
            </div>
          ))}
        </div>
      </div>

      <RecentActivity />
    </div>
  )
}
