import ProductDetails from "../../components/productDetails";

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
    `${process.env.URL}/api/products?category=cpuProcessor`
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
    `${process.env.URL}/api/category-product?id=${params?.cpuProcessorId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
