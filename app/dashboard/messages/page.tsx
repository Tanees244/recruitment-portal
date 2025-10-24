"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { MessagingSystem } from "@/components/dashboard/messaging-system"

export default function MessagesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Messages</h1>
          <p className="text-slate-600 mt-2">Communicate with candidates, recruiters, and team members</p>
        </div>
        <MessagingSystem />
      </div>
    </DashboardLayout>
  )
}
