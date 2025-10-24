interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: string
}

export function StatsCard({ title, value, change, icon }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
          <p className="text-green-600 text-sm font-medium mt-2">{change} from last month</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  )
}
