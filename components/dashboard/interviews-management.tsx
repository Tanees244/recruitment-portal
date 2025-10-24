"use client"

import { useState } from "react"
import { InterviewCard } from "./interview-card"

export function InterviewsManagement() {
  const [interviews] = useState([
    {
      id: 1,
      candidateName: "Alice Johnson",
      jobTitle: "Senior Nurse",
      date: "2024-01-20",
      time: "10:00 AM",
      type: "Online",
      status: "Scheduled",
    },
    {
      id: 2,
      candidateName: "Bob Smith",
      jobTitle: "Home Care Nurse",
      date: "2024-01-21",
      time: "2:00 PM",
      type: "On-site",
      status: "Scheduled",
    },
    {
      id: 3,
      candidateName: "Carol White",
      jobTitle: "Medical Assistant",
      date: "2024-01-19",
      time: "11:00 AM",
      type: "Online",
      status: "Completed",
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Interviews & Calendar</h1>
        <button className="btn-primary px-6 py-2">Schedule Interview</button>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Calendar</h2>
        <div className="grid grid-cols-7 gap-2 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-semibold text-slate-600 py-2">
              {day}
            </div>
          ))}
          {Array.from({ length: 35 }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-square flex items-center justify-center rounded-lg hover:bg-yellow-50 cursor-pointer"
            >
              {idx + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Interviews List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Upcoming Interviews</h2>
        {interviews.map((interview) => (
          <InterviewCard key={interview.id} {...interview} />
        ))}
      </div>
    </div>
  )
}
