import { addComponentForPCBuilder } from "@/redux/pcBuilderSlice";
import { StarTwoTone } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PCBuilderCard = ({ product }) => {
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
    categoryName,
  } = product;
  const { selectedCategories } = useSelector((state) => state.pcBuilder);
  const router = useRouter();
  const dispatch = useDispatch();

  const addToPCBuilder = (product) => {
    dispatch(addComponentForPCBuilder(product));
    router.push("/pc_builder");
  };

  return (
    <div className="flex  gap-20 mb-10 justify-between items-center border shadow-md rounded-md max-w-5xl m-auto p-5 ">
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
          <span className="text-red-600 text-[12px] font-semibold block mb-1">
            {categoryName}
          </span>
          <span className="text-[15px] font-semibold text-gray-700 block">
            {productName}
          </span>
          <ul className="text-[15px] leading-7 text-gray-500">
            {description?.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
          </ul>
          <p className="font-semibold">
            Rating <span className="text-blue-600"> : {individualRating}</span>{" "}
            <StarTwoTone />
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-red-600 text-xl font-semibold">{price}৳</span>
        <button
          onClick={() => addToPCBuilder(product)}
          className=" bg-[#1b0a7e] hover:bg-[#361b80] cursor-pointer rounded-md px-10 py-3 text-[14px] font-semibold text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default PCBuilderCard;
