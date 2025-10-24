import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-yellow-400 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-slate-800 mb-8">
          Join thousands of healthcare professionals and institutions using our platform
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth?type=candidate"
            className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800"
          >
            Find Jobs Now
          </Link>
          <Link
            href="/auth?type=recruiter"
            className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  )
}
