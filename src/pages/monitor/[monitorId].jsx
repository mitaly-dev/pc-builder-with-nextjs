import ProductDetails from "../productDetails";

const MonitorId = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default MonitorId;

export const getStaticPaths = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?category=monitor"
  );
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: {
      monitorId: product?._id,
    },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/category-product?id=${params?.monitorId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
