const ProductDetails = () => {
  return (
    <div className="flex gap-10 rounded-lg bg-white shadow-lg p-10 w-full max-h-screen relative">
        <div className="leading-none absolute top-5 left-5 bg-sky-900 text-blue-100 rounded-full w-25 h-25 flex flex-col items-center justify-center">
            <p className="leading-none text-4xl font-semibold self-start pl-4">70<span className="text-xl pl-0.5">%</span></p>
            <p className="opacity-80 leading-none uppercase pb-2 text-sm">Discount</p>
        </div>
      <img className="w-full" src="https://placehold.co/100x100" alt="" />
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="flex pb-1 gap-2 tracking-wider text-red-400 font-bold">
            <img src="https://placehold.co/10x10" alt="" />
            270 : 13 : 10 : 32
          </span>
          <h3 className="text-gray-500 text-sm font-semibold">Brand</h3>
          <h2 className="text-2xl text-green-900 font-semibold">Name</h2>
          <div className="flex items-center gap-1">
            <span>star</span>
            <p className="text-green-900 font-bold text-sm">4.5 Rating</p>
            <p className="text-gray-400 font-semibold underline">(15 reviews)</p>
          </div>
          <h2 className="text-green-900 font-bold text-2xl">$429.12</h2>
          <div className="flex gap-2 mt-10">
            <button className="flex gap-2 justify-center items-center bg-gray-200 text-teal-900 font-semibold text-sm py-2 px-6 rounded-4xl">
              <img src="https://placehold.co/10x10" alt="" />
              Add to bucket
            </button>
            <button className="flex gap-2 justify-center items-center bg-lime-300 text-teal-900 font-semibold text-sm py-2 px-6 rounded-4xl">
              <img src="https://placehold.co/10x10" alt="" />
              Buy now
            </button>
          </div>
          <div className="flex items-center gap-2 mt-5 text-teal-900 font-semibold text-md underline">
            <img src="https://placehold.co/20x20" alt="" />
            <p>ADD TO WISHLIST</p>
          </div>
        </div>
        <div>
          <span className="flex gap-2 text-teal-700 font-bold">
            <img src="https://placehold.co/10x10" alt="" />
            In stock
          </span>
          <span className="flex gap-2 text-teal-700 font-bold">
            <img src="https://placehold.co/10x10" alt="" />
            Ships in 3-5 business days
          </span>
          <span className="flex gap-2 text-teal-700 font-bold">
            <img src="https://placehold.co/10x10" alt="" />1 week warranty
          </span>
          <p className="text-teal-800 font-bold pt-1">SKU: MB3442</p>
          <ul className="flex gap-1 text-gray-500 font-semibold pb-2">
            <li>Categories:</li>
            <li className="underline">Fruits</li>
            <li className="underline">Juice</li>
            <li className="underline">Snacks</li>
          </ul>
          <p className="text-gray-500 font-semibold">
            The Essence Mascara Lash Princess is a popular mascara known for its
            volumizing and lengthening effects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
