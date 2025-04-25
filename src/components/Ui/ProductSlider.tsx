// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../Resources/Products/ProductInfo";
import { useMediaQuery } from "../../composables/useMediaQuery";
import { useCallback } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Props {
  slides: {
    title: string;
    description: string;
    image: string;
  }[];
  customImage?: string;
  customDescription?: string;
}

const Slider: React.FC<Props> = ({
  slides,
  customImage,
  customDescription,
}) => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1200px)");

  const mediaQuerySlide = isXl ? 4 : isLg ? 3 : isMd ? 2 : 1;
  const mediaQuerySpace = isMd ? 0 : 50;

  const mediaQueryClass = (index: number) => {
    if (!isMd) return "";

    const pad = "!py-[56px] !px-[32px]";
    const bgColors = [
      "!bg-[#FFFFFF]",
      "!bg-[#F9F9F9]",
      "!bg-[#EAEAEA]",
      "!bg-[#2C2C2C]",
    ];

    return `${bgColors[index] || "!bg-[#FFFFFF]"} ${pad}`;
  };
  return (
    <>
      <Swiper
        key={Date.now()} // Force update on component render
        modules={[Pagination, Autoplay]}
        spaceBetween={mediaQuerySpace}
        slidesPerView={mediaQuerySlide}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Product
              title={slide.title}
              description={slide.description}
              image={slide.image}
              bgColor="transparent"
              btn
              customBtn={`!max-w-[191px] ${
                slides.length - 1 === index
                  ? "md:!bg-[#2C2C2C]"
                  : "md:!bg-transparent md:!border md:!border-black md:!text-black"
              }`}
              customImage={customImage}
              customDescription={`${customDescription} md:!text-left`}
              customClass={`${mediaQueryClass(index)} md:!items-start`}
              customTitle={`${slides.length - 1 === index && "md:!text-white"}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
