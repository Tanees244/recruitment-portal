"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useUser } from "@/lib/user-context"
import { useEffect, useState } from "react"
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Calendar,
  User,
  MessageCircle,
  Users,
  CheckSquare,
  Search,
  Lock,
  BarChart3,
  Settings,
  LogOut,
  Handshake,
  Database,
  Star,
  ClipboardList,
  Ticket,
  Shield,
  Bell,
} from "lucide-react"

const ADMIN_PORTAL_STORAGE_KEY = "admin-portal-sidebar-mode"

interface SidebarProps {
  isOpen: boolean
}

type IconComponent = React.ComponentType<{ className?: string; size?: number }>

interface MenuItem {
  href: string
  label: string
  icon: IconComponent
}

const ADMIN_PORTAL_MENU: MenuItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/users", label: "User Management", icon: Users },
  { href: "/dashboard/master-data", label: "Master Data", icon: Database },
  { href: "/dashboard/healthcare-service", label: "Health Care Service", icon: Star },
  { href: "/dashboard/plans", label: "Plans", icon: ClipboardList },
  { href: "/dashboard/coupons", label: "Coupons", icon: Ticket },
  { href: "/dashboard/settings", label: "Administrator Settings", icon: Shield },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
]

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useUser()
  const [isAdminPortalMode, setIsAdminPortalMode] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || user?.role !== "admin") return
    const stored = localStorage.getItem(ADMIN_PORTAL_STORAGE_KEY)
    setIsAdminPortalMode(stored === "true")
  }, [user?.role])

  const setAdminPortalMode = (value: boolean) => {
    setIsAdminPortalMode(value)
    if (typeof window !== "undefined") {
      localStorage.setItem(ADMIN_PORTAL_STORAGE_KEY, String(value))
    }
  }

  const getMenuItems = (): MenuItem[] => {
    if (!user) return []

    if (user.role === "admin" && isAdminPortalMode) {
      return ADMIN_PORTAL_MENU
    }

    const baseItems: MenuItem[] = [{ href: "/dashboard", label: "Dashboard", icon: LayoutDashboard }]

    switch (user.role) {
      case "candidate":
        return [
          ...baseItems,
          { href: "/dashboard/jobs", label: "Browse Jobs", icon: Briefcase },
          { href: "/dashboard/applications", label: "My Applications", icon: FileText },
          { href: "/dashboard/interviews", label: "Interviews", icon: Calendar },
          { href: "/dashboard/profile", label: "My Profile", icon: User },
          { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
        ]

      case "recruiter":
        return [
          ...baseItems,
          { href: "/dashboard/jobs", label: "Post Jobs", icon: Briefcase },
          { href: "/dashboard/candidates", label: "Applications", icon: Users },
          { href: "/dashboard/interviews", label: "Schedule Interviews", icon: Calendar },
          { href: "/dashboard/team", label: "Team Collaboration", icon: Handshake },
          { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
          { href: "/dashboard/profile", label: "Profile", icon: User },
        ]

      case "admin":
        return [
          ...baseItems,
          { href: "/dashboard/users", label: "User Management", icon: Users },
          { href: "/dashboard/approvals", label: "Approvals", icon: CheckSquare },
          { href: "/dashboard/jobs", label: "Job Postings", icon: Briefcase },
          { href: "/dashboard/candidates", label: "Candidates", icon: Search },
          { href: "/dashboard/interviews", label: "Interviews", icon: Calendar },
          { href: "/dashboard/authorization", label: "Authorization", icon: Lock },
          { href: "/dashboard/reports", label: "Reports", icon: BarChart3 },
          { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
          { href: "/dashboard/settings", label: "Settings", icon: Settings },
        ]

      default:
        return baseItems
    }
  }

  const menuItems = getMenuItems()
  const isAdminPortalSidebar = user?.role === "admin" && isAdminPortalMode

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 hidden md:flex flex-col shadow-xl`}
      style={
        isAdminPortalSidebar
          ? { background: "#ffffff", borderRight: "1px solid #e5e7eb" }
          : {
              background: "linear-gradient(180deg, #174460 0%, #1a5070 50%, #0f2d40 100%)",
            }
      }
    >
      <div
        className={`p-4 border-b ${isAdminPortalSidebar ? "border-slate-200" : "border-white/10"}`}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shrink-0"
            style={{ background: "linear-gradient(135deg, #06C144 0%, #05a83a 100%)" }}
          >
            HR
          </div>
          {isOpen && (
            <span
              className={`font-bold text-lg tracking-tight ${
                isAdminPortalSidebar ? "text-[#174460]" : "text-white"
              }`}
            >
              HR Portal
            </span>
          )}
        </div>
      </div>

      {isOpen && user && (
        <>
          <div
            className={`px-4 py-3 mx-3 mt-2 rounded-lg border ${
              isAdminPortalSidebar
                ? "bg-[#174460]/5 border-[#174460]/10"
                : "bg-white/5 border-white/10"
            }`}
          >
            <p className={isAdminPortalSidebar ? "text-xs text-[#174460]/70" : "text-xs text-white/70"}>
              Logged in as
            </p>
            <p
              className={`text-sm font-semibold capitalize ${
                isAdminPortalSidebar ? "text-[#174460]" : "text-white"
              }`}
            >
              {user.role}
            </p>
            {user.status === "pending" && (
              <p className="text-xs text-amber-600 mt-1">Pending Approval</p>
            )}
          </div>

          {user.role === "admin" && (
            <div className="px-4 py-3 flex items-center justify-between gap-2 border-b border-slate-200/80">
              <span className="text-xs font-medium text-[#174460]/80">Admin Portal</span>
              <button
                type="button"
                role="switch"
                aria-checked={isAdminPortalMode}
                onClick={() => setAdminPortalMode(!isAdminPortalMode)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-[#06C144] focus:ring-offset-2 ${
                  isAdminPortalMode ? "bg-[#06C144]" : "bg-slate-200"
                }`}
              >
                <span className="sr-only">Switch to admin portal menu</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition ${
                    isAdminPortalMode ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          )}
        </>
      )}

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                isAdminPortalSidebar
                  ? isActive
                    ? "text-white shadow-md"
                    : "text-[#174460] hover:bg-slate-100"
                  : isActive
                    ? "bg-[#06C144] text-white shadow-lg shadow-[#06C144]/30"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
              style={
                isAdminPortalSidebar && isActive
                  ? {
                      background: "linear-gradient(90deg, #174460 0%, #1a5070 50%, #06C144 100%)",
                    }
                  : undefined
              }
            >
              <Icon className="shrink-0" size={22} />
              {isOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      <div
        className={`p-4 border-t ${
          isAdminPortalSidebar ? "border-slate-200" : "border-white/10"
        }`}
      >
        <button
          onClick={handleLogout}
          className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
            isAdminPortalSidebar
              ? "text-[#174460] hover:bg-slate-100"
              : "text-white/90 hover:bg-white/10 hover:text-white"
          }`}
        >
          <LogOut size={22} className="shrink-0" />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}
