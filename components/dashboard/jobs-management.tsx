"use client"

import { useState } from "react"
import { DataTable } from "./data-table"
import { JobModal } from "./job-modal"

export function JobsManagement() {
  const [showModal, setShowModal] = useState(false)
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Nurse",
      status: "Approved",
      applicants: 24,
      posted: "2024-01-15",
      recruiter: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Home Care Specialist",
      status: "Pending Approval",
      applicants: 12,
      posted: "2024-01-14",
      recruiter: "Mike Chen",
    },
    {
      id: 3,
      title: "Medical Assistant",
      status: "Approved",
      applicants: 45,
      posted: "2024-01-13",
      recruiter: "Emma Davis",
    },
  ])

  const columns = [
    { key: "title", label: "Job Title" },
    { key: "status", label: "Status" },
    { key: "applicants", label: "Applicants" },
    { key: "recruiter", label: "Recruiter" },
    { key: "posted", label: "Posted Date" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Job Postings</h1>
        <button onClick={() => setShowModal(true)} className="btn-primary px-6 py-2">
          Add Job
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search jobs..."
          className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
          <option>All Status</option>
          <option>Approved</option>
          <option>Pending Approval</option>
          <option>Closed</option>
        </select>
      </div>

      {/* Data Table */}
      <DataTable columns={columns} data={jobs} />

      {/* Job Modal */}
      {showModal && <JobModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
