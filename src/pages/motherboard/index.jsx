import ProductCard from "@/components/ProductCard";

const Motherboard = ({ motherboard }) => {
  return (
    <div className="py-3 sm:py-10 px-5 sm:px-10 md:px-20">
      <h3 className="text-red-600 font-semibold text-2xl">Motherboard</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-8">
        {motherboard?.map((product) => (
          <ProductCard key={product?._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Motherboard;

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.URL}/api/products?category=motherboard`
  );
  const data = await res.json();
  return {
    props: {
      motherboard: data.data,
    },
  };
};
