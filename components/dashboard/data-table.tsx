interface Column {
  key: string
  label: string
}

interface DataTableProps {
  columns: Column[]
  data: any[]
}

export function DataTable({ columns, data }: DataTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              {columns.map((col) => (
                <th key={col.key} className="text-left py-4 px-6 font-semibold text-slate-900">
                  {col.label}
                </th>
              ))}
              <th className="text-left py-4 px-6 font-semibold text-slate-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                {columns.map((col) => (
                  <td key={col.key} className="py-4 px-6 text-slate-600">
                    {col.key === "status" ? (
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          row[col.key] === "Approved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {row[col.key]}
                      </span>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
                <td className="py-4 px-6">
                  <button className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
