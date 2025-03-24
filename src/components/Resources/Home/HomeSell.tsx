import ResourceSell from "../../Resources/Sell";
import TabSwitcher from "../../Ui/TabSwitcher";
import img1 from "../../../assets/img/newArrivals/img1.svg";
import img2 from "../../../assets/img/newArrivals/img2.svg";
import img3 from "../../../assets/img/newArrivals/img3.svg";
import img4 from "../../../assets/img/newArrivals/img4.svg";
import img5 from "../../../assets/img/newArrivals/img5.svg";
import img6 from "../../../assets/img/newArrivals/img6.svg";
import img7 from "../../../assets/img/newArrivals/img7.svg";
import img8 from "../../../assets/img/newArrivals/img8.svg";

const HomeSell = () => {
  const tabs = [
    { title: "New Arrival", isActive: true },
    { title: "Bestseller", isActive: false },
    { title: "Featured Products", isActive: false },
  ];

  const products: {
    title: string;
    description: string;
    image: string;
  }[] = [
    {
      title: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      description: "$900",
      image: img1,
    },
    {
      title: "Blackmagic Pocket Cinema Camera 6k",
      description: "$2535",
      image: img2,
    },
    {
      title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      description: "$399",
      image: img3,
    },
    {
      title: "AirPods Max Silver",
      description: "$549",
      image: img4,
    },
    {
      title: "Samsung Galaxy Watch6 Classic 47mm Black",
      description: "$369",
      image: img5,
    },
    {
      title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      description: "$1799",
      image: img6,
    },
    {
      title: "Galaxy Buds FE Graphite",
      description: "$99.99",
      image: img7,
    },
    {
      title: `Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`,
      description: "$398",
      image: img8,
    },
  ];
  return (
    <>
      <ResourceSell
        products={products}
        header={<TabSwitcher items={tabs} />}
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

export default HomeSell;
