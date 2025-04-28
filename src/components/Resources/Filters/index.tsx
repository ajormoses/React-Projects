import ResourceSell from "../../Resources/Sell";
import UiDropdown from "../../Ui/Dropdown";
import img1 from "../../../assets/img/iphone14.svg";
import img2 from "../../../assets/img/newArrivals/iphonePro1.svg";
import img3 from "../../../assets/img/newArrivals/iphonePro2.svg";
import img4 from "../../../assets/img/newArrivals/iphonePro3.svg";
import img5 from "../../../assets/img/newArrivals/iphonePro4.svg";
import img6 from "../../../assets/img/newArrivals/iphonePro5.svg";
import FilterIcon from "../../../assets/img/Filters.svg";
import UiSideSheet from "../../Ui/SideSheet";
import UiAccordion from "../../Ui/Accordion";
import UiSearch from "../../Ui/Search";
import { useState } from "react";
import UiDualSlider from "../../Ui/DialSlider";
import UiSideSheetAction from "../../Ui/SideSheetAction";
import Btn from "../../Ui/Btn";
import UiPagination from "../../Ui/Pagination";
import UiBreadCrumbs from "../../Ui/BreadCrumbs";
import { useMediaQuery } from "../../../composables/useMediaQuery";
import { useLocation } from "react-router";

