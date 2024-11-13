// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white rtl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">بازار ارز دیجیتال</h1>
        <div>
          <Link href="/" className="mr-4">خانه</Link>
          <Link href="/trade" className="mr-4">معامله</Link>
          <Link href="/wallet" className="mr-4">کیف پول</Link>
          <Link href="/login" className="mr-4">ورود</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;