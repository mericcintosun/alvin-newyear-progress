"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation('common');

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          {t("about_page.title")}
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            {t("about_page.purpose_title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("about_page.purpose_description")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            {t("about_page.technologies_title")}
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {t("about_page.technologies_list", { returnObjects: true }).map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            {t("about_page.developer_title")}
          </h2>
          <div className="flex items-center">
            <Image
              src="/meric-cintosun.jpg" // Bu resmi public klasörüne eklemelisiniz
              alt="Meriç Cintosun"
              width={100}
              height={100}
              className="rounded-full mr-4"
            />
            <div>
              <p className="text-gray-600 dark:text-gray-300">
                {t("about_page.developer_description")}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            {t("about_page.features_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t("about_page.features", { returnObjects: true }).map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {feature.feature_title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.feature_description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
          >
            {t("about_page.join_adventure")}
          </Link>
        </section>
      </div>
    </main>
  );
}
