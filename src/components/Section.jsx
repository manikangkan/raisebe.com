const Section = ({ title, subtitle,url, isReverse }) => {
  return (
    <section className="grid lg:grid-cols-2 place-items-center">
      <div
        className={`col-span-1 space-y-4 leading-relaxed ${
          isReverse && `lg:order-last`
        }`}>
        <h1 className="font-bold text-4xl">{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="col-span-1 w-full aspect-square">
        <img
          src={url}
          alt="section image"
        />
      </div>
    </section>
  );
};

export default Section;
