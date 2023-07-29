import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = ({ category }) => {
  console.log("category", category);
  return (
    <div className="py-3 sm:py-10 px-5 sm:px-10 md:px-20">
      {category?.map((product) => {
        const {
          image,
          productName,
          category,
          status,
          price,
          description,
          keyFeatures,
          individualRating,
          averageRating,
          reviews,
          _id,
        } = product;
        return (
          <div
            key={category?._id}
            className="flex  gap-20 mb-10 justify-between items-center border shadow-md rounded-md max-w-5xl m-auto p-5 "
          >
            <div className="flex gap-10 items-start">
              <div className="w-48 h-4w-48">
                <Image
                  alt="product image"
                  src={`${image}`}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-gray-700">
                  {productName}{" "}
                </p>
                <ul className="text-[15px] leading-7 text-gray-500">
                  {description?.map((data, index) => {
                    return <li key={index}>{data}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-red-600 text-xl font-semibold">
                {price}৳
              </span>
              <button className=" bg-[#1b0a7e] hover:bg-[#361b80] cursor-pointer rounded-md px-10 py-3 ">
                <Link
                  href={`/pc_builder`}
                  className="text-[14px] font-semibold text-white"
                >
                  Add
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products?category=${params.categoryId}`
  );
  const data = await res.json();

  console.log("data", data.data);

  return {
    props: {
      category: data.data,
    },
  };
};
