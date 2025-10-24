interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}
