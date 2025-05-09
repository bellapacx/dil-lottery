'use client';

import { useState, useMemo } from 'react';
import { Dialog } from '@headlessui/react';

type Ticket = {
  id: string;
  package: string;
  status: 'pending' | 'won' | 'lost';
};

type User = {
  uid: string;
  phone: string;
  balance: number;
  registrationDate: string;
  tickets: Ticket[];
};

const mockUsers: User[] = [
  {
    uid: 'uid_001',
    phone: '0911223344',
    balance: 120.5,
    registrationDate: '2023-08-01',
    tickets: [
      { id: 'OVHO743822725369', package: 'House', status: 'pending' },
      { id: 'FIEV478311273597', package: 'EV', status: 'lost' },
    ],
  },
  {
    uid: 'uid_002',
    phone: '0900332211',
    balance: 350.0,
    registrationDate: '2024-01-12',
    tickets: [
      { id: 'SUST135798367388', package: 'Startup Fund', status: 'won' },
    ],
  },
  {
    uid: 'uid_003',
    phone: '0922110099',
    balance: 0,
    registrationDate: '2023-11-04',
    tickets: [],
  },
  {
    uid: 'uid_004',
    phone: '0933445566',
    balance: 45.75,
    registrationDate: '2024-02-22',
    tickets: [
      { id: 'ETTO564892145523', package: 'Tour and Travel', status: 'pending' },
       { id: 'ETTO56392145523', package: 'Tour and Travel', status: 'pending' },
        { id: 'ETTO564792145523', package: 'Tour and Travel', status: 'won' },
         { id: 'ETTO564852145523', package: 'Tour and Travel', status: 'pending' },
      { id: 'DASC326584294151', package: 'Scholarship', status: 'lost' },
    ],
  },
];

export default function UserTable() {
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.phone.includes(search) || user.uid.toLowerCase().includes(search.toLowerCase())
  );
// Inside your component
const [searchTicket, setSearchTicket] = useState('');
const [statusFilter, setStatusFilter] = useState('All');

const filteredTickets = useMemo(() => {
  return selectedUser?.tickets.filter(ticket => {
    const matchesSearch =
      ticket.id.toLowerCase().includes(searchTicket.toLowerCase()) ||
      ticket.package.toLowerCase().includes(searchTicket.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' || ticket.status === statusFilter;

    return matchesSearch && matchesStatus;
  }) || [];
}, [selectedUser, searchTicket, statusFilter]);

  return (
    <div className="bg-[#1F2936] p-6 rounded-lg shadow-md text-gray-300">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by UID or Phone"
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-800 text-gray-400">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">UID</th>
              <th className="px-6 py-3">Phone Number</th>
              <th className="px-6 py-3">Balance (ETB)</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.uid}
                onClick={() => setSelectedUser(user)}
                className="border-t border-gray-700 cursor-pointer hover:bg-gray-700/30 transition"
              >
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{user.uid}</td>
                <td className="px-6 py-3">{user.phone}</td>
                <td className="px-6 py-3">{user.balance.toFixed(2)}</td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td className="px-6 py-4 text-center text-gray-400" colSpan={4}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedUser} onClose={() => setSelectedUser(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-[#1F2936] p-6 rounded-lg w-full max-w-sm text-gray-300">
            <Dialog.Title className="text-lg font-semibold mb-4">User Details</Dialog.Title>
            {selectedUser && (
              <div className="space-y-3">
                <p><span className="text-gray-400">UID:</span> {selectedUser.uid}</p>
                <p><span className="text-gray-400">Phone:</span> {selectedUser.phone}</p>
                <p><span className="text-gray-400">Balance:</span> {selectedUser.balance.toFixed(2)} ETB</p>
                <p><span className="text-gray-400">Registration Date:</span> {selectedUser.registrationDate}</p>

<div>
  <p className="text-gray-400 mb-1">Ticket History:</p>

  {selectedUser.tickets.length === 0 ? (
    <p className="text-sm text-gray-500 italic">No tickets purchased.</p>
  ) : (
    <>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          placeholder="Search package or ID"
          className="w-full px-2 py-1 rounded-md bg-gray-800 border border-gray-600 text-sm text-white"
          value={searchTicket}
          onChange={(e) => setSearchTicket(e.target.value)}
        />
        <select
          className="px-2 py-1 rounded-md bg-gray-800 border border-gray-600 text-sm text-white"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="won">Won</option>
          <option value="pending">Pending</option>
          <option value="lost">Lost</option>
        </select>
      </div>

      <div className="max-h-48 overflow-y-auto pr-1">
        <ul className="text-sm space-y-2">
          {filteredTickets.length === 0 ? (
            <li className="text-gray-500 italic">No matching tickets.</li>
          ) : (
            filteredTickets.map((ticket) => (
              <li key={ticket.id} className="flex justify-between items-center border-b border-gray-700 pb-1">
                <div>
                  <p className="font-medium text-white">🎟 {ticket.package}</p>
                  <p className="text-xs text-gray-400">ID: {ticket.id}</p>
                </div>
                <span
                  className={`capitalize text-sm ${
                    ticket.status === 'won'
                      ? 'text-green-400'
                      : ticket.status === 'lost'
                      ? 'text-red-400'
                      : 'text-yellow-300'
                  }`}
                >
                  {ticket.status}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  )}
</div>


              </div>
            )}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 bg-gray-700 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
