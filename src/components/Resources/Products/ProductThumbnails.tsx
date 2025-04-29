import { useState } from "react";
import Iphone from "../../../assets/img/products/img1.svg";
import Iphone2 from "../../../assets/img/products/img2.svg";
import Iphone3 from "../../../assets/img/products/img3.svg";
import Iphone4 from "../../../assets/img/products/img4.svg";

interface Props {
  customClass?: string;
}

const ProductDisplay: React.FC<Props> = ({ customClass }) => {
  const [image, setImage] = useState(Iphone);

  const thumbnails = [Iphone, Iphone2, Iphone3, Iphone4];

  return (
    <div
      className={`flex flex-col md:flex-row-reverse justify-center xl:justify-start items-center gap-2 pt-10 md:pt-0 xl:mr-auto ${customClass}`}
    >
      <img
        src={image}
        alt="Iphone"
        className="w-[263px] h-[329.24px] md:h-[516px] md:w-[413.12px] mx-auto md:mx-0 object-cover"
      />

      <div className="grid grid-cols-4 gap-2.5 md:flex md:flex-col md:gap-1">
        {thumbnails.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="Iphone"
            className={`w-[74.26px] h-[66.34px] md:w-[74.88px] md:h-[93px] cursor-pointer transition-all ${
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
