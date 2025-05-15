import CategoryItem from "./CategoryItem";
import categories from "../assets/categories.json";

const Categories = () => {
  console.log(categories);

  return (
    <div className="flex gap-5">
      {categories.map((category, index) =>
        index < 5 ? (
          <CategoryItem
            key={category.name}
            name={category.name}
            slug={category.slug}
          />
        ) : null
      )}
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md">
        <img src="https://placehold.co/40x40" alt="Category" />
        <h3 className="text-nowrap">See all</h3>
      </div>
    </div>
  );
};

export default Categories;
