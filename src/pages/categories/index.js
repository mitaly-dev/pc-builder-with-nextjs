import Image from "next/image";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className=" py-3 sm:py-10 px-5 sm:px-10 md:px-20">
      <div className="flex flex-col justify-center text-center leading-0 mb-5">
        <h3>Featured Category</h3>
        <p className="p-0"> Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {categories?.map((category, index) => {
          return (
            <Link
              key={index}
              href={`${category?.category}`}
              className="text-gray-700 font-semibold hover:text-white flex flex-col shadow-lg rounded-md py-7 bg-white hover:bg-[#0d053b] duration-500 text-center"
            >
              <div>
                <Image
                  src={category.icon}
                  width={50}
                  height={50}
                  alt="image"
                  className="rounded-lg"
                ></Image>
              </div>
              {category?.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
