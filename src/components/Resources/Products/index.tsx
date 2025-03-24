import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Btn from "../../Ui/Btn";
import useTruncateText from "../../../composables/useTruncateText";

interface ProductProps {
  image: string;
  title: string;
  description: string;
  subTitle?: string;
  customClass?: string;
  bgColor?: string;
  customTitle?: any;
  customSubTitle?: any;
  customDescription?: any;
  customImage?: any;
  btn?: boolean;
  customBtn?: any;
  btnLabel?: string;
  showLike?: boolean;
  truncateTitle?: boolean;
  truncateLimit?: number;
}

const Product: React.FC<ProductProps> = ({
  image,
  title,
  subTitle,
  description,
  customClass,
  bgColor,
  customTitle,
  customSubTitle,
  customDescription,
  customImage,
  btn,
  customBtn,
  btnLabel,
  showLike,
  truncateTitle,
  truncateLimit,
}) => {
  const [like, setLike] = useState(false);
  const { truncateText } = useTruncateText();

  return (
    <>
      <div
        className={`py-10 px-4 flex justify-center items-center flex-col relative ${customClass} ${
          showLike && "!pt-12"
        }`}
        style={{ background: bgColor || "white" }}
      >
        {showLike && (
          <div className="absolute top-3 right-3">
            {like ? (
              <FaHeart
                onClick={() => setLike(!like)}
                className="h-5 w-5 text-red-500"
              />
            ) : (
              <FaRegHeart
                onClick={() => setLike(!like)}
                className="h-5 w-5 text-gray"
              />
            )}
          </div>
        )}
        <img className={`${customImage}`} src={image} alt="image" />
        <p
          className={`${customTitle} text-[34px] font-light  mt-2 text-center`}
        >
          {truncateTitle ? truncateText(title, truncateLimit || 0) : title}{" "}
          <span className={`${customSubTitle} font-medium`}>{subTitle}</span>
        </p>
        <p className={`${customDescription}text-gray text-center `}>
          {description}
        </p>
        {btn && (
          <Btn
            onClick={() => console.log("clicked")}
            customClass={`mt-4 w-full !bg-transparent !border !border-black !text-black ${customBtn}`}
            label={btnLabel || `Shop Now`}
          />
        )}
      </div>
    </>
  );
};

export default Product;
