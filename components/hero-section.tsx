"use client"

import Link from "next/link"
import { useState } from "react"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Find Your Next Healthcare Opportunity
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Connect with top healthcare institutions and find the perfect nursing, medical, and healthcare professional
            roles
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-2 bg-white rounded-2xl shadow-lg p-2">
            <input
              type="text"
              placeholder="Search jobs by title, location, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 outline-none text-slate-900"
            />
            <button className="btn-primary px-8">Search</button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth?type=candidate" className="btn-primary px-8 py-3 text-center">
            Find Jobs
          </Link>
          <Link href="/auth?type=recruiter" className="btn-secondary px-8 py-3 text-center">
            Post a Job
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">5000+</div>
            <p className="text-slate-600">Active Jobs</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">10000+</div>
            <p className="text-slate-600">Healthcare Professionals</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <p className="text-slate-600">Healthcare Institutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
