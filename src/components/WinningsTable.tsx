'use client';

import { useState } from 'react';

type Winning = {
  package: string;
  ticketId: string;
  drawDate: string;
  phoneNumber: string;
  payoutStatus: 'paid' | 'unpaid';
};

const allWinnings: Winning[] = [
  { package: 'House', ticketId: 'OVHO743822725369', drawDate: '2025-05-01', phoneNumber: '0946227474', payoutStatus: 'paid' },
  { package: 'EV', ticketId: 'FIEV478311273597', drawDate: '2025-04-28', phoneNumber: '0911223344', payoutStatus: 'unpaid' },
  { package: 'Startup Fund', ticketId: 'SUST135798367388', drawDate: '2025-04-30', phoneNumber: '0922113366', payoutStatus: 'paid' },
  { package: 'House', ticketId: 'OVHO843822725369', drawDate: '2025-04-25', phoneNumber: '0927374488', payoutStatus: 'unpaid' },
  // Add more as needed
];

export default function WinningsTable() {
  const [search, setSearch] = useState('');
  const [payoutFilter, setPayoutFilter] = useState('All');

  const filteredWinnings = allWinnings.filter(winning => {
    const matchesSearch =
      winning.package.toLowerCase().includes(search.toLowerCase()) ||
      winning.ticketId.toLowerCase().includes(search.toLowerCase()) ||
      winning.phoneNumber.toLowerCase().includes(search.toLowerCase()) ||
      winning.drawDate.includes(search);

    const matchesStatus =
      payoutFilter === 'All' || winning.payoutStatus === payoutFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-[#111827] p-6 rounded-lg shadow-md text-gray-300">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search winnings..."
          className="w-full sm:w-1/2 px-4 py-2 bg-gray-800 text-white rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full sm:w-1/4 px-4 py-2 bg-gray-800 text-white rounded-md"
          value={payoutFilter}
          onChange={(e) => setPayoutFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
        </select>
      </div>

      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-800 text-gray-400">
          <tr>
            <th className="px-6 py-3">Package</th>
            <th className="px-6 py-3">Ticket ID</th>
            <th className="px-6 py-3">Draw Date</th>
            <th className="px-6 py-3">Phone Number</th>
            <th className="px-6 py-3">Payout</th>
          </tr>
        </thead>
        <tbody>
          {filteredWinnings.length > 0 ? (
            filteredWinnings.map((win, idx) => (
              <tr key={idx} className="border-t border-gray-700">
                <td className="px-6 py-3">{win.package}</td>
                <td className="px-6 py-3">{win.ticketId}</td>
                <td className="px-6 py-3">{win.drawDate}</td>
                <td className="px-6 py-3">{win.phoneNumber}</td>
                <td className="px-6 py-3 capitalize">
                  <span className={`font-semibold ${win.payoutStatus === 'paid' ? 'text-green-400' : 'text-yellow-300'}`}>
                    {win.payoutStatus}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                No winnings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
