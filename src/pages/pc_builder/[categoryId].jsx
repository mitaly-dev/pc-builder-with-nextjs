import React from "react";

const Category = ({ category }) => {
  console.log("category", category);
  return <div>{}</div>;
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
