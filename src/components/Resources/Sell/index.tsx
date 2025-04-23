import { ReactNode } from "react";
import clsx from "clsx";
import Product from "../Products/ProductInfo";

interface Props {
  products: {
    title: string;
    description: string;
    image: string;
  }[];
  customClass?: string;
  customTitle?: string;
  customDescription?: string;
  customBtn?: string;
  customImage?: string;
  truncateTitle?: boolean;
  truncateLimit?: number;
  showLike?: boolean;
  btnLabel?: string;
  btn?: boolean;
  bgColor?: string;
  header?: ReactNode; // Slot equivalent
  customSell?: string;
}

const HomeSell: React.FC<Props> = ({
  products,
  customClass,
  customTitle,
  customDescription,
  customBtn,
  customImage,
  truncateLimit,
  truncateTitle,
  showLike,
  btnLabel,
  btn,
  bgColor,
  header, // Accept slot content
  customSell,
}) => {
  return (
    <div className={clsx(`section ${customSell}`)}>
      {header && <>{header}</>} {/* Slot Content Here */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-6">
        {products.map((product, index) => (
          <Product
            key={index}
            btn={btn}
            showLike={showLike}
            truncateTitle={truncateTitle}
            customClass={customClass}
            customTitle={customTitle}
            customDescription={customDescription}
            customBtn={customBtn}
            customImage={customImage}
            title={product.title}
            truncateLimit={truncateLimit}
            description={product.description}
            bgColor={bgColor}
            image={product.image}
            btnLabel={btnLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSell;
