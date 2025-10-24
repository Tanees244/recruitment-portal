interface InterviewCardProps {
  id: number
  candidateName: string
  jobTitle: string
  date: string
  time: string
  type: string
  status: string
}

export function InterviewCard({ candidateName, jobTitle, date, time, type, status }: InterviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold text-slate-900">{candidateName}</h3>
        <p className="text-slate-600 text-sm">{jobTitle}</p>
        <div className="flex gap-4 mt-2 text-sm text-slate-600">
          <span>📅 {date}</span>
          <span>🕐 {time}</span>
          <span>💻 {type}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            status === "Scheduled" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
          }`}
        >
          {status}
        </span>
        <button className="btn-primary px-4 py-2">Join</button>
      </div>
    </div>
  )
}
