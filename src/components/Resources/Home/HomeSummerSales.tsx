import SummerSaleBannerMobile from "../../../assets/img/summer-sale-mobile.svg";
import SummerSaleBannerDesktop from "../../../assets/img/summer-sale-desktop.svg";
import { useMediaQuery } from "../../../composables/useMediaQuery";
import { useNavigate } from "react-router";

import Btn from "../../Ui/Btn";

const HomeSummerSales = () => {
  const navigate = useNavigate();
  const isMdUp = useMediaQuery("(min-width: 768px)"); // md in Tailwind

  const backgroundImage = isMdUp
    ? SummerSaleBannerDesktop
    : SummerSaleBannerMobile;

  return (
    <>
      <div className="section 2xl:w-[1500px] m-auto relative h-[512px] flex justify-center items-center">
        {/* Mobile Background Image */}
        <img
          src={backgroundImage}
          alt="Summer Sale"
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        <div className="z-10 relative flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl text-white font-light">
            Big Summer <span className="hidden md:inline-flex">Sale</span>
          </h2>
          <h2 className="text-5xl text-white mt-3 md:hidden">Sale</h2>
          <p className="text-[#787878] mt-4">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <Btn
            onClick={() => navigate("/product")}
            customClass="!mt-8 !bg-[#353535]"
            label="Shop Now"
          />
        </div>
      </div>
    </>
  );
};

export default HomeSummerSales;
