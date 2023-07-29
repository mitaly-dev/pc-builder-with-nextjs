import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className=" py-3 sm:py-10 px-5 sm:px-10 md:px-20">
      <div className="flex flex-col justify-center text-center leading-0 mb-5">
        <h3>Featured Category</h3>
        <p className="p-0"> Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {categories?.map((category, index) => {
          return (
            <Link
              href={`${category?.category}`}
              key={index}
              className=" rounded-md px-10 py-10 bg-white shadow-md hover:shadow-xl text-center text-black"
            >
              {category?.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
