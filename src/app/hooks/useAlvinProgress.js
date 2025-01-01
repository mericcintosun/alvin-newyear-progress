// hooks/useAlvinProgress.js
"use client";
import { useEffect, useState } from "react";

export default function useAlvinProgress() {
  // Tarih aralığı: 1 Ocak 2025 - 31 Aralık 2025
  const START_DATE = new Date("2025-01-01T00:00:00");
  const END_DATE = new Date("2025-12-31T23:59:59");

  // Tarih aralığındaki toplam saniye
  const TOTAL_SECONDS = Math.floor((END_DATE - START_DATE) / 1000); // 31,536,000

  const [currentProgress, setCurrentProgress] = useState(0); // yüzde 0..100
  const [remainingSeconds, setRemainingSeconds] = useState(TOTAL_SECONDS);

  useEffect(() => {
    function calculateProgress() {
      const now = new Date();

      const totalDurationMs = END_DATE - START_DATE; // toplam ms
      const elapsedDurationMs = now - START_DATE;    // geçen ms

      if (elapsedDurationMs <= 0) {
        // Yolculuk henüz başlamadı
        setCurrentProgress(0);
        setRemainingSeconds(TOTAL_SECONDS);
      } else if (elapsedDurationMs >= totalDurationMs) {
        // Yolculuk bitti veya aşıldı
        setCurrentProgress(100);
        setRemainingSeconds(0);
      } else {
        // Yolculuk devam ediyor
        const fraction = elapsedDurationMs / totalDurationMs; // 0..1

        const progressInSec = fraction * TOTAL_SECONDS;   // 0..31,536,000
        const progressPercentage = (progressInSec / TOTAL_SECONDS) * 100; // 0..100

        setCurrentProgress(progressPercentage);
        setRemainingSeconds(TOTAL_SECONDS - progressInSec);
      }
    }

    // İlk çalıştığında hesapla
    calculateProgress();

    // Her saniyede bir güncelle
    const intervalId = setInterval(calculateProgress, 1000);

    // Temizlik
    return () => clearInterval(intervalId);
  }, []);

  // remainingSeconds'ı remainingHours'a dönüştür
  const remainingHours = remainingSeconds / 3600;

  return {
    currentProgress,     // 0..100 (%)
    remainingHours,     // Kalan saat
    totalSeconds: TOTAL_SECONDS
  };
}
