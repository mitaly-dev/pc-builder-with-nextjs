import ProductCard from "@/components/ProductCard";
import RootLayout from "@/components/layout/RootLayout";

const PowerSupplyUnit = ({ power_supply_unit }) => {
  return (
    <div className="py-3 sm:py-10 px-5 sm:px-10 md:px-20">
      <h3 className="text-red-600 font-semibold text-2xl">Power Supply Unit</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-8">
        {power_supply_unit?.map((product) => (
          <ProductCard key={product?._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default PowerSupplyUnit;

// PowerSupplyUnit.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?category=power_supply_unit"
  );
  const data = await res.json();
  return {
    props: {
      power_supply_unit: data.data,
    },
  };
};
