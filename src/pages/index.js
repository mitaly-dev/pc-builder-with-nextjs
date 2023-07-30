import Banner from "@/components/Banner";
import Categories from "./categories";
import FeaturedProduct from "./featuredProduct";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer";

const Home = ({ categories, featured }) => {
  const { data: session } = useSession();

  return (
    <div>
      <Banner />
      <FeaturedProduct featured={featured} />
      <Categories categories={categories} />
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res1 = await fetch("http://localhost:3000/api/categories");
  const res2 = await fetch("http://localhost:3000/api/featured");
  const categoriesData = await res1.json();
  const featuredData = await res2.json();

  return {
    props: {
      categories: categoriesData.data,
      featured: featuredData.data,
    },
  };
};
