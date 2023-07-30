import ProductCard from "@/components/ProductCard";

const Ram = ({ ram }) => {
  return (
    <div className="py-3 sm:py-10 px-5 sm:px-10 md:px-20">
      <h3 className="text-red-600 font-semibold text-2xl">Ram</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-8">
        {ram?.map((product) => (
          <ProductCard key={product?._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Ram;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.URL}/api/products?category=ram`);
  const data = await res.json();
  return {
    props: {
      ram: data.data,
    },
  };
};
