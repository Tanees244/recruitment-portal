"use client"

import { useState } from "react"
import { CandidateCard } from "./candidate-card"

export function CandidatesManagement() {
  const [candidates] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      title: "Registered Nurse",
      score: 92,
      tags: ["ICU", "Emergency", "Leadership"],
      status: "Screened",
    },
    {
      id: 2,
      name: "Bob Smith",
      title: "Home Care Nurse",
      score: 85,
      tags: ["Home Care", "Patient Care", "Communication"],
      status: "Interviewed",
    },
    {
      id: 3,
      name: "Carol White",
      title: "Medical Assistant",
      score: 78,
      tags: ["Administrative", "Patient Support"],
      status: "Applied",
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Candidates</h1>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search candidates..."
          className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
          <option>All Status</option>
          <option>Applied</option>
          <option>Screened</option>
          <option>Interviewed</option>
          <option>Offered</option>
        </select>
      </div>

      {/* Candidates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} {...candidate} />
        ))}
      </div>
    </div>
  )
}
