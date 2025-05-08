// src/components/PackageTable.tsx
import { Edit, Trash2 } from 'lucide-react';

const packages = [
  { id: 1, name: 'Standard Package', price: 100, activeUsers: 120 , winnings: 'EV', cycle : '7days', status: 'active'},
  { id: 2, name: 'Premium Package', price: 250, activeUsers: 75 , winnings: 'EV', cycle : '7days', status: 'active'},
  { id: 3, name: 'VIP Package', price: 500, activeUsers: 50 , winnings: 'EV' ,cycle : '7days', status: 'active'},
];

export default function PackageTable() {
  return (
    <div className="overflow-x-auto bg-[#111827] p-6 rounded-lg shadow-md">
      <table className="min-w-full text-sm text-gray-300">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left">Package Name</th>
            <th className="px-6 py-3 text-left">Price (ETB)</th>
            <th className="px-6 py-3 text-left">Active Users</th>
            <th className="px-6 py-3 text-left">Winnings</th>
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
              <td className="px-6 py-3">{pkg.activeUsers}</td>
              <td className="px-6 py-3">{pkg.winnings}</td>
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
    </div>
  );
}
