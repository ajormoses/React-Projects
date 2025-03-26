import { useState } from "react";
import ProductThumbnails from "./ProductThumbnails";
import Btn from "../../Ui/Btn";
import screensize from "../../../assets/img/icon/screensize.svg";
import cpu from "../../../assets/img/icon/cpu.svg";
import core from "../../../assets/img/icon/core.svg";
import mainCamera from "../../../assets/img/icon/main-camera.svg";
import frontCamera from "../../../assets/img/icon/front-camera.svg";
import battery from "../../../assets/img/icon/battery.svg";

const ProductDetails = () => {
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

  return (
    <>
      <div className="flex flex-col gap-4 section bg-white">
        <ProductThumbnails />
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
          <p className="text-[#0C0C0C] text-[15px] leading-6">Select Color :</p>
          <div className="flex gap-2">
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
        <div className="grid grid-cols-4 gap-2.5 ">
          {dataStorage.map((storage, index) => (
            <div
              key={index}
              className="py-4 px-6 rounded-lg cursor-pointer transition-all h-12 w-[79.25px] flex items-center justify-center"
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
                  color: selectedStorage === storage ? "#000000" : "#D5D5D5",
                }}
              >
                {storage}
              </p>
            </div>
          ))}
        </div>
        {/* Product Info  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
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
            className="underline"
            onClick={() =>
              setSelectedText(
                selectedText === text ? text + " " + "product management" : text
              )
            }
          >
            {selectedText === text ? "More.." : "Less.."}
          </span>
        </p>

        {/* Add to wishlist and card buttons */}
        <div className="flex flex-col gap-4">
          <Btn
            label="Add to Wishlist"
            customClass="bg-white font-medium border !border-primary !text-primary"
          />
          <Btn label="Add to Card" />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
