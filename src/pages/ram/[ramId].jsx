import ProductDetails from "../../components/productDetails";

const RamId = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default RamId;

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/api/products?category=ram`);
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: {
      ramId: product?._id,
    },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `${process.env.URL}/api/category-product?id=${params?.ramId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
