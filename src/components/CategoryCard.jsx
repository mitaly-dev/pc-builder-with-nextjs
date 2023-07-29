import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CategoryCard = ({ category }) => {
  const { selectedCategories } = useSelector((state) => state.pcBuilder);
  const categoryProduct = selectedCategories?.find(
    (data) => data?.categoryName === category?.title
  );

  console.log("categoryProduct", categoryProduct);

  return (
    <div className="flex mb-10 justify-between items-center border shadow-md rounded-md max-w-3xl m-auto p-5 ">
      <div className="flex gap-5 items-start">
        <div className="w-10 h-10">
          <Image
            alt="product image"
            src={`${category?.icon}`}
            width={30}
            height={30}
            layout="responsive"
          />
        </div>
        <div>
          <p className="text-[15px] font-semibold text-gray-500">
            {category.title}{" "}
            <button className="bg-gray-200 rounded-md border-none text-[12px] ml-2 p-1">
              Required
            </button>
          </p>
          {categoryProduct && (
            <div>
              <h3 className="text-sm text-gray-500">
                {categoryProduct?.productName}
              </h3>
              <span className="text-red-600 text-md font-semibold">
                {categoryProduct?.price}৳
              </span>
            </div>
          )}
        </div>
      </div>
      {categoryProduct?.productName ? (
        <button className="text-[14px] font-semibold text-whtie px-5 py-3 rounded-lg bg-green-700 border-none text-white">
          Selected
        </button>
      ) : (
        <Link
          href={`/pc_builder/${category?.category}`}
          className="text-[14px] font-semibold text-whtie px-5 py-3 rounded-lg bg-gray-700 text-white"
        >
          Choose
        </Link>
      )}
    </div>
  );
};

export default CategoryCard;
