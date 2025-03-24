import Header from "../../Navigation/Header";
import Btn from "../../Ui/Btn";
import homeIphone from "../../../assets/img/home-iphone.svg";

const mainScreen = () => {
  return (
    <>
      <div className="h-screen relative px-4 pt-8 md:flex md:tems-center md:justify-center bg-primary">
        <Header />
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-[343px] max-h-[289px]"
          src={homeIphone}
          alt="Home Iphone"
        />

        <div className="flex gap-2.5 flex-col items-center justify-center mt-[90px] md:mt-0 relative z-10">
          <p className="font-semibold leading-8 text-lg text-[#909090]">
            Pro.Beyond.
          </p>
          <p className="text-center text-white text-6xl">
            <span className="font-extralight ">IPhone 14</span> <br />
            <span className="font-semibold">Pro</span>
          </p>
          <p className="font-medium text-lg leading-6 text-[#909090] text-center">
            Created to change everything for the better. For everyone
          </p>
          <Btn customClass="mt-4" label="Shop Now" />
        </div>
      </div>
    </>
  );
};

export default mainScreen;
