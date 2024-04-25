
function ShopCard({ imageUrl, type, title, price }) {

  return (
    <div className="shop-card-bg rounded-2xl overflow-hidden">
      <div className="lg:max-h-[170px] sm:max-h-[120px] max-h-full overflow-hidden">
        <img loading="lazy" className="object-fit" src={imageUrl} alt="shop-photo" />
      </div>
      <div className="p-[20px]">
        <span className="uppercase text-slate-600">{type}</span>
        <h3 className="text-xl font-medium my-[12px]">{title}</h3>
        <h4 className="text-xl font-bold">${price}</h4>
      </div>
    </div>
  );
}

export default ShopCard;
