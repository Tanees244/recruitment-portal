"use client"

import { useState } from "react"

export function MessagingSystem() {
  const [selectedFolder, setSelectedFolder] = useState("inbox")
  const [selectedMessage, setSelectedMessage] = useState(0)

  const folders = ["Inbox", "Sent", "Drafts", "Archive"]
  const messages = [
    {
      id: 1,
      from: "Sarah Johnson",
      subject: "New Job Posting Approved",
      preview: "Your Senior Nurse position has been approved...",
      date: "2024-01-15",
      read: false,
    },
    {
      id: 2,
      from: "Mike Chen",
      subject: "Candidate Application",
      preview: "Alice Johnson has applied for the position...",
      date: "2024-01-14",
      read: true,
    },
    {
      id: 3,
      from: "Emma Davis",
      subject: "Interview Scheduled",
      preview: "Interview scheduled for January 20th...",
      date: "2024-01-13",
      read: true,
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Messages</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-96">
        {/* Folders */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-4">Folders</h2>
          <div className="space-y-2">
            {folders.map((folder) => (
              <button
                key={folder}
                onClick={() => setSelectedFolder(folder.toLowerCase())}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                  selectedFolder === folder.toLowerCase()
                    ? "bg-[#06C144]/15 text-[#174460] font-semibold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {folder}
              </button>
            ))}
          </div>
        </div>

        {/* Messages List */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Messages</h2>
            <button className="btn-primary px-4 py-2">Compose</button>
          </div>
          <div className="flex-1 overflow-auto">
            {messages.map((msg, idx) => (
              <div
                key={msg.id}
                onClick={() => setSelectedMessage(idx)}
                className={`p-4 border-b border-slate-100 cursor-pointer transition-all ${
                  selectedMessage === idx ? "bg-[#06C144]/10" : "hover:bg-[#174460]/5"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className={`font-semibold ${msg.read ? "text-slate-600" : "text-slate-900"}`}>{msg.from}</p>
                    <p className="text-sm text-slate-600">{msg.subject}</p>
                    <p className="text-xs text-slate-500 mt-1">{msg.preview}</p>
                  </div>
                  <span className="text-xs text-slate-500">{msg.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
