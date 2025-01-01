"use client";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Proje Hakkında
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Projenin Amacı
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Alvin ve Sincaplar Evreni projesi, kullanıcılarına eğlenceli ve
            etkileşimli bir deneyim sunmayı amaçlayan bir platformdur. Proje,
            modern web teknolojilerini kullanarak dinamik ve kullanıcı dostu bir
            arayüz sağlamaktadır.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Kullanılan Teknolojiler
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Next.js 15</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Heroicons</li>
            <li>Vercel (Deployment)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Geliştirici
          </h2>
          <div className="flex items-center">
            <Image
              src="/meriç-cintosun.jpg" // Geliştiricinin fotoğrafını public dizinine ekleyin
              alt="Meriç Cintosun"
              width={100}
              height={100}
              className="rounded-full mr-4"
            />
            <div>
              <p className="text-gray-600 dark:text-gray-300">
                Alvin ve Sincaplar Evreni projesi, Meriç Cintosun tarafından
                geliştirilmiştir. Meriç, web geliştirme ve kullanıcı deneyimi
                tasarımı konularında uzmanlaşmış bir yazılımcıdır.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Proje Özellikleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Etkileşimli Arayüz
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kullanıcı dostu tasarımı ile her yaştan kullanıcının rahatlıkla
                kullanabileceği bir arayüz sunar.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Mobil Uyumlu
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tüm cihazlarda sorunsuz çalışan responsive tasarımı sayesinde
                her yerden erişim imkanı sağlar.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Hızlı Performans
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Next.js'in sunduğu optimizasyonlarla hızlı yükleme süreleri ve
                performans sağlar.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Güvenli Altyapı
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Güvenlik önlemleri ile kullanıcı verilerini korur ve güvenli bir
                deneyim sunar.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mt-10">
          <Link
            href="/iletisim"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
          >
            İletişime Geç
          </Link>
        </section>
      </div>
    </main>
  );
}
