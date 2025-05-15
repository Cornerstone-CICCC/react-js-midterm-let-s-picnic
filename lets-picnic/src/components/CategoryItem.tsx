type CategoryItemProps = {
  name: string;
  slug: string;
//   imageUrl: string;
};

const CategoryItem = ({ name, slug }: CategoryItemProps) => {
  return (
    <div className="flex w-full flex-col relative gap-1 rounded-lg bg-white p-3">
      <h3 className="font-semibold">{name}</h3>
      <p className="font-semibold text-gray-500">{slug}</p>
      <img className="absolute bottom-3 right-3" src="https://placehold.co/40x40" alt={name} />
    </div>
  );
};

export default CategoryItem;
