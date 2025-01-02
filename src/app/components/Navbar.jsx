"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "../providers/ThemeProvider";
import { useTranslation } from 'react-i18next';

// Heroicons (Outline)
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation('common');

  // Navigation links
  const navLinks = [
    { label: t("home"), href: "/", icon: <HomeIcon className="h-5 w-5 mr-2" /> },
    { label: t("about"), href: "/about", icon: <InformationCircleIcon className="h-5 w-5 mr-2" /> },
    { label: t("contact"), href: "/contact", icon: <EnvelopeIcon className="h-5 w-5 mr-2" /> },
  ];

  // Dil değiştirme fonksiyonu
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="bg-red-500 text-white top-0 z-50 shadow-md relative">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Sol Kısım: Mobilde Tema Toggle, Masaüstünde Navigasyon */}
        <div className="flex items-center">
          {/* Mobil Tema Toggle Butonu */}
          <button
            onClick={toggleTheme}
            className="sm:hidden flex items-center space-x-1 px-2 py-1 rounded hover:bg-red-600 transition transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>

          {/* Masaüstü Navigasyon Linkleri */}
          <nav className="hidden sm:flex space-x-6 text-sm items-center ml-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center hover:text-yellow-200 transition-colors transform duration-200 ease-in-out hover:scale-105"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Sağ Kısım: Masaüstü Tema Toggle, Dil Değişim Butonları, Mobil Menü Butonu */}
        <div className="flex items-center space-x-4">
          {/* Masaüstü Dil Değişim Butonları */}
          <div className="hidden sm:flex space-x-2">
            <button
              onClick={() => changeLanguage("tr")}
              className={`px-3 py-1 rounded transition-colors duration-200 ease-in-out ${
                i18n.language === "tr" ? "bg-yellow-300 text-red-600" : "hover:bg-red-600 hover:text-yellow-200"
              }`}
              aria-label="Türkçe"
            >
              TR
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 rounded transition-colors duration-200 ease-in-out ${
                i18n.language === "en" ? "bg-yellow-300 text-red-600" : "hover:bg-red-600 hover:text-yellow-200"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Masaüstü Tema Toggle Butonu */}
          <button
            onClick={toggleTheme}
            className="hidden sm:flex items-center space-x-1 px-3 py-2 rounded hover:bg-red-600 transition transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>

          {/* Mobil Menü Toggle Butonu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="sm:hidden focus:outline-none ml-2 transition-transform duration-200 ease-in-out transform hover:rotate-90"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobil Menü (küçük ekranlarda görünür) */}
      {mobileMenuOpen && (
        <nav className="sm:hidden absolute top-full left-0 right-0 bg-red-600 transition-transform duration-300 ease-in-out transform origin-top">
          <ul className="flex flex-col space-y-2 py-3 px-4 text-sm">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center hover:text-yellow-200 transition-colors transform duration-200 ease-in-out hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Mobilde Dil Değişim Butonları */}
            <li className="flex space-x-2 mt-2">
              <button
                onClick={() => changeLanguage("tr")}
                className={`px-3 py-1 rounded transition-colors duration-200 ease-in-out ${
                  i18n.language === "tr" ? "bg-yellow-300 text-red-600" : "hover:bg-red-600 hover:text-yellow-200"
                }`}
                aria-label="Türkçe"
              >
                TR
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 rounded transition-colors duration-200 ease-in-out ${
                  i18n.language === "en" ? "bg-yellow-300 text-red-600" : "hover:bg-red-600 hover:text-yellow-200"
                }`}
                aria-label="English"
              >
                EN
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
