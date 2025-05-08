// src/components/Header.tsx
export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full h-16 bg-[#1F2936] border-b border-gray-700 z-50 px-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-200">Dil Lottery Admin</h1>
        <div className="text-sm text-gray-400">Welcome, Admin</div>
      </header>
    );
  }
  