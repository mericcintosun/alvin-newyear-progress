// components/Road.js
import Image from 'next/image';
import AlvinCharacter from './AlvinCharacter';
Image
export default function Road({ currentProgress }) {
  return (
    <div
      className={`
        relative
        w-full
        h-48 sm:h-64 lg:h-80
        mb-8
        rounded-xl
        overflow-hidden
        shadow-xl
        bg-gradient-to-r
        from-gray-700
        via-gray-800
        to-gray-900
        transition-all
        duration-300
        hover:shadow-2xl
        hover:scale-[1.01]
      `}
    >
      {/* Sarı şerit */}
      <div
        className={`
          absolute
          inset-y-1/2
          w-full
          h-[2px]
          bg-yellow-400
          /* İnce bir parıltı animasyonu */
          animate-pulse
        `}
      />

      {/* Alvin karakteri */}
      <AlvinCharacter currentProgress={currentProgress} />
        {/* Yolun sonunda fındık */}
        <div
        className="
          absolute
          top-1/2
          -translate-y-1/2
          right-4
          flex
          items-center
          justify-center
          transition-transform
          hover:scale-110
        "
      >
        <Image
          src="/nut.png"
          alt="Fındık"
          className="
            h-12
            w-auto
            cursor-pointer
          "
          width={300}
          height={200}
        />
      </div>
    </div>
  );
}
