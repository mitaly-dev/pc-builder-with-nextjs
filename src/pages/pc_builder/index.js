import CategoryCard from "@/components/CategoryCard";
import { useSelector } from "react-redux";

const PC_Builder = ({ categories }) => {
  const { selectedCategories } = useSelector((state) => state.pcBuilder);
  const allCategory = selectedCategories?.map((data) => data.categoryName);

  const completePCBuildHandle = () => {
    window.alert("You Successfully completed PC Build system!");
  };
  return (
    <div className="py-3 sm:py-10 px-5 sm:px-10 md:px-20 max-w-4xl m-auto">
      {categories?.map((category) => {
        return <CategoryCard key={category?._id} category={category} />;
      })}

      <div className="flex justify-end">
        <button
          onClick={() =>
            allCategory.includes(
              "Motherboard" &&
                "CPU/Processor" &&
                "Ram" &&
                "Monitor" &&
                "Storage Device" &&
                "Power Supply Unit"
            ) && completePCBuildHandle()
          }
          className={`px-3 py-3 sm:px-5 sm:py-4  rounded-lg text-[13px] sm:text-[16px] font-semibold text-white border-none  ${
            allCategory.includes(
              "Motherboard" &&
                "CPU/Processor" &&
                "Ram" &&
                "Monitor" &&
                "Storage Device" &&
                "Power Supply Unit"
            )
              ? "bg-green-700 cursor-pointer"
              : "bg-slate-600 cursor-not-allowed "
          }`}
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default PC_Builder;

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.URL}/api/categories`);
  const categoriesData = await res.json();

  return {
    props: {
      categories: categoriesData.data,
    },
  };
};
