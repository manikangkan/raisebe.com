const Card = ({ image, title, description, isKnowmore }) => {
  return (
    <div className="col-span-1 border border-slate-100 rounded-lg overflow-hidden">
      <img src={image} alt="" className="w-full aspect-square" />
      <div className="space-y-4 p-4">
        <h1 className="font-bold">{title}</h1>
        <p>{description}</p>
        <div className="space-x-4">
          {isKnowmore && (
            <button className="px-6 py-2 rounded-md border border-blue-500 text-blue-500 bg-transparent font-semibold text-sm hover:opacity-95">
              Know more
            </button>
          )}
          <button className="px-6 py-2 rounded-md border border-blue-500 text-white bg-blue-500 bg-transparent font-semibold text-sm hover:opacity-95">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
