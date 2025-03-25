import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Btn from "../../Ui/Btn";
import useTruncateText from "../../../composables/useTruncateText";
import { useNavigate } from "react-router";
import clsx from "clsx";

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
  const navigate = useNavigate();

  return (
    <>
      <div
        className={clsx(
          `py-10 px-4 flex justify-center items-center flex-col relative ${
            showLike && "!pt-12"
          }`,
          customClass
        )}
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
        <img className={clsx(customImage)} src={image} alt="image" />
        <p
          className={clsx(
            ` text-[34px] font-light  mt-2 text-center`,
            customTitle
          )}
        >
          {truncateTitle ? truncateText(title, truncateLimit || 0) : title}{" "}
          <span className={clsx(`font-medium`, customSubTitle)}>
            {subTitle}
          </span>
        </p>
        <p className={clsx(`text-gray text-center`, customDescription)}>
          {description}
        </p>
        {btn && (
          <Btn
            onClick={() => navigate("/product")}
            customClass={clsx(
              `mt-4 w-full bg-transparent border border-black text-black`,
              customBtn
            )}
            label={btnLabel || `Shop Now`}
          />
        )}
      </div>
    </>
  );
};

export default Product;
