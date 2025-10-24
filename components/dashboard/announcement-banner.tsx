"use client"

import { useState } from "react"

export function AnnouncementBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const announcements = [
    {
      title: "New Feature: Video Interviews",
      description: "Now you can conduct video interviews directly on our platform",
      color: "bg-blue-50",
    },
    {
      title: "Multi-Platform Job Distribution",
      description: "Post jobs to LinkedIn, Indeed, and Glassdoor automatically",
      color: "bg-green-50",
    },
    {
      title: "AI-Powered Candidate Matching",
      description: "Our new algorithm matches candidates with 95% accuracy",
      color: "bg-purple-50",
    },
  ]

  return (
    <div className={`${announcements[currentSlide].color} rounded-2xl p-6 flex items-center justify-between`}>
      <div>
        <h3 className="text-lg font-bold text-slate-900">{announcements[currentSlide].title}</h3>
        <p className="text-slate-600 mt-1">{announcements[currentSlide].description}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + announcements.length) % announcements.length)}
          className="p-2 hover:bg-white rounded-lg"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % announcements.length)}
          className="p-2 hover:bg-white rounded-lg"
        >
          →
        </button>
      </div>
    </div>
  )
}
