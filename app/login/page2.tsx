// src/app/login/page.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate authentication logic (replace with actual backend call)
    if (username === 'user' && password === 'password') {
      // Redirect to home page after successful login
      router.push('/');
    } else {
      setError('نام کاربری یا رمز عبور اشتباه است');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 rtl">
      <div className="flex w-full max-w-4xl">

        {/* Right Side: Login Form */}
        <div className="w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">ورود</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                نام کاربری
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                رمز عبور
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ارسال
            </button>
          </form>
        </div>

        {/* Left Side: Image */}
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://nobitex.ir/_nuxt/img/margin-login.1e33f9f.png')" }}></div>


      </div>
    </div>
  );
}