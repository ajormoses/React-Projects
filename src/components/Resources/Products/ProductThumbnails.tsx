import { useState } from "react";
import Iphone from "../../../assets/img/products/img1.svg";
import Iphone2 from "../../../assets/img/products/img2.svg";
import Iphone3 from "../../../assets/img/products/img3.svg";
import Iphone4 from "../../../assets/img/products/img4.svg";

const ProductDisplay = () => {
  const [image, setImage] = useState(Iphone);

  const thumbnails = [Iphone, Iphone2, Iphone3, Iphone4];

  return (
    <div className="flex flex-col justify-center items-center gap-2 pt-10">
      <img
        src={image}
        alt="Iphone"
        className="w-[263px] h-[329.24px] mx-auto"
      />

      <div className="grid grid-cols-4 gap-2.5">
        {thumbnails.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="Iphone"
            className={`w-[74.26px] h-[66.34px] cursor-pointer transition-all ${
              image === item ? "border-2 border-blue-500 rounded-md" : ""
            }`}
            onClick={() => setImage(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
