'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'WORK', href: '/experience' },
    { label: 'SERVICES', href: '/skills' },
    { label: 'JOURNAL', href: '/publication' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fdf0f3]/90 backdrop-blur-md border-b border-[#f9d5dc]">
      <div className="max-w-[1140px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-script text-3xl font-bold text-[#ff3366] tracking-tight group-hover:scale-105 transition-transform">
            deeba.
          </span>
          <span className="text-[#ff3366] text-xl font-doodle font-bold">♡</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-extrabold tracking-wider text-[#2b1424]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors relative py-1 ${
                  isActive ? 'text-[#ff3366]' : 'hover:text-[#ff3366]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff3366] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#ff3366] hover:bg-[#e6004c] text-white text-xs font-bold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
          >
            <span>Let's Connect</span>
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#2b1424] font-bold text-xs uppercase border border-[#f9d5dc] rounded-lg bg-white"
        >
          {isOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-[#f9d5dc] px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-xs font-extrabold tracking-wider py-1 ${
                  isActive ? 'text-[#ff3366]' : 'text-[#2b1424]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center py-2.5 bg-[#ff3366] text-white text-xs font-bold rounded-full"
          >
            Let's Connect ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
