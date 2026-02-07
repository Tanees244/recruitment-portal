"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function HealthCareServicePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#174460]">Health Care Service</h1>
          <p className="text-[#174460]/80 mt-2">Configure healthcare services and offerings</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#174460]/10 text-center">
          <p className="text-[#174460]/70">Health Care Service management coming soon.</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
