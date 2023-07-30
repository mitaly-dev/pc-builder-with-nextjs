import { StarTwoTone } from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";
import React from "react";

import { useSelector } from "react-redux";

const ProductDetails = ({ product }) => {
  // const { category: categoryTitle } = useSelector((state) => state.pcBuilder);

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
    categoryName,
    _id,
  } = product;

  const allFeaturedData = [];
  for (const key in keyFeatures) {
    const value = keyFeatures[key];
    allFeaturedData.push({ key, value });
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl m-auto py-3 sm:py-10 px-5 sm:px-10 md:px-20 border rounded-md shadow-md">
      <Image
        src={image}
        alt={`${productName}`}
        width={100}
        height={100}
        layout="responsive"
      />
      <div>
        <span className="font-bold text-red-600 capitalize">
          {categoryName}
        </span>
        <h3 className="font-semibold">{productName}</h3>
        <ul>
          {description?.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
        <p>
          Status <span className="font-semibold"> : {status}</span>
        </p>

        <h3>
          Price :{" "}
          <span className="text-red-600 text-xl font-semibold">{price}৳</span>
        </h3>
        <div className="flex flex-col">
          {allFeaturedData?.map((data, index) => {
            return (
              <span key={index} className="list-none font-medium text-[15px]">
                {data.key} <span className="font-semibold">:</span> {data.value}
              </span>
            );
          })}
        </div>
        <p>
          Individual Rating <span>:{individualRating}</span> <StarTwoTone />
        </p>
        <p>
          Average Rating <span>:{averageRating}</span> <StarTwoTone />
        </p>
        <div className="flex flex-col">
          <h3>Reviews</h3>
          <div className="flex flex-col gap-3">
            {reviews?.map((data, index) => {
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
