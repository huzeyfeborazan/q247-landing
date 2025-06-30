import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
            <Link href="/" passHref legacyBehavior>
                <a className="flex items-center gap-3 no-underline">
                    <Image src="/images/logo-transparent.png" alt="Q247 Logo" width={120} height={40} />
                </a>
            </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-purple-700 transition">Home</Link>
          <Link href="/coming-soon" className="text-gray-700 hover:text-purple-700 transition">About</Link>
          <Link href="/leaderboard" className="text-gray-700 hover:text-purple-700 transition">Leaderboard</Link>
          <Link href="/coming-soon" className="text-gray-700 hover:text-purple-700 transition">Statistics</Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex space-x-3">
          <Link
            href="/#"
            className="px-4 py-1.5 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition"
          >
            Login
          </Link>
          <Link
            href="/#"
            className="px-4 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-purple-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-gray-700 hover:text-purple-700 transition">Home</Link>
            <Link href="/coming-soon" className="text-gray-700 hover:text-purple-700 transition">About</Link>
            <Link href="/leaderboard" className="text-gray-700 hover:text-purple-700 transition">Leaderboard</Link>
            <Link href="/coming-soon" className="text-gray-700 hover:text-purple-700 transition">Statistics</Link>
          </nav>
          <div className="mt-4 flex flex-col space-y-2">
            <Link
              href="/#"
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition text-center"
            >
              Login
            </Link>
            <Link
              href="/#"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
