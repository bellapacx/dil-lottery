// src/components/Sidebar.tsx
import { Home, Package, Users, Ticket, Settings } from 'lucide-react';
import Link from 'next/link';
//import { cn } from '@/lib/utils'; // helper for classNames (from Shadcn)

const navItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Packages', href: '/packages', icon: Package },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Tickets', href: '/tickets', icon: Ticket },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-[#1F2936] border-r shadow-sm p-4 fixed">
      <nav className="flex flex-col space-y-2">
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700 text-gray-300"
          >
            <Icon className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300">{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
