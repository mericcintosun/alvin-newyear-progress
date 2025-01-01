"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white py-6 mt-10">
      <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section: Open Source and Developed By */}
        <div className="text-sm mb-4 sm:mb-0 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Open Source Text or Link */}
          <div className="flex items-center space-x-1">
            <span>Open Source</span>
            {/* Optional: Link to the repository */}
            <Link
              href="https://github.com/your-repo" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              ♥
            </Link>
          </div>
          {/* Developed By Text */}
          <div>
            <span>Developed by Meriç Cintosun</span>
          </div>
        </div>

        <div className="text-sm flex space-x-4">
          <Link
            href="/about"
            className="hover:text-yellow-200 transition-colors"
          >
            Proje Hakkında
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-200 transition-colors"
          >
            İletişim
          </Link>
        </div>
      </div>
    </footer>
  );
}
