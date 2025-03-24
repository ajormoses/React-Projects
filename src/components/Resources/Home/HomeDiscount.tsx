import ResourceSell from "../../Resources/Sell";
import img1 from "../../../assets/img/newArrivals/img1.svg";
import img2 from "../../../assets/img/iphone14.svg";
import img3 from "../../../assets/img/newArrivals/img3.svg";
import img4 from "../../../assets/img/newArrivals/img4.svg";

const HomeDiscount = () => {
  const products: {
    title: string;
    description: string;
    image: string;
  }[] = [
    {
      title: "Apple iPhone 14 Pro 512GB Gold (MQ233))",
      description: "$900",
      image: img2,
    },
    {
      title: "AirPods Max Silver",
      description: "$2535",
      image: img4,
    },
    {
      title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      description: "$399",
      image: img3,
    },
    {
      title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      description: "$549",
      image: img1,
    },
  ];
  return (
    <>
      <ResourceSell
        products={products}
        header={
          <h2 className="text-2xl font-medium text-primary">
            Discounts up to -50%
          </h2>
        }
        btn
        showLike
        truncateTitle
        customClass="!rounded-[9px] !py-6 !px-3"
        customTitle="!text-base !mb-3"
        customDescription="!text-2xl !font-medium"
        customBtn="!h-[48px] !py-3 !px-0 !rounded-lg !text-sm !bg-[#211C24] !text-white"
        customImage="!h-[104px] !w-[104px]"
        truncateLimit={30}
        bgColor="#F6F6F6"
        btnLabel="Buy Now"
      />
    </>
  );
};

export default HomeDiscount;
