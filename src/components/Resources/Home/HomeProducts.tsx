import Product from "../Products/ProductInfo";
import Airpod from "../../../assets/img/airpod.svg";
import AppleVision from "../../../assets/img/apple-vision.svg";
import PlayStation from "../../../assets/img/play-station.svg";
import Macbook from "../../../assets/img/macbook.svg";
import Btn from "../../Ui/Btn";
import { useNavigate } from "react-router";

const HomeProducts = () => {
  const navigate = useNavigate();

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
            customClass="xl:hidden"
            key={index}
            customSubTitle={index === 3 ? "!font-light" : ""}
            customTitle={index === 3 ? "!font-medium" : ""}
            btn={index === 3}
            image={product.image}
            title={product.title}
            subTitle={product.subTitle}
            description={product.description}
            bgColor={product.bgColor}
            customBtn="!bg-transparent !border !border-black !text-black md:!w-[191px]"
          />
        ))}

        <div className="hidden xl:grid xl:grid-cols-2  2xl:w-[1500px] m-auto">
          {/* First 3 products in a single grid container */}
          <div className="grid grid-cols-2 ">
            {products[2] && (
              <div className="col-span-2 flex flex-col justify-center items-end h-[328px] max-w-[650px] relative overflow-hidden">
                <img
                  className="w-[360px] h-[343px] object-cover absolute top-0 -left-[90px]"
                  src={products[2].image}
                  alt="image"
                />

                <div className="flex flex-col justify-center items-start max-w-[338px]">
                  <p className="text-[49px] font-medium">
                    {products[2].title + " " + products[2].subTitle}
                  </p>
                  <p className="text-gray text-sm">{products[2].description}</p>
                </div>
              </div>
            )}

            {/* Items at index 0 and 1 below in two columns */}
            {[products[0], products[1]].map(
              (product, index) =>
                product && (
                  <div
                    key={index}
                    className={`${
                      index === 0 ? "bg-lightGray " : "bg-darkGray "
                    }`}
                  >
                    <div
                      className={`flex flex-col justify-center items-end h-[272px] max-w-[360px] relative overflow-hidden `}
                    >
                      <img
                        className={`h-[272px] absolute top-0 ${
                          index === 0 ? "-left-[160px]" : "-left-[180px]"
                        } `}
                        src={product.image}
                        alt="image"
                      />
                      <div className="flex flex-col justify-center items-center w-[160px] mr-5">
                        <p
                          className={`text-[29px] font-light ${
                            index === 0 ? "text-black" : "text-white"
                          }`}
                        >
                          {product.title}{" "}
                          <span className="font-medium">
                            {product.subTitle}
                          </span>
                        </p>
                        <p className="text-gray text-sm">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Remaining products */}
          <div className="grid grid-cols-1 gap-4">
            {products?.slice(3).map((product, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-lightGray relative pl-10 overflow-hidden"
              >
                <div className="grid grid-cols-2 place-items-center">
                  <img
                    className="w-[90%] h-[470px] object-cover absolute top-1/2 -right-[300px]  -translate-y-1/2"
                    src={product.image}
                    alt="image"
                  />
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-[64px] font-thin leading-tight">
                      {product.title}{" "}
                      <span className="font-medium">{product.subTitle}</span>
                    </p>
                    <p className="text-gray text-sm">{product.description}</p>
                    <Btn
                      onClick={() => navigate("/product")}
                      customClass="mt-4 w-[191px] !bg-transparent !border !border-black !text-black"
                      label="Shop Now"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProducts;
