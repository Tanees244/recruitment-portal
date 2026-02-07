import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#174460] mb-8">About Us</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#174460] mb-4">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are dedicated to revolutionizing healthcare recruitment by connecting talented professionals with
            meaningful opportunities. Our platform bridges the gap between healthcare institutions and qualified
            candidates, ensuring the best matches for both parties.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#174460] mb-4">Why Choose Us</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#06C144] font-bold text-xl">✓</span>
              <div>
                <h3 className="font-semibold text-[#174460]">Advanced Matching Algorithm</h3>
                <p className="text-slate-600">
                  AI-powered system ensures the best fit between candidates and positions
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-[#06C144] font-bold text-xl">✓</span>
              <div>
                <h3 className="font-semibold text-[#174460]">Multi-Platform Integration</h3>
                <p className="text-slate-600">Reach candidates across LinkedIn, Indeed, Glassdoor, and more</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-[#06C144] font-bold text-xl">✓</span>
              <div>
                <h3 className="font-semibold text-[#174460]">HIPAA Compliant</h3>
                <p className="text-slate-600">Secure handling of sensitive healthcare professional data</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-[#06C144] font-bold text-xl">✓</span>
              <div>
                <h3 className="font-semibold text-[#174460]">24/7 Support</h3>
                <p className="text-slate-600">AI chatbots and dedicated support team always available</p>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#174460] mb-4">Our Team</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our team consists of experienced healthcare professionals, software engineers, and recruitment specialists
            dedicated to creating the best platform for healthcare recruitment.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  )
}
