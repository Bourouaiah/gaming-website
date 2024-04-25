import { gamePhotos } from "@/constants";
import Image from "next/image";

function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center flex-wrap md:flex-nowrap justify-between pt-[150px] px-[10px] sm:px-[50px] hero-bg"
    >
      <div className="z-20">
        <h1 className="text-3xl md:text-5xl">
          Welcome to the <span className="text-[#00EEBD]">Esports</span>
        </h1>
        <br />
        <h1 className="font-semibold text-3xl md:text-5xl">Multiverse</h1>
        <button className="button-bg text-lg p-2 rounded-xl mt-[20px] cursor-pointer">
          Join Tournament
        </button>
      </div>

      <div className="grid grid-cols-2 items-start gap-[40px] mt-[50px] md:mt-0 z-20">
        {gamePhotos.map((photo, i) => (
          <Image
            loading="lazy"
            className={`rounded-lg ${i % 2 === 0 ? "-translate-y-[25px]" : ""}`}
            key={i}
            src={photo.url}
            alt={photo.alt}
            width={300}
            height={350}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
