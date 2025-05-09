import CountdownCard from '@/components/CountdownCard';
import PackageStatusCard from '@/components/PackageStatusCard';

export default function DashboardPage() {
  return (
    <div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
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

      {/* Countdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <CountdownCard name="House" price="10 ETB" cycleDays={30} />
        <CountdownCard name="EV" price="10 ETB" cycleDays={14} />
        <CountdownCard name="Construction Material" price="10 ETB" cycleDays={7} />
      </div>

      {/* Package Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <PackageStatusCard name="House" totalTickets={900000} soldTickets={260000} />
        <PackageStatusCard name="EV" totalTickets={300000} soldTickets={43500} />
      </div>
    </div>
  );
}
