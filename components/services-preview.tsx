import { ServiceCard } from "./service-card"

export function ServicesPreview() {
  const services = [
    {
      title: "Smart Job Matching",
      description: "AI-powered algorithm matches candidates with perfect roles",
      icon: "🎯",
    },
    {
      title: "Interview Scheduling",
      description: "Automated calendar integration and video interviews",
      icon: "📅",
    },
    {
      title: "Multi-Platform Posting",
      description: "Post to LinkedIn, Indeed, Glassdoor automatically",
      icon: "📢",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
