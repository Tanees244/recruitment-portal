"use client"

import { DashboardLayout as DashboardLayoutComponent } from "@/components/dashboard/dashboard-layout"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

export default function Dashboard() {
  return (
    <DashboardLayoutComponent>
      <DashboardContent />
    </DashboardLayoutComponent>
  )
}
