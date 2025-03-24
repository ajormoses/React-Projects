import Slider from "../../Ui/ProductSlider";
import IphonePro from "../../../assets/img/iphone-pro.svg";
import Airpod from "../../../assets/img/airpod.svg";
import AppleVision from "../../../assets/img/apple-vision.svg";
import PlayStation from "../../../assets/img/play-station.svg";

const HomeAds = () => {
  const slides = [
    {
      title: "Ipad Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: IphonePro,
    },
    {
      title: "Airpod Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: Airpod,
    },
    {
      title: "Apple Vision",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: AppleVision,
    },
    {
      title: "PlayStation 5",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: PlayStation,
    },
  ];
  return (
    <>
      <div className="section bg-secLightGray ">
        <Slider
          slides={slides}
          customImage="!w-[321px] !h-[331px]"
          customDescription="!font-medium !text-sm !text-gray"
        />
      </div>
    </>
  );
};

export default HomeAds;
