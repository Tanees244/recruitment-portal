import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

export default function Services() {
  const services = [
    {
      title: "Job Matching",
      description:
        "AI-powered matching algorithm connects candidates with the perfect healthcare roles based on skills, experience, and preferences.",
      icon: "🎯",
    },
    {
      title: "Interview Scheduling",
      description:
        "Seamless calendar integration with automated email invitations and video interview capabilities for efficient hiring.",
      icon: "📅",
    },
    {
      title: "Resume Evaluation",
      description:
        "Comprehensive candidate assessment with automated screening and detailed feedback for better hiring decisions.",
      icon: "📄",
    },
    {
      title: "Candidate Management",
      description:
        "Centralized platform to manage applications, track pipeline stages, and collaborate with your team.",
      icon: "👥",
    },
    {
      title: "Multi-Platform Distribution",
      description:
        "Post jobs across LinkedIn, Indeed, Glassdoor, and social media automatically to maximize visibility.",
      icon: "📢",
    },
    {
      title: "Home Nursing Services",
      description:
        "Specialized category for home nursing opportunities with advanced filtering and scheduling features.",
      icon: "🏥",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-xl text-slate-600">Comprehensive recruitment solutions for healthcare professionals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
