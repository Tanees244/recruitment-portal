"use client"

import type React from "react"

import { ProtectedDashboard } from "@/components/dashboard/protected-dashboard"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProtectedDashboard>{children}</ProtectedDashboard>
}
