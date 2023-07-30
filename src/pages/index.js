import Banner from "@/components/Banner";
import Categories from "./categories";
import FeaturedProduct from "./featuredProduct";
import Footer from "@/components/Footer";

const Home = ({ categories, featured }) => {
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
  const res1 = await fetch(`${process.env.URL}/api/categories`);
  const res2 = await fetch(`${process.env.URL}/api/featured`);
  const categoriesData = await res1.json();
  const featuredData = await res2.json();

  return {
    props: {
      categories: categoriesData.data,
      featured: featuredData.data,
    },
  };
};
