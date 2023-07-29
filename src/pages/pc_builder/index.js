import CategoryCard from "@/components/CategoryCard";
import { useSelector } from "react-redux";

const PC_Builder = ({ categories }) => {
  const { selectedCategories } = useSelector((state) => state.pcBuilder);

  return (
    <div className="py-3 sm:py-10 px-5 sm:px-10 md:px-20">
      {categories?.map((category) => {
        return <CategoryCard key={category?._id} category={category} />;
      })}
      <button></button>
    </div>
  );
};

export default PC_Builder;

// PC_Builder.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  const categoriesData = await res.json();

  return {
    props: {
      categories: categoriesData.data,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/categories");
//   const categoriesData = await res.json();

//   return {
//     props: {
//       categories: categoriesData.data,
//     },
//   };
// };
