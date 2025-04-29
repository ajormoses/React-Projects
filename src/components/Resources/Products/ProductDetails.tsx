import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router";
import clsx from "clsx";
import ProductThumbnails from "./ProductThumbnails";
import ProductReviews from "./ProductReviews";
import Btn from "../../Ui/Btn";
import screensize from "../../../assets/img/icon/screensize.svg";
import cpu from "../../../assets/img/icon/cpu.svg";
import core from "../../../assets/img/icon/core.svg";
import mainCamera from "../../../assets/img/icon/main-camera.svg";
import frontCamera from "../../../assets/img/icon/front-camera.svg";
import battery from "../../../assets/img/icon/battery.svg";
import delivery from "../../../assets/img/icon/delivery.svg";
import stock from "../../../assets/img/icon/stock.svg";
import guarantee from "../../../assets/img/icon/guaranteed.svg";
import RelatedProducts from "./RelatedProducts";
import UiBreadCrumbs from "../../Ui/BreadCrumbs";

const ProductDetails = () => {
  const navigate = useNavigate();

  const text: string =
    "Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras";
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedText, setSelectedText] = useState(text);

  const colors: string[] = [
    "#000000",
    "#781DBC",
    "#E10000",
    "#E1B000",
    "#E8E8E8",
  ];

  const dataStorage: string[] = ["128GB", "256GB", "512GB", "1TB"];

  const infos: {
    icon: string;
    title: string;
    subTitle: string;
  }[] = [
    {
      icon: screensize,
      title: "Screen size",
      subTitle: "6.7",
    },
    {
      icon: cpu,
      title: "CPU",
      subTitle: "Apple A16 Bionic",
    },
    {
      icon: core,
      title: "Number of Cores",
      subTitle: "6",
    },
    {
      icon: mainCamera,
      title: "Main camera",
      subTitle: "48-12 -12 MP",
    },
    {
      icon: frontCamera,
      title: "Front-camera",
      subTitle: "12 MP",
    },
    {
      icon: battery,
      title: "Battery Capacity",
      subTitle: "4323 mAh",
    },
  ];

  const productStats: {
    title: string;
    info: string;
    icon: string;
  }[] = [
    {
      title: "Free Delivery",
      info: "1-2 day",
      icon: delivery,
    },
    {
      title: "In Stock",
      info: "Today",
      icon: stock,
    },
    {
      title: "Guaranteed",
      info: "1 year",
      icon: guarantee,
    },
  ];

  const screenDetails: {
    header?: string;
    title: string;
    info: string;
  }[] = [
    {
      title: "Screen diagonal",
      info: "6.7'",
    },
    {
      title: "The Screen resolution",
      info: "2796x1290",
    },
    {
      title: "The Screen refresh rate",
      info: "120 Hz",
    },
    {
      title: "The Pixel density",
      info: "460 ppi",
    },
    {
      title: "Screen type",
      info: "OLED",
    },
    {
      title: "Additionally",
      info: "Dynamic Island Always-On display HDR display True Tone Wide color (P3)",
    },
    {
      header: "CPU",
      title: "CPU",
      info: "A16 Bionic",
    },
    {
      title: "Number of Cores",
      info: "6",
    },
  ];

  // BreadCrumbs
  const breadCrumbs = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Catalog",
    },
    {
      label: "smartphones",
    },
    {
      label: "Apple",
    },
    {
      label: "iPhone 14 Pro Max",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="section bg-white container !px-0">
          <UiBreadCrumbs
            items={breadCrumbs}
            customClass="!hidden md:!flex pt-4"
          />
          <div className="flex flex-col xl:grid xl:grid-cols-2 gap-4 md:pt-16 ">
            <ProductThumbnails />
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[40px] text-black leading-10 mt-4">
                Apple iPhone 14 Pro Max
              </p>
              <p className="flex gap-x-3 items-center">
                <span className="text-black text-[32px] leading-[48px] font-medium ">
                  $1399
                </span>
                <span className="text-2xl leading-8 text-[#A0A0A0] line-through">
                  $1499
                </span>
              </p>
              {/* Product Color */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <p className="text-[#0C0C0C] text-[15px] leading-6">
                  Select Color :
                </p>
                <div className="flex gap-2 md:gap-0">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className="p-1 rounded-full cursor-pointer transition-all"
                      style={{
                        border:
                          selectedColor === color
                            ? `1.5px solid ${color}`
                            : "1.5px solid transparent",
                      }}
                      onClick={() => setSelectedColor(color)}
                    >
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Product Storage */}
              <div className="grid grid-cols-4 gap-2.5 md:gap-4">
                {dataStorage.map((storage, index) => (
                  <div
                    key={index}
                    className="py-4 px-6 rounded-lg cursor-pointer transition-all h-12 flex items-center justify-center"
                    style={{
                      border:
                        selectedStorage === storage
                          ? `1.5px solid #000000`
                          : "1.5px solid #D5D5D5",
                    }}
                    onClick={() => setSelectedStorage(storage)}
                  >
                    <p
                      className="text-sm"
                      style={{
                        color:
                          selectedStorage === storage ? "#000000" : "#D5D5D5",
                      }}
                    >
                      {storage}
                    </p>
                  </div>
                ))}
              </div>
              {/* Product Info  */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                {infos.map((info, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center bg-[#F4F4F4] rounded-[7px] py-4 px-2 h-16"
                  >
                    <img className="w-6 h-6" src={info.icon} alt="icon" />
                    <div className=" text-sm leading-6 flex flex-col gap-0.5">
                      <p className="text-[#A0A0A0] ">{info.title}</p>
                      <p className="text-[#0C0C0C]">{info.subTitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-priGray text-sm">
                {selectedText + " "}
                <span
                  className="underline cursor-pointer"
                  onClick={() =>
                    setSelectedText(
                      selectedText === text
                        ? text + " " + "product management"
                        : text
                    )
                  }
                >
                  {selectedText === text ? "more.." : "less.."}
                </span>
              </p>

              {/* Add to wishlist and card buttons */}
              <div className="flex flex-col gap-4 md:flex-row md:mt-2">
                <Btn
                  onClick={() => navigate("/shopping-carts")}
                  label="Add to Wishlist"
                  customClass="bg-white font-medium border !border-primary !text-primary md:!w-full"
                />
                <Btn
                  onClick={() => navigate("/shopping-carts")}
                  label="Add to Cart"
                  customClass="md:!w-full"
                />
              </div>

              {/* Product Stats */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {productStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center md:flex-row md:gap-2.5"
                  >
                    <img src={stat.icon} />
                    <div className="flex flex-col items-center justify-center md:items-start">
                      <p className="text-[#717171] text-sm mt-3 md:mt-0">
                        {stat.title}
                      </p>
                      <p className="text-black text-sm">{stat.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-[#FAFAFA] section">
          <div className="bg-white rounded-lg section">
            <h1 className="font-medium leading-6 text-black text-2xl ">
              Details
            </h1>
            <p className="text-[#9D9D9D] text-sm leading-6 font-medium pt-8 pb-4">
              Just as a book is judged by its cover, the first thing you notice
              when you pick up a modern smartphone is the display. Nothing
              surprising, because advanced technologies allow you to practically
              level the display frames and cutouts for the front camera and
              speaker, leaving no room for bold design solutions. And how good
              that in such realities Apple everything is fine with displays.
              Both critics and mass consumers always praise the quality of the
              picture provided by the products of the Californian brand. And
              last year's 6.7-inch Retina panels, which had ProMotion, caused
              real admiration for many.
            </p>
            <h1 className="font-medium leading-6 text-black text-xl py-4">
              Screen
            </h1>
            <div className="flex flex-col gap-4">
              {screenDetails.map((detail, index) => (
                <div className="flex flex-col gap-4" key={index}>
                  {detail.header && (
                    <h1 className="font-medium leading-6 text-black text-xl mt-4">
                      {detail.header}
                    </h1>
                  )}
                  <div className="grid grid-cols-2 pb-1 border-b-[0.5px] border-b-[#CDCDCD]">
                    <p className="text-[#9D9D9D] text-sm leading-6 font-medium">
                      {detail.title}
                    </p>
                    <p className="text-black text-sm leading-6 ml-auto text-right">
                      {detail.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Btn
              appendIcon={<IoIosArrowDown />}
              label="View More"
              customClass={clsx(
                `!bg-transparent !text-sm !flex !item-center !justify-center !mx-auto !rounded-lg font-medium mt-8 !bg-white !text-black !border !border-black !py-[12px] !px-[36px] !max-w-[230px]`
              )}
            />
          </div>
        </div>

        {/* Product Review  and Related Products */}
        <div className="bg-white section">
          <ProductReviews />
        </div>

        <div className="bg-white container">
          <RelatedProducts />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
