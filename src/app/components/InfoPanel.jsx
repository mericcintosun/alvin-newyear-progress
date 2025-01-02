"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function InfoPanel({
  currentProgress,
  remainingHours,
  totalHours,
}) {
  const { t } = useTranslation('common');

  return (
    <div
      className="
        bg-white 
        rounded-lg 
        shadow-md 
        px-6 
        py-4
        text-center
        max-w-md
        w-full
        
        /* Dark mod eklemeleri */
        dark:bg-gray-800
        dark:text-gray-100
      "
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {t("info_panel.title")}
      </h2>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
        {t("info_panel.date_range")}
      </p>
      <div className="flex flex-col space-y-2 items-center">
        <p className="text-lg text-gray-800 dark:text-gray-100">
          {t("info_panel.progress")}:{" "}
          <strong className="text-blue-600">
            {currentProgress.toFixed(2)}%
          </strong>
        </p>
        <p className="text-md text-gray-700 dark:text-gray-200">
          {t("info_panel.remaining_hours")}{" "}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t("info_panel.total_hours")}
          </span>
          :
          <strong className="ml-1 text-blue-600">
            {remainingHours.toFixed(2)}
          </strong>
        </p>
      </div>
    </div>
  );
}
