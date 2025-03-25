import MainScreen from "./mainScreen";
import HomeCategory from "./HomeCategory";
import HomeProducts from "./HomeProducts";
import HomeSell from "./HomeSell";
import HomeAds from "./HomeAds";
import HomeDiscount from "./HomeDiscount";
import HomeSummerSales from "./HomeSummerSales";
import Footer from "../../Navigation/Footer";

const Home = () => {
  return (
    <>
      <MainScreen />
      <HomeProducts />
      <HomeCategory />
      <HomeSell />
      <HomeAds />
      <HomeDiscount />
      <HomeSummerSales />
      <Footer />
    </>
  );
};

export default Home;
