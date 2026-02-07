import Link from "next/link"

export function CTASection() {
  return (
    <section
      className="py-16"
      style={{ background: "linear-gradient(135deg, #174460 0%, #1a5070 50%, #06C144 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-white/90 mb-8">
          Join thousands of healthcare professionals and institutions using our platform
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth?type=candidate"
            className="bg-white text-[#174460] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Find Jobs Now
          </Link>
          <Link
            href="/auth?type=recruiter"
            className="bg-[#06C144] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#05a83a] transition-colors border-2 border-white/30"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  )
}
