export function RecentActivity() {
  const activities = [
    { type: "job_posted", user: "Sarah Johnson", action: "Posted new job", time: "2 hours ago" },
    { type: "candidate_applied", user: "Mike Chen", action: "Applied to Senior Nurse position", time: "4 hours ago" },
    { type: "interview_scheduled", user: "Emma Davis", action: "Scheduled interview", time: "6 hours ago" },
    { type: "recruiter_approved", user: "Admin", action: "Approved new recruiter", time: "1 day ago" },
  ]

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
            <div>
              <p className="font-medium text-slate-900">{activity.user}</p>
              <p className="text-sm text-slate-600">{activity.action}</p>
            </div>
            <span className="text-sm text-slate-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
