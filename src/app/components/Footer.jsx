"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-orange-500 text-white py-6 mt-10">
      <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Sol Kısım: Açık Kaynak ve Geliştirici */}
        <div className="text-sm mb-4 sm:mb-0 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-1">
            <span>{t("open_source")}</span>
            <Link
              href="https://github.com/mericcintosun/alvin-newyear-progress"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              {t("love")}
            </Link>
          </div>
          <div>
            <span>{t("created_by")}</span>
          </div>
        </div>

        <div className="text-sm flex space-x-4">
          <Link
            href="/about"
            className="hover:text-yellow-200 transition-colors"
          >
            {t("about_project")}
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-200 transition-colors"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
