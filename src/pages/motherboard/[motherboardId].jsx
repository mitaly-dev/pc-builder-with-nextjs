import RootLayout from "@/components/layout/RootLayout";
import { useRouter } from "next/router";

const MotherboardId = ({ nam }) => {
  console.log("nam", nam);
  const router = useRouter();
  const { productId } = router.query;
  return <div>Motherboard child</div>;
};

export default MotherboardId;

// MotherboardId.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     "http://localhost:3000/api/products?category=motherboard"
//   );
//   const data = await res.json();
//   const paths = data?.data?.map((product) => ({
//     params: {
//       motherboardId: product?._id,
//     },
//   }));
//   return { paths, fallback: false };
// };
// export const getStaticProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(
//     `http://localhost:3000/api/product?id=${params?.motherboardId}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       nam: data.data,
//     },
//   };
// };
