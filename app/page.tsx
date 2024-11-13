// src/app/page.tsx
"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';

interface Coin {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
}

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    axios.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(response => setCoins(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-8 rtl">
      <h1 className="text-3xl font-bold mb-6">به صفحه اصلی خوش آمدید</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coins.map(coin => (
          <div key={coin.id} className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-xl font-bold">{coin.name}</h2>
            <p>قیمت: ${coin.current_price}</p>
            <p>کپ: ${coin.market_cap}</p>
          </div>
        ))}
      </div>
    </div>
  );
}