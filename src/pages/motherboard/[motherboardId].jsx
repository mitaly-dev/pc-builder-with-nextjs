import ProductDetails from "../productDetails";

const MotherboardId = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default MotherboardId;

export const getStaticPaths = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?category=motherboard"
  );
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: {
      motherboardId: product?._id,
    },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/category-product?id=${params?.motherboardId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
