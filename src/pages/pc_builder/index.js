import Image from "next/image";
import Link from "next/link";

const PC_Builder = ({ categories }) => {
  return (
    <div className="py-3 sm:py-10 px-5 sm:px-10 md:px-20">
      {categories?.map((category) => {
        return (
          <div
            key={category?._id}
            className="flex mb-10 justify-between items-center border shadow-md rounded-md max-w-3xl m-auto p-5 "
          >
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10">
                <Image
                  alt="product image"
                  src={`${category?.icon}`}
                  width={20}
                  height={20}
                  layout="responsive"
                />
              </div>
              <div>
                <p>{category.title}</p>
              </div>
            </div>
            <div>
              <Link
                href={`/pc_builder/${category?.category}`}
                className="border rounded-lg"
              >
                Choose
              </Link>
            </div>
          </div>
        );
      })}
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
