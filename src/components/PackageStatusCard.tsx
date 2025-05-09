// src/components/PackageStatusCard.tsx
interface PackageStatusCardProps {
  name: string;
  totalTickets: number;
  soldTickets: number;
}

export default function PackageStatusCard({
  name,
  totalTickets,
  soldTickets,
}: PackageStatusCardProps) {
  const percent = Math.min((soldTickets / totalTickets) * 100, 100);
  const remaining = totalTickets - soldTickets;

  return (
    <div className="bg-[#1F2936] p-4 rounded-lg shadow-md text-gray-300">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-400 mb-2">
        {soldTickets} sold / {totalTickets} total
      </p>
      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">{remaining} tickets left</p>
    </div>
  );
}
