interface CandidateCardProps {
  id: number
  name: string
  title: string
  score: number
  tags: string[]
  status: string
}

export function CandidateCard({ name, title, score, tags, status }: CandidateCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{name}</h3>
          <p className="text-slate-600 text-sm">{title}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-yellow-400">{score}%</div>
          <p className="text-xs text-slate-600">Match Score</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-600 mb-2">Tags</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <span className="text-sm font-semibold text-slate-600">{status}</span>
        <button className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">View Profile →</button>
      </div>
    </div>
  )
}
