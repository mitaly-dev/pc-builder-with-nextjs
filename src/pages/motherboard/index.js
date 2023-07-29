import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const Motherboard = ({ motherboard }) => {
  console.log("motherboard", motherboard);
  return <div>Motherboard</div>;
};

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?category=motherboard"
  );
  const data = await res.json();
  return {
    props: {
      motherboard: data.data,
    },
  };
};
