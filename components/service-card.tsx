interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-[#174460]/5 rounded-2xl p-8 hover:shadow-lg hover:shadow-[#174460]/10 transition-all border border-[#174460]/10">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#174460] mb-2">{title}</h3>
      <p className="text-[#174460]/80">{description}</p>
    </div>
  )
}
