import SummerSaleBannerMobile from "../../../assets/img/summer-sale-mobile.svg";
import Btn from "../../Ui/Btn";

const HomeSummerSales = () => {
  return (
    <>
      <div className="section relative h-[512px] flex justify-center items-center">
        {/* Mobile Background Image */}
        <img
          src={SummerSaleBannerMobile}
          alt="Summer Sale"
          className="w-full h-full object-cover absolute top-0 left-0 md:hidden"
        />

        <div className="z-10 relative flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl text-white font-light">Big Summer</h2>
          <h2 className="text-5xl text-white mt-3">Sale</h2>
          <p className="text-[#787878] mt-4">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <Btn customClass="!mt-8 !bg-[#353535]" label="Shop Now" />
        </div>
      </div>
    </>
  );
};

export default HomeSummerSales;
