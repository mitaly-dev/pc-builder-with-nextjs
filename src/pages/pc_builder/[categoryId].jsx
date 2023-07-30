import PCBuilderCard from "@/components/PCBuilderCard";

const Category = ({ category }) => {
  return (
    <div className="py-3 sm:py-10 px-5 sm:px-10 md:px-20">
      {category?.map((product) => {
        return (
          <PCBuilderCard key={product?._id} product={product}></PCBuilderCard>
        );
      })}
    </div>
  );
};

export default Category;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products?category=${params.categoryId}`
  );
  const data = await res.json();

  return {
    props: {
      category: data.data,
    },
  };
};
