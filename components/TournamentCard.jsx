import Image from "next/image";

function TournamentCard({ imageUrl, title, time, playMode, platform, price }) {
  return (
    <div className="tournament-card-bg rounded-2xl overflow-hidden">
      <div className="max-h-[200px] overflow-hidden relative">
        <img loading="lazy" className="object-fit" src={imageUrl} alt="game-photo" />
      </div>
      <div className="mx-[20px] my-[35px]">
        <h2 className="text-xl text-center md:text-left">{title}</h2>
        <p className="font-light my-[30px] text-slate-400 text-center md:text-left">{time}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p>Play mode</p>
            <p className="text-slate-600">{playMode}</p>
          </div>
          <div className="flex flex-col">
            <p>Platform</p>
            <p className="text-slate-600">{platform}</p>
          </div>
          <div className="flex flex-col">
            <p>Price</p>
            <p className="text-slate-600">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournamentCard;
