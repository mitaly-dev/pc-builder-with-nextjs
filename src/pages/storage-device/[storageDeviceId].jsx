import ProductDetails from "../../components/productDetails";

const StorageDeviceId = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default StorageDeviceId;

export const getStaticPaths = async () => {
  const res = await fetch(
    `${process.env.URL}/api/products?category=storage-device`
  );
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: {
      storageDeviceId: product?._id,
    },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `${process.env.URL}/api/category-product?id=${params?.storageDeviceId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
