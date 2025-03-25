import MainScreen from "../components/Resources/Home/mainScreen";
import HomeCategory from "../components/Resources/Home/HomeCategory";
import HomeProducts from "../components/Resources/Home/HomeProducts";
import HomeSell from "../components/Resources/Home/HomeSell";
import HomeAds from "../components/Resources/Home/HomeAds";
import HomeDiscount from "../components/Resources/Home/HomeDiscount";
import HomeSummerSales from "../components/Resources/Home/HomeSummerSales";
import Footer from "../components/Navigation/Footer";

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
