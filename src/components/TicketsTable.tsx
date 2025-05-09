'use client';

import { useState } from 'react';

// Mock ticket data with a purchase date
const allTickets = [
  { id: 'OVHO743822725369', userId: 'UID123', package: 'House', status: 'won', purchaseDate: '2025-04-10' },
  { id: 'FIEV478311273597', userId: 'UID456', package: 'EV', status: 'pending', purchaseDate: '2025-04-12' },
  { id: 'OVHO743822725369', userId: 'UID789', package: 'House', status: 'lost', purchaseDate: '2025-04-14' },
  { id: 'SUST135798367388', userId: 'UID111', package: 'Startup Fund', status: 'pending', purchaseDate: '2025-04-15' },
  { id: 'FIEV478311273597', userId: 'UID222', package: 'EV', status: 'won', purchaseDate: '2025-04-16' },
  // ... add more tickets
];

export default function TicketsTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const packages = ['All', ...new Set(allTickets.map(ticket => ticket.package))];

  const filteredTickets = allTickets.filter(ticket => {
    const matchesSearch =
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.userId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.package.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.status.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPackage =
      selectedPackage === 'All' || ticket.package === selectedPackage;

    const matchesDateRange =
      (!fromDate || new Date(ticket.purchaseDate) >= new Date(fromDate)) &&
      (!toDate || new Date(ticket.purchaseDate) <= new Date(toDate));

    return matchesSearch && matchesPackage && matchesDateRange;
  });

  return (
    <div className="bg-[#111827] p-6 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search tickets..."
          className="w-full sm:w-1/2 px-4 py-2 bg-gray-800 text-white rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="w-full sm:w-1/4 px-4 py-2 bg-gray-800 text-white rounded-md"
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
        >
          {packages.map(pkg => (
            <option key={pkg} value={pkg}>{pkg}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 mb-4">
        <input
          type="date"
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        <input
          type="date"
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      <table className="min-w-full text-sm text-gray-300">
        <thead className="bg-gray-800 text-gray-400">
          <tr>
            <th className="px-6 py-3 text-left">Ticket ID</th>
            <th className="px-6 py-3 text-left">User ID</th>
            <th className="px-6 py-3 text-left">Package</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Purchase Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map((ticket, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="px-6 py-3">{ticket.id}</td>
              <td className="px-6 py-3">{ticket.userId}</td>
              <td className="px-6 py-3">{ticket.package}</td>
              <td className="px-6 py-3 capitalize">{ticket.status}</td>
              <td className="px-6 py-3">{ticket.purchaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredTickets.length === 0 && (
        <div className="text-center text-gray-400 mt-4">No tickets found.</div>
      )}
    </div>
  );
}
