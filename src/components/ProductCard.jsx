import { StarTwoTone } from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    _id,
  } = product;
  return (
    <Link href={`/${category}/${_id}`}>
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={
          <Image
            src={image}
            alt={`${productName}`}
            width={100}
            height={100}
            layout="responsive"
          />
        }
      >
        <div>
          <span className="font-bold text-red-600 capitalize">
            {category === "cpu-processor" ? "cpu/processor" : category}
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
      </Card>
    </Link>
  );
};

export default ProductCard;

ProductCard;
