// src/app/packages/page.tsx
import PackageTable from '@/components/PackageTable';

export default function PackagesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-gray-300">Packages</h1>
      <PackageTable />
    </div>
  );
}
