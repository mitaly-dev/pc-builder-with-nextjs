import Banner from "@/components/Banner";
import RootLayout from "@/components/layout/RootLayout";

const Home = () => {
  return (
    <div className="text-red-600 ">
      <Banner />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
