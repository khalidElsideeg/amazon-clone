import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-full -mt-10 xl:-mt-32 py-10">
        <Products />
      </div>
    </div>
  );
};

export default Home;
