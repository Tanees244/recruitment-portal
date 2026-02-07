"use client"

import { useState } from "react"

export function ReportsSection() {
  const [selectedReport, setSelectedReport] = useState("jobs")

  const reports = [
    { id: "jobs", label: "Job Performance" },
    { id: "candidates", label: "Candidate Pipeline" },
    { id: "recruiters", label: "Recruiter Activity" },
    { id: "placements", label: "Placements" },
    { id: "revenue", label: "Revenue" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Reports</h1>
        <div className="flex gap-2">
          <button className="btn-secondary px-4 py-2">Export PDF</button>
          <button className="btn-secondary px-4 py-2">Export Excel</button>
        </div>
      </div>

      {/* Report Tabs */}
      <div className="bg-white rounded-2xl shadow-sm p-4 flex gap-2 overflow-x-auto">
        {reports.map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
              selectedReport === report.id
                ? "bg-[#06C144] text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {report.label}
          </button>
        ))}
      </div>

      {/* Report Content */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6">{reports.find((r) => r.id === selectedReport)?.label}</h2>

        {/* Sample Chart */}
        <div className="h-64 bg-gradient-to-br from-[#174460]/5 to-[#06C144]/5 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-slate-600 font-semibold">Chart Visualization</p>
            <p className="text-sm text-slate-500 mt-2">Data will be displayed here</p>
          </div>
        </div>

        {/* Sample Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-900">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900">Value</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="py-3 px-4 text-slate-600">Total Jobs Posted</td>
                <td className="py-3 px-4 text-slate-900 font-semibold">1,234</td>
                <td className="py-3 px-4 text-green-600">+12%</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="py-3 px-4 text-slate-600">Active Candidates</td>
                <td className="py-3 px-4 text-slate-900 font-semibold">5,678</td>
                <td className="py-3 px-4 text-green-600">+8%</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="py-3 px-4 text-slate-600">Placements</td>
                <td className="py-3 px-4 text-slate-900 font-semibold">234</td>
                <td className="py-3 px-4 text-green-600">+5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
