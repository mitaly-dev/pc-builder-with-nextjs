import { StarTwoTone } from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
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
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Card hoverable style={{ width: "100%" }}>
      <Link
        href={{
          pathname: `${category}/${_id}`,
          query: category,
        }}
        className="text-black"
      >
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
          <p>
            Rating <span>:{individualRating}</span> <StarTwoTone />
          </p>
        </div>
        <h3>
          Price :{" "}
          <span className="text-red-600 text-xl font-semibold">{price}৳</span>
        </h3>
      </Link>
    </Card>
  );
};

export default ProductCard;
