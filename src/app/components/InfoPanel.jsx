export default function InfoPanel({
  currentProgress,
  remainingHours,
  totalHours,
}) {
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
        Yolculuk İstatistikleri
      </h2>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
        1 Ocak 2025 - 31 Ocak 2025
      </p>
      <div className="flex flex-col space-y-2 items-center">
        <p className="text-lg text-gray-800 dark:text-gray-100">
          İlerleme:{" "}
          <strong className="text-blue-600">
            {currentProgress.toFixed(2)}%
          </strong>
        </p>
        <p className="text-md text-gray-700 dark:text-gray-200">
          Kalan Saat{" "}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            (toplam {totalHours})
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
