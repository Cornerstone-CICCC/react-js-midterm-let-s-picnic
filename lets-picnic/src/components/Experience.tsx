const Info = [
  { name: "Order and Collect", image: "https://placehold.co/150x200" },
  { name: "Gift Vouchers", image: "https://placehold.co/150x200" },
  { name: "Present a Gift card", image: "https://placehold.co/150x200" },
  { name: "Pay your Invoice", image: "https://placehold.co/150x200" },
  { name: "Pay your Invoice", image: "https://placehold.co/150x200" },
];

const Experience = () => {
  return (
    <div className="relative h-screen flex flex-col items-center bg-lime-300">
      <div className="experience w-full h-full bg-white"></div>
      <div className="h-1/2 text-center flex flex-col gap-5 items-center justify-center text-teal-950 p-10">
        <h2 className="w-3/6 text-4xl font-bold tracking-tight">
          We always provide
          <br /> you the best in town
        </h2>
        <p className="w-4/7 text-sm font-semibold">
          Since 2007 we have been delivering excellence in product development,
          support & updates for frictionless shopping experiences
        </p>
      </div>
      <ul className="flex gap-8 h-1/2 w-full">
        {Info.map((item) => (
          <li
            key={item.name}
            className="round-shape-top flex flex-col justify-end gap-8 w-1/5 mx-auto px-5 pt-8 bg-teal-950 text-lime-200 font-semibold text-xl"
          >
            <h2 className="self-start w-2/3">{item.name}</h2>
            <img src={item.image} className="h-3/5" alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
