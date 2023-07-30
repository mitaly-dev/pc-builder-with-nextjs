import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CategoryCard = ({ category }) => {
  const { selectedCategories } = useSelector((state) => state.pcBuilder);
  const categoryProduct = selectedCategories?.find(
    (data) => data?.categoryName === category?.title
  );

  return (
    <div className="flex mb-10 justify-between items-center border shadow-md rounded-md  m-auto p-5 ">
      <div className="flex gap-2 sm:gap-5 items-start">
        <div className="w-10 h-10">
          <Image
            alt="product image"
            src={`${category?.icon}`}
            width={30}
            height={30}
          />
        </div>
        <div>
          <div className="text-[15px] flex flex-col sm:flex-row gap-2 font-semibold text-gray-500">
            <span>{category.title}</span>
            <span className=" rounded-md border-none text-[12px] ml-2 p-1 inline">
              Required <span className="text-red-600">*</span>
            </span>
          </div>
          {categoryProduct && (
            <div>
              <div className="w-20 h-20 ">
                <Image
                  alt="product image"
                  src={`${categoryProduct?.image}`}
                  width={50}
                  height={50}
                  layout="responsive"
                />
              </div>
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
          className="text-[14px] font-semibold text-whtie px-3 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-700 text-white"
        >
          Choose
        </Link>
      )}
    </div>
  );
};

export default CategoryCard;
