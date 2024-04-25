import HeadTitle from "@/components/HeadTitle";
import TournamentCard from "@/components/TournamentCard";
import { tournamentData } from "@/constants";

function Tournaments() {
  return (
    <section id="tournaments" className="my-[100px] px-[10px] sm:px-[50px]">
      <HeadTitle>Tournaments</HeadTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] px-[50px] mt-[100px]">
        {tournamentData.map((item) => (
          <TournamentCard
            imageUrl={item.imageUrl}
            title={item.title}
            time={item.time}
            playMode={item.playMode}
            platform={item.platform}
            price={item.price}
          />
        ))}
      </div>
      <button className="bg-[#0A1F35] text-lg p-2 rounded-md cursor-pointer relative left-[50%] translate-x-[-50%] mt-[30px]">
        View More
      </button>
    </section>
  );
}

export default Tournaments;
