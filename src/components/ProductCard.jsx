import { Card } from "antd";
import React from "react";

const ProductCard = ({ ProductCard }) => {
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
  } = productCard;
  return <Card hoverable style={{ width: 240 }}></Card>;
};

export default ProductCard;

ProductCard;
