'use client';

import { useState } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import { Dialog } from '@headlessui/react';

const packages = [
  { id: 1, name: 'House', price: 10, startDate: '2025-05-01', SoldTickets: 260000, Availabletickets: 900000, cycle: '30days', status: 'active' },
  { id: 2, name: 'EV', price: 10, startDate: '2025-05-02', SoldTickets: 43500, Availabletickets: 300000, cycle: '14days', status: 'active' },
  { id: 3, name: 'Construction Material', price: 10, startDate: '2025-05-03', SoldTickets: 700, Availabletickets: 500000, cycle: '7days', status: 'active' },
  { id: 4, name: 'Wedding program', price: 5, startDate: '2025-05-04', SoldTickets: 900, Availabletickets: 200000, cycle: '20days', status: 'active' },
  { id: 5, name: 'Startup Fund', price: 5, startDate: '2025-05-05', SoldTickets: 400, Availabletickets: 200000, cycle: '10days', status: 'active' },
  { id: 6, name: 'Tour and travel', price: 5, startDate: '2025-05-06', SoldTickets: 500, Availabletickets: 200000, cycle: '15days', status: 'active' },
  { id: 7, name: 'Scholarship', price: 5, startDate: '2025-05-07', SoldTickets: 1000, Availabletickets: 200000, cycle: '14days', status: 'active' },
];


export default function PackageTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    startDate:'',
    price: '',
    totalTickets: '',
    cycle: '',
  });

  return (
    <div className="bg-[#111827] p-6 rounded-lg shadow-md text-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Packages</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
        >
          <Plus className="w-4 h-4" />
          Add Package
        </button>
      </div>

      <table className="min-w-full text-sm text-gray-300">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left">Package Name</th>
            <th className="px-6 py-3 text-left">Price (ETB)</th>
            <th className="px-6 py-3 text-left">Start Date</th>
            <th className="px-6 py-3 text-left">Sold Tickets</th>
            <th className="px-6 py-3 text-left">Tickets</th>
            <th className="px-6 py-3 text-left">Cycle</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id} className="border-t border-gray-700">
              <td className="px-6 py-3">{pkg.name}</td>
              <td className="px-6 py-3">{pkg.price}</td>
              <td className="px-6 py-3">{pkg.startDate}</td>
              <td className="px-6 py-3">{pkg.SoldTickets}</td>
              <td className="px-6 py-3">{pkg.Availabletickets}</td>
              <td className="px-6 py-3">{pkg.cycle}</td>
              <td className="px-6 py-3">{pkg.status}</td>
              <td className="px-6 py-3 flex gap-2">
                <button className="text-yellow-500 hover:text-yellow-300">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="text-red-500 hover:text-red-300">
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-[#1F2936] p-6 rounded-lg w-full max-w-md text-gray-300">
            <Dialog.Title className="text-lg font-semibold mb-4">Add New Package</Dialog.Title>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Package Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
  <label className="block text-sm mb-1">Start Date</label>
  <input
    type="date"
    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={formData.startDate}
    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
  />
</div>
              <div>
                <label className="block text-sm mb-1">Price (ETB)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Total Tickets</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                  value={formData.totalTickets}
                  onChange={(e) => setFormData({ ...formData, totalTickets: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Cycle (e.g. 7days)</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                  value={formData.cycle}
                  onChange={(e) => setFormData({ ...formData, cycle: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Form Data:', formData);
                    setIsOpen(false);
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
