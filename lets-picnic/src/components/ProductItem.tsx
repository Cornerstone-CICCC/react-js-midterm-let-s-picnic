type ProductItemProps = {
  name: string;
  weight: number;
  imageUrl: string;
  price: number;
};

const ProductItem = ({ name, weight, imageUrl, price }: ProductItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 rounded-lg bg-white">
      <img src={imageUrl} alt={name} />
      <h2 className="text-center text-green-900 font-semibold">{name}</h2>
      <p className="text-gray-400 font-semibold">{weight} gm</p>
      <p className="text-green-900 font-bold text-2xl">${price.toFixed(2)}</p>
      <button className="flex justify-center items-center bg-lime-50 w-full text-4xl">+</button>
    </div>
  );
};

export default ProductItem;
