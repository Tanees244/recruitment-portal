"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#174460]">Notifications</h1>
          <p className="text-[#174460]/80 mt-2">Configure system and admin notifications</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#174460]/10 text-center">
          <p className="text-[#174460]/70">Notification settings coming soon.</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
