// src/app/page.tsx
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-gray-300">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#1F2936] p-6 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-400">Total Sales</h2>
          <p className="text-xl font-bold text-gray-300">15,300 ETB</p>
        </div>
        <div className="bg-[#1F2936] p-6 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-400">Active Users</h2>
          <p className="text-xl font-bold text-gray-300">1,025</p>
        </div>
        <div className="bg-[#1F2936] p-6 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-400">Total Tickets</h2>
          <p className="text-xl font-bold text-gray-300">7,840</p>
        </div>
      </div>
    </div>
  );
}
