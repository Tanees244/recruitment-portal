"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useUser } from "@/lib/user-context"

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useUser()

  const getMenuItems = () => {
    if (!user) return []

    const baseItems = [{ href: "/dashboard", label: "Dashboard", icon: "📊" }]

    switch (user.role) {
      case "candidate":
        return [
          ...baseItems,
          { href: "/dashboard/jobs", label: "Browse Jobs", icon: "💼" },
          { href: "/dashboard/applications", label: "My Applications", icon: "📝" },
          { href: "/dashboard/interviews", label: "Interviews", icon: "📅" },
          { href: "/dashboard/profile", label: "My Profile", icon: "👤" },
          { href: "/dashboard/messages", label: "Messages", icon: "💬" },
        ]

      case "recruiter":
        return [
          ...baseItems,
          { href: "/dashboard/jobs", label: "Post Jobs", icon: "💼" },
          { href: "/dashboard/candidates", label: "Applications", icon: "👥" },
          { href: "/dashboard/interviews", label: "Schedule Interviews", icon: "📅" },
          { href: "/dashboard/team", label: "Team Collaboration", icon: "🤝" },
          { href: "/dashboard/messages", label: "Messages", icon: "💬" },
          { href: "/dashboard/profile", label: "Profile", icon: "👤" },
        ]

      case "admin":
        return [
          ...baseItems,
          { href: "/dashboard/users", label: "User Management", icon: "👥" },
          { href: "/dashboard/approvals", label: "Approvals", icon: "✅" },
          { href: "/dashboard/jobs", label: "Job Postings", icon: "💼" },
          { href: "/dashboard/candidates", label: "Candidates", icon: "🔍" },
          { href: "/dashboard/interviews", label: "Interviews", icon: "📅" },
          { href: "/dashboard/authorization", label: "Authorization", icon: "🔐" },
          { href: "/dashboard/reports", label: "Reports", icon: "📈" },
          { href: "/dashboard/messages", label: "Messages", icon: "💬" },
          { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
        ]

      default:
        return baseItems
    }
  }

  const menuItems = getMenuItems()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-white border-r border-slate-200 transition-all duration-300 hidden md:flex flex-col`}
    >
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-slate-900">
            HR
          </div>
          {isOpen && <span className="font-bold text-slate-900">HR Portal</span>}
        </div>
      </div>

      {isOpen && user && (
        <div className="px-4 py-2 bg-slate-50 border-b border-slate-200">
          <p className="text-xs text-slate-600">Logged in as</p>
          <p className="text-sm font-semibold text-slate-900 capitalize">{user.role}</p>
          {user.status === "pending" && <p className="text-xs text-orange-600 mt-1">Pending Approval</p>}
        </div>
      )}

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-yellow-50 text-yellow-600 border-l-4 border-yellow-400"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 font-medium"
        >
          {isOpen ? "Logout" : "↪️"}
        </button>
      </div>
    </aside>
  )
}
