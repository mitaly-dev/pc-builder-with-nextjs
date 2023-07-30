import ProductDetails from "../productDetails";

const CpuProcessorId = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default CpuProcessorId;

export const getStaticPaths = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?category=cpu-processor"
  );
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: {
      cpuProcessorId: product?._id,
    },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/category-product?id=${params?.cpuProcessorId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
