import ResourceSell from "../../Resources/Sell";
import UiDropdown from "../../Ui/Dropdown";
import img1 from "../../../assets/img/newArrivals/img1.svg";
import img2 from "../../../assets/img/iphone14.svg";
import img3 from "../../../assets/img/newArrivals/img3.svg";
import img4 from "../../../assets/img/newArrivals/img4.svg";
import FilterIcon from "../../../assets/img/Filters.svg";

const HomeFilters = () => {
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

  const ratings = [
    { label: "1 Star", value: "1" },
    { label: "2 Stars", value: "2" },
    { label: "3 Stars", value: "3" },
    { label: "4 Stars", value: "4" },
    { label: "5 Stars", value: "5" },
  ];

  return (
    <>
      <div className="flex flex-col gap-6 section">
        <div className="grid grid-cols-2 gap-4 items-center pt-20">
          <div className="border-[0.5px] border-[#D4D4D4] rounded-lg p-2 flex justify-between items-center">
            <p className="text-sm">Filters</p>
            <img src={FilterIcon} alt={FilterIcon} />
          </div>
          <UiDropdown options={ratings} placeholder="By Rating" showClear />
        </div>

        <ResourceSell
          customSell="!p-0"
          products={products}
          header={
            <p>
              <span className="text-priGray">Product Result:</span> <b>85</b>
            </p>
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
      </div>
    </>
  );
};

export default HomeFilters;
