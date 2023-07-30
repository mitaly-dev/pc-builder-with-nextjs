import { StarTwoTone } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }) => {
  const {
    productName,
    category,
    status,
    price,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    reviews,
    categoryName,
    _id,
  } = product;

  const allFeaturedData = [];
  for (const key in product?.keyFeatures) {
    const value = product?.keyFeatures[key];
    allFeaturedData.push({ key, value });
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl m-auto py-3 sm:py-10 px-5 sm:px-10 md:px-20 border rounded-md shadow-md">
      <Image
        src={product?.image}
        alt={`${product?.productName}`}
        width={300}
        height={300}
      />
      <div>
        <span className="font-bold text-red-600 capitalize">
          {product?.categoryName}
        </span>
        <h3 className="font-semibold">{product?.productName}</h3>
        <ul>
          {product?.description?.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
        <p>
          Status <span className="font-semibold"> : {product?.status}</span>
        </p>

        <h3>
          Price :{" "}
          <span className="text-red-600 text-xl font-semibold">
            {product?.price}৳
          </span>
        </h3>
        <div className="flex flex-col">
          {product?.allFeaturedData?.map((data, index) => {
            return (
              <span key={index} className="list-none font-medium text-[15px]">
                {data.key} <span className="font-semibold">:</span> {data.value}
              </span>
            );
          })}
        </div>
        <p>
          Individual Rating <span>:{product?.individualRating}</span>{" "}
          <StarTwoTone />
        </p>
        <p>
          Average Rating <span>:{product?.averageRating}</span> <StarTwoTone />
        </p>
        <div className="flex flex-col">
          <h3>Reviews</h3>
          <div className="flex flex-col gap-3">
            {product?.reviews?.map((data, index) => {
              return (
                <div key={index} className="shadow-lg rounded-md border p-3">
                  <p className="font-semibold text-[15px]">{data.email}</p>
                  <span className="list-none font-medium text-[15px]">
                    {data.review}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
