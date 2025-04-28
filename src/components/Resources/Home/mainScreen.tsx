import Header from "../../Navigation/Header";
import Btn from "../../Ui/Btn";
import homeIphone from "../../../assets/img/home-iphone.svg";
import homeIphone2 from "../../../assets/img/home-iphone-desktop.svg";
import { useNavigate } from "react-router";

const mainScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-primary">
        <Header />
        <div className="h-screen md:h-[720px] lg:h-[632px] xl:h-[720px] relative flex lg:flex-row-reverse items-center justify-center lg:justify-start container">
          <img
            className="absolute lg:hidden bottom-0 left-1/2 transform -translate-x-1/2 max-w-[343px] max-h-[289px]"
            src={homeIphone}
            alt="Home Iphone"
          />

          <img
            className="lg:flex hidden max-w-[343px] max-h-[632px] xl:max-w-[406px] xl:max-h-[600px] absolute bottom-0 transform "
            src={homeIphone2}
            alt="Home Iphone"
          />

          <div className="flex gap-2.5 xl:gap-3.5 flex-col items-center justify-center md:items-center lg:items-start lg:mr-auto lg:pt-12  relative z-10">
            <p className="font-semibold leading-8 text-lg xl:text-[25px] text-[#909090]">
              Pro.Beyond.
            </p>
            <p className="text-center text-white text-6xl xl:text-8xl">
              <span className="font-thin ">IPhone 14</span>{" "}
              <br className="md:hidden" />
              <span className="font-semibold">Pro</span>
            </p>
            <p className="font-medium text-lg leading-6 text-[#909090] text-center">
              Created to change everything for the better. For everyone
            </p>
            <Btn
              onClick={() => navigate("/product")}
              customClass="mt-4"
              label="Shop Now"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default mainScreen;
