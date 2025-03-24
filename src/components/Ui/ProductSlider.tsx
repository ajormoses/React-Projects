// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../Resources/Products";

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
  return (
    <>
      <Swiper
        key={Date.now()} // Force update on component render
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
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
              customBtn="!max-w-[191px]"
              customImage={customImage}
              customDescription={customDescription}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
