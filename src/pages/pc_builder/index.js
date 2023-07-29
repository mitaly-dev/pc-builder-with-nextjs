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
            <button className="border-2 border-[#0d053b] bg-slate-50 rounded-md px-5 py-2 ">
              <Link
                href={`/pc_builder/${category?.category}`}
                className="text-[14px] font-semibold text-[#0d053b]"
              >
                Choose
              </Link>
            </button>
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
