import Product from "../Products/ProductInfo";
import Airpod from "../../../assets/img/airpod.svg";
import AppleVision from "../../../assets/img/apple-vision.svg";
import PlayStation from "../../../assets/img/play-station.svg";
import Macbook from "../../../assets/img/macbook.svg";

const HomeProducts = () => {
  const products: {
    image: string;
    title: string;
    subTitle: string;
    description: string;
    bgColor?: string;
  }[] = [
    {
      image: Airpod,
      title: "Apple AirPods",
      subTitle: "Max",
      description: "Computational audio. Listen, it's powerful",
    },
    {
      image: AppleVision,
      title: "Apple Vision",
      subTitle: "Pro",
      description: "An immersive way to experience entertainment",
      bgColor: "#353535",
    },
    {
      image: PlayStation,
      title: "Playstation",
      subTitle: "5",
      description:
        "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
    },
    {
      image: Macbook,
      title: "Macbook",
      subTitle: "Air",
      description:
        "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
      bgColor: "#EDEDED",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        {products.map((product, index) => (
          <Product
            key={index}
            customSubTitle={index === 3 ? "!font-light" : ""}
            customTitle={index === 3 ? "!font-medium" : ""}
            btn={index === 3}
            image={product.image}
            title={product.title}
            subTitle={product.subTitle}
            description={product.description}
            bgColor={product.bgColor}
            customBtn="!bg-transparent !border !border-black !text-black"
          />
        ))}
      </div>
    </>
  );
};

export default HomeProducts;