const HomeFilters = () => {
  const [visible, setVisible] = useState(false);

  const { search: searchQueryString } = useLocation();
  const queryParams = new URLSearchParams(searchQueryString);
  const search = queryParams.get("search");

  // Products
  const products: {
    title: string;
    description: string;
    image: string;
  }[] = [
    {
      title: "Apple iPhone 14 Pro 512GB Gold (MQ233))",
      description: "$1437",
      image: img1,
    },
    {
      title: "Apple iPhone 11 128GB White (MQ233)",
      description: "$510",
      image: img2,
    },
    {
      title: "Apple iPhone 11 128GB White (MQ233)",
      description: "$550",
      image: img2,
    },
    {
      title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      description: "$1499",
      image: img4,
    },
    {
      title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      description: "$1399",
      image: img1,
    },
    {
      title: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)",
      description: "$1600",
      image: img4,
    },

    {
      title: "Apple iPhone 13 mini 128GB Pink (MLK23)",
      description: "$850",
      image: img5,
    },
    {
      title: "Apple iPhone 14 Pro 256GB Space Black (MQ0T3)",
      description: "$1399",
      image: img6,
    },
    {
      title: "Apple iPhone 14 Pro 256GB Silver (MQ103)",
      description: "$1600",
      image: img3,
    },
  ];

  // Rating
  const ratings: {
    label: string;
    value: string;
  }[] = [
    { label: "4.5 Stars", value: "4.5" },
    { label: "4 Stars", value: "4" },
    { label: "3 Stars", value: "3" },
    { label: "2 Stars", value: "2" },
  ];

  //   Brand
  const brands: {
    label: string;
    value: number;
  }[] = [
    {
      label: "Apple",
      value: 110,
    },
    {
      label: "Samsung",
      value: 125,
    },
    {
      label: "Xiaomi",
      value: 68,
    },
    {
      label: "Poco",
      value: 44,
    },
    {
      label: "OPPO",
      value: 36,
    },
    {
      label: "Honor",
      value: 10,
    },
    {
      label: "Motorola",
      value: 34,
    },
    {
      label: "Nokia",
      value: 22,
    },
    {
      label: "Realme",
      value: 35,
    },
  ];

  // Built in memory
  const builtInMemory: {
    label: string;
    value: number;
  }[] = [
    { label: "16GB", value: 65 },
    { label: "32GB", value: 123 },
    { label: "64GB", value: 45 },
    { label: "128GB", value: 50 },
    { label: "256GB", value: 24 },
    { label: "512GB", value: 8 },
  ];

  // BreadCrumbs
  const breadCrumbs = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Catalog",
    },
    {
      label: search as string,
    },
  ];

  // Media query
  const isMdUp = useMediaQuery("(min-width: 768px)"); // md in Tailwind

  return (
    <>
      <div className="flex flex-col gap-6 section container">
        <div className="pt-16 md:pt-0">
          <div className="grid grid-cols-2 gap-4 items-center md:hidden ">
            <div
              onClick={() => setVisible(!visible)}
              className="border-[0.5px] border-[#D4D4D4] rounded-lg p-2 flex justify-between items-center cursor-pointer "
            >
              <p className="text-sm">Filters</p>
              <img src={FilterIcon} alt={FilterIcon} />
            </div>
            <UiDropdown options={ratings} placeholder="By Rating" showClear />
          </div>
          <UiBreadCrumbs
            items={breadCrumbs}
            customClass="!hidden md:!inline-flex"
          />
        </div>
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="hidden md:flex flex-col gap-4 w-full md:max-w-[200px] lg:max-w-[256px] md:sticky top-24 md:max-h-[calc(100vh-6rem)] md:overflow-y-auto no-scrollbar">
            {/* Brand */}
            <UiAccordion title="Brand">
              <div className="flex flex-col gap-3">
                <UiSearch />
                {brands.map((memory) => (
                  <div
                    key={memory.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={memory.label}
                      className="w-4 h-4 accent-primary"
                    />
                    <label
                      htmlFor={memory.label}
                      className="text-[15px] font-medium"
                    >
                      {memory.label}
                    </label>
                    <span className="text-xs text-priGray">{memory.value}</span>
                  </div>
                ))}
              </div>
            </UiAccordion>

            {/* Battery Capacity */}
            <UiAccordion title="Battery capacity">
              <div className="flex flex-col gap-3">
                <UiSearch />
                {builtInMemory.map((memory) => (
                  <div
                    key={memory.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={memory.label}
                      className="w-4 h-4 accent-primary"
                    />
                    <label
                      htmlFor={memory.label}
                      className="text-[15px] font-medium"
                    >
                      {memory.label}
                    </label>
                    <span className="text-xs text-priGray">{memory.value}</span>
                  </div>
                ))}
              </div>
            </UiAccordion>

            {/* Screen Type */}
            <UiAccordion title="Screen type">
              <div className="flex flex-col gap-3">
                <UiSearch />
                {builtInMemory.map((memory) => (
                  <div
                    key={memory.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={memory.label}
                      className="w-4 h-4 accent-primary"
                    />
                    <label
                      htmlFor={memory.label}
                      className="text-[15px] font-medium"
                    >
                      {memory.label}
                    </label>
                    <span className="text-xs text-priGray">{memory.value}</span>
                  </div>
                ))}
              </div>
            </UiAccordion>

            {/* Screen Diagonal */}
            <UiAccordion title="Screen diagonal">
              <div className="flex flex-col gap-3">
                <UiSearch />
                {builtInMemory.map((memory) => (
                  <div
                    key={memory.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={memory.label}
                      className="w-4 h-4 accent-primary"
                    />
                    <label
                      htmlFor={memory.label}
                      className="text-[15px] font-medium"
                    >
                      {memory.label}
                    </label>
                    <span className="text-xs text-priGray">{memory.value}</span>
                  </div>
                ))}
              </div>
            </UiAccordion>

            {/* Protection Class */}
            <UiAccordion title="Protection class">
              <div className="flex flex-col gap-3">
                <UiSearch />
                {builtInMemory.map((memory) => (
                  <div
                    key={memory.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={memory.label}
                      className="w-4 h-4 accent-primary"
                    />
                    <label
                      htmlFor={memory.label}
                      className="text-[15px] font-medium"
                    >
                      {memory.label}
                    </label>
                    <span className="text-xs text-priGray">{memory.value}</span>
                  </div>
                ))}
              </div>
            </UiAccordion>

            {/* Built-in memory */}
            <UiAccordion title="Built-in memory">
              <div className="flex flex-col gap-3">
                <UiSearch />
                {builtInMemory.map((memory) => (
                  <div
                    key={memory.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={memory.label}
                      className="w-4 h-4 accent-primary"
                    />
                    <label
                      htmlFor={memory.label}
                      className="text-[15px] font-medium"
                    >
                      {memory.label}
                    </label>
                    <span className="text-xs text-priGray">{memory.value}</span>
                  </div>
                ))}
              </div>
            </UiAccordion>
          </div>

          <div className="flex flex-col gap-6">
            <ResourceSell
              customSell="!p-0"
              products={products}
              mainClass="!grid !grid-cols-2 !gap-4 lg:!grid-cols-3"
              header={
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-4 flex-wrap w-full">
                  <p className="flex items-center ">
                    <span className="text-priGray">
                      {isMdUp ? "Selected Products" : "Product Result"}:
                    </span>
                    <b className="ml-1"> {products?.length}</b>
                  </p>
                  <UiDropdown
                    customField="!hidden md:!flex md:!w-[256px] lg:ml-auto"
                    options={ratings}
                    placeholder="By Rating"
                    showClear
                  />
                </div>
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
            <UiPagination />
          </div>
        </div>
      </div>

      <UiSideSheet
        customHeader="!pt-12"
        customChildren="!pb-12"
        title="Filters"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        {/* Price */}
        <UiAccordion title="Price">
          <UiDualSlider />
        </UiAccordion>

        {/* Brands */}
        <UiAccordion title="Brand">
          <div className="flex flex-col gap-3">
            <UiSearch />
            {brands.map((brand) => (
              <div
                key={brand.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={brand.label}
                  className="w-4 h-4 accent-primary"
                />
                <label
                  htmlFor={brand.label}
                  className="text-[15px] font-medium"
                >
                  {brand.label}
                </label>
                <span className="text-xs text-priGray">{brand.value}</span>
              </div>
            ))}
          </div>
        </UiAccordion>

        {/* Built-in memory */}
        <UiAccordion title="Built-in memory">
          <div className="flex flex-col gap-3">
            <UiSearch />
            {builtInMemory.map((memory) => (
              <div
                key={memory.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={memory.label}
                  className="w-4 h-4 accent-primary"
                />
                <label
                  htmlFor={memory.label}
                  className="text-[15px] font-medium"
                >
                  {memory.label}
                </label>
                <span className="text-xs text-priGray">{memory.value}</span>
              </div>
            ))}
          </div>
        </UiAccordion>

        {/* Protection Class */}
        <UiAccordion title="Protection class">
          <div className="flex flex-col gap-3">
            <UiSearch />
            {builtInMemory.map((memory) => (
              <div
                key={memory.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={memory.label}
                  className="w-4 h-4 accent-primary"
                />
                <label
                  htmlFor={memory.label}
                  className="text-[15px] font-medium"
                >
                  {memory.label}
                </label>
                <span className="text-xs text-priGray">{memory.value}</span>
              </div>
            ))}
          </div>
        </UiAccordion>

        {/* Screen Diagonal */}
        <UiAccordion title="Screen diagonal">
          <div className="flex flex-col gap-3">
            <UiSearch />
            {builtInMemory.map((memory) => (
              <div
                key={memory.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={memory.label}
                  className="w-4 h-4 accent-primary"
                />
                <label
                  htmlFor={memory.label}
                  className="text-[15px] font-medium"
                >
                  {memory.label}
                </label>
                <span className="text-xs text-priGray">{memory.value}</span>
              </div>
            ))}
          </div>
        </UiAccordion>

        {/* Screem Type */}
        <UiAccordion title="Screen type">
          <div className="flex flex-col gap-3">
            <UiSearch />
            {builtInMemory.map((memory) => (
              <div
                key={memory.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={memory.label}
                  className="w-4 h-4 accent-primary"
                />
                <label
                  htmlFor={memory.label}
                  className="text-[15px] font-medium"
                >
                  {memory.label}
                </label>
                <span className="text-xs text-priGray">{memory.value}</span>
              </div>
            ))}
          </div>
        </UiAccordion>

        {/* Battery Capacity */}
        <UiAccordion title="Battery capacity">
          <div className="flex flex-col gap-3">
            <UiSearch />
            {builtInMemory.map((memory) => (
              <div
                key={memory.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={memory.label}
                  className="w-4 h-4 accent-primary"
                />
                <label
                  htmlFor={memory.label}
                  className="text-[15px] font-medium"
                >
                  {memory.label}
                </label>
                <span className="text-xs text-priGray">{memory.value}</span>
              </div>
            ))}
          </div>
        </UiAccordion>

        {/* Apply */}
        <UiSideSheetAction outerClass="!justify-center !border-none !px-4">
          <Btn customClass="!w-full" label="Apply" />
        </UiSideSheetAction>
      </UiSideSheet>
    </>
  );
};

export default HomeFilters;
