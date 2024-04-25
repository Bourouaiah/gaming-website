function NewsCard({ imageUrl, type, title, date }) {
  return (
    <div className="shop-card-bg rounded-2xl overflow-hidden">
      <div className="lg:max-h-[170px] sm:max-h-[120px] max-h-full overflow-hidden">
        <img loading="lazy" className="object-fit" src={imageUrl} alt="shop-photo" />
      </div>
      <div className="p-[20px]">
        <div className="flex items-center gap-[20px]">
          <span className="capitalize text-sm text-slate-600">{type}</span>
          <h4 className="text-sm">{date}</h4>
        </div>
        <h3 className="text-xl font-medium my-[12px]">{title}</h3>
      </div>
    </div>
  );
}

export default NewsCard;
