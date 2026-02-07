"use client"

import { useState } from "react"

export function SettingsSection() {
  const [activeTab, setActiveTab] = useState("roles")

  const tabs = [
    { id: "roles", label: "User Roles & Permissions" },
    { id: "recruiters", label: "Recruiter Approvals" },
    { id: "membership", label: "Membership & Fees" },
    { id: "templates", label: "Email Templates" },
    { id: "integrations", label: "Integrations" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Settings</h1>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm p-4 flex gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id ? "bg-[#06C144] text-white" : "bg-[#174460]/10 text-[#174460]/80 hover:bg-[#174460]/15"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        {activeTab === "roles" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">User Roles & Permissions</h2>
            <div className="space-y-4">
              {["Admin", "Recruiter", "Candidate"].map((role) => (
                <div key={role} className="border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-3">{role}</h3>
                  <div className="space-y-2">
                    {["Full Access", "Read Only", "Add Only", "Update Only"].map((perm) => (
                      <label key={perm} className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-slate-600">{perm}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "integrations" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Integrations</h2>
            <div className="space-y-4">
              {["LinkedIn", "Indeed", "Glassdoor", "Microsoft 365", "Gmail"].map((integration) => (
                <div
                  key={integration}
                  className="flex items-center justify-between border border-slate-200 rounded-lg p-4"
                >
                  <span className="font-medium text-slate-900">{integration}</span>
                  <button className="btn-primary px-4 py-2">Connect</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "membership" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Membership & Fees</h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="font-medium text-slate-900">Enable Candidate Membership</span>
                </label>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="font-medium text-slate-900">Enable Recruiter Charges</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === "templates" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Email Templates</h2>
            <div className="space-y-4">
              {["Job Notification", "Interview Invitation", "Offer Letter", "Rejection"].map((template) => (
                <div
                  key={template}
                  className="flex items-center justify-between border border-slate-200 rounded-lg p-4"
                >
                  <span className="font-medium text-slate-900">{template}</span>
                  <button className="text-[#06C144] hover:text-[#05a83a] font-semibold">Edit</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "recruiters" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Recruiter Approvals</h2>
            <div className="space-y-4">
              {[
                { name: "John Recruiter", status: "Pending", date: "2024-01-15" },
                { name: "Jane Smith", status: "Approved", date: "2024-01-10" },
              ].map((recruiter) => (
                <div
                  key={recruiter.name}
                  className="flex items-center justify-between border border-slate-200 rounded-lg p-4"
                >
                  <div>
                    <p className="font-medium text-slate-900">{recruiter.name}</p>
                    <p className="text-sm text-slate-600">{recruiter.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        recruiter.status === "Pending" ? "bg-amber-100 text-amber-700" : "bg-[#06C144]/15 text-[#06C144]"
                      }`}
                    >
                      {recruiter.status}
                    </span>
                    {recruiter.status === "Pending" && <button className="btn-primary px-4 py-2">Approve</button>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
