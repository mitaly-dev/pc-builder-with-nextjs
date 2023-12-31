import ProductCard from "@/components/ProductCard";
import React from "react";

const FeaturedProduct = ({ featured }) => {
  return (
    <div className="py-3 sm:py-10 px-5 sm:px-10 md:px-20">
      <div className="flex flex-col justify-center text-center leading-0 mb-5">
        <h3>Featured Products</h3>
        <p className="p-0"> Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-8">
        {featured?.map((product) => (
          <ProductCard key={product?._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
