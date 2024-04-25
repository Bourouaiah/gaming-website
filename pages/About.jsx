import Image from "next/image";
import HeadTitle from "@/components/HeadTitle";
import { aboutData } from "@/constants";

function About() {
  return (
    <section id="about" className="my-[100px] px-[10px] sm:px-[50px]">
      <HeadTitle>About Us</HeadTitle>
      <div className="flex justify-around items-center flex-wrap gap-[20px]">
        <div className="lg:max-w-[50%] w-auto">
          <Image loading='lazy' src="/gamer.jpg" alt="gamer" width={402} height={429} />
        </div>
        <div className="lg:max-w-[50%] w-auto">
          <ul className="flex justify-center lg:justify-between gap-[15px]">
            {
                aboutData.map((item, index) => (
                    <li key={index} className="border border-[#346296] p-2 tournament-box-bg rounded-md text-center lg:text-left w-full">
                        <p className="text-sm">{item.title}</p>
                        <span className="text-2xl">{item.number}</span>
                    </li>
                ))
            }
          </ul>
          <p className="text-base my-[20px] font-normal text-center lg:text-left">
            He is a professional esports gamer who competes in the game Dota 2.
            He is the carry and star player of the team Evil Geniuses, one of
            the most successful and popular teams in the world. He is known for
            his incredible mechanical skills, game sense, and versatility. He
            can play any hero and any role, and often surprises his opponents
            with his unconventional picks and builds.{" "}
          </p>
          <button className="bg-[#0A1F35] text-lg p-2 rounded-md mt-[20px] text-center lg:w-auto w-full cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
