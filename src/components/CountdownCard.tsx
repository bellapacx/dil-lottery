// src/components/CountdownCard.tsx
'use client';

import { useEffect, useState } from 'react';

interface CountdownCardProps {
  name: string;
  price: string;
  cycleDays: number; // 7, 14, 30
}

export default function CountdownCard({ name, price, cycleDays }: CountdownCardProps) {
  const [timeLeft, setTimeLeft] = useState('');
  const [drawDate, setDrawDate] = useState<Date | null>(null);

  useEffect(() => {
    // Generate a random offset in milliseconds within the cycle
    const randomOffsetMs = Math.floor(Math.random() * cycleDays * 24 * 60 * 60 * 1000);
    const now = new Date();
    const futureDate = new Date(now.getTime() + randomOffsetMs);
    setDrawDate(futureDate);

    const interval = setInterval(() => {
      if (!futureDate) return;

      const now = new Date().getTime();
      const target = futureDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft('Drawn');
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [cycleDays]);

  return (
    <div className="bg-[#1F2936] p-4 rounded-lg shadow-md text-gray-300">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">Price: {price}</p>
      <p className="text-sm text-gray-400">Cycle: {cycleDays} days</p>
      {drawDate && (
        <p className="text-sm text-gray-500">
          Draw Date: {drawDate.toLocaleString()}
        </p>
      )}
      <p className="text-xl font-bold mt-2">{timeLeft}</p>
    </div>
  );
}
