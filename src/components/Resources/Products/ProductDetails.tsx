import { useState } from "react";
import ProductThumbnails from "./ProductThumbnails";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const colors = ["#000000", "#781DBC", "#E10000", "#E1B000", "#E8E8E8"];

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
      </div>
    </>
  );
};

export default ProductDetails;
