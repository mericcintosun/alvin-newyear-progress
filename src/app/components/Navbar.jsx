"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../providers/ThemeProvider";

// Heroicons (Outline)
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { label: "Anasayfa", href: "/" },
    { label: "Proje Hakkında", href: "/about" },
    { label: "İletişim", href: "/contact" },
  ];

  return (
    <header className="bg-red-500 text-white sticky top-0 z-50 shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <nav className="hidden sm:flex space-x-6 text-sm items-center">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-yellow-200 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Desktop Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-white px-3 py-2 rounded flex items-center space-x-1"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="sm:hidden flex items-center">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-white px-2 py-1 rounded mr-2 flex items-center space-x-1"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="focus:outline-none"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible on small screens) */}
      {mobileMenuOpen && (
        <nav className="sm:hidden bg-red-600">
          <ul className="flex flex-col space-y-2 py-3 px-4 text-sm">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block hover:text-yellow-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
