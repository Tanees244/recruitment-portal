"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { useUser } from "@/lib/user-context"

export default function ReportsPage() {
  const { user } = useUser()

  if (user?.role === "candidate") {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-slate-600">You don't have permission to access this page.</p>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Reports</h1>
          <p className="text-slate-600 mt-2">
            {user?.role === "admin" ? "View platform analytics and reports" : "View your recruitment analytics"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Job Postings", value: "1,234", change: "+12%" },
            { title: "Applications", value: "5,678", change: "+8%" },
            { title: "Interviews", value: "89", change: "+5%" },
            { title: "Hired", value: "42", change: "+3%" },
            { title: "Active Users", value: "2,345", change: "+15%" },
            { title: "Conversion Rate", value: "3.2%", change: "+0.5%" },
          ].map((stat) => (
            <div key={stat.title} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-slate-600 text-sm font-medium">{stat.title}</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
              <p className="text-sm text-green-600 mt-2">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Export Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn-secondary px-6 py-3 w-full">Export as PDF</button>
            <button className="btn-secondary px-6 py-3 w-full">Export as Excel</button>
            <button className="btn-secondary px-6 py-3 w-full">Export as CSV</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
