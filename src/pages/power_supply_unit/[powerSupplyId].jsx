import ProductDetails from "../../components/productDetails";

const PowerSupplyId = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default PowerSupplyId;

export const getStaticPaths = async () => {
  const res = await fetch(
    `${process.env.URL}/api/products?category=power-supply_unit`
  );
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: {
      powerSupplyId: product?._id,
    },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `${process.env.URL}/api/category-product?id=${params?.powerSupplyId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
