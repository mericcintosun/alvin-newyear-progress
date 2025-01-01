"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setFormStatus("error");
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setRecaptchaToken(null);
      } else {
        throw new Error(data.message || "Form gönderilemedi");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          İletişim
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* İletişim Bilgileri */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Bize Ulaşın
            </h2>
            <ul className="space-y-4">
              {/* E-posta */}
              <li className="flex items-center">
                <FaEnvelope className="h-6 w-6 text-red-500 mr-2" />
                <a
                  href="mailto:meric@example.com" // Kendi e-posta adresinizi buraya ekleyin
                  className="text-gray-600 dark:text-gray-300 hover:text-yellow-200 transition-colors"
                >
                  meric@example.com
                </a>
              </li>
              {/* Telefon */}
              <li className="flex items-center">
                <FaPhone className="h-6 w-6 text-red-500 mr-2" />
                <a
                  href="tel:+905555555555" // Kendi telefon numaranızı buraya ekleyin
                  className="text-gray-600 dark:text-gray-300 hover:text-yellow-200 transition-colors"
                >
                  +90 555 555 55 55
                </a>
              </li>
              {/* Adres */}
              <li className="flex items-center">
                <FaMapMarkerAlt className="h-6 w-6 text-red-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  İstanbul, Türkiye
                </span>
              </li>
            </ul>
          </div>

          {/* İletişim Formu */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Mesaj Gönderin
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* İsim */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-200 mb-1"
                >
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* E-posta */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-200 mb-1"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Mesaj */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-200 mb-1"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>

              {/* reCAPTCHA */}
              <div>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                />
              </div>

              {/* Gönder Butonu */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Gönder
                </button>
              </div>

              {/* Form Durumu Mesajları */}
              {formStatus === "success" && (
                <p className="text-green-500">
                  Mesajınız başarıyla gönderildi!
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-red-500">
                  Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
