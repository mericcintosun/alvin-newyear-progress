import Image from "next/image";

export default function AlvinCharacter({ currentProgress }) {
  return (
    <div
      className="
          absolute
          top-1/2
          -translate-y-1/2
          transition-all
          duration-500
        "
      style={{ left: `${currentProgress}%` }}
    >
      <Image
        src="/alvin.png"
        alt="Alvin"
        className="
            h-16
            w-auto
            hover:scale-110   
            transition-transform
            duration-300
          "
        width={300}
        height={200}
      />
    </div>
  );
}
