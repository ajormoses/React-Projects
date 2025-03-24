import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import phones from "../../../assets/img/icon/phones.svg";
import watches from "../../../assets/img/icon/watches.svg";
import camera from "../../../assets/img/icon/camera.svg";
import headphones from "../../../assets/img/icon/headphones.svg";
import computers from "../../../assets/img/icon/computers.svg";
import gaming from "../../../assets/img/icon/gaming.svg";

const HomeCategory = () => {
  const categories: {
    img: string;
    gadget: string;
  }[] = [
    {
      img: phones,
      gadget: "Phones",
    },
    {
      img: watches,
      gadget: "Smart Watches",
    },
    {
      img: camera,
      gadget: "Cameras",
    },
    {
      img: headphones,
      gadget: "Headphones",
    },
    {
      img: computers,
      gadget: "Computers",
    },
    {
      img: gaming,
      gadget: "Gaming",
    },
  ];
  return (
    <>
      <div className="py-16 px-4 bg-[#FAFAFA]">
        <div className="flex justify-between items-center gap-4">
          <p className="font-medium text-2xl">Browse By Category</p>
          <div className="flex items-center gap-2">
            <GoChevronLeft className="text-[32px]" />
            <GoChevronRight className="text-[32px]" />
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-lightGray rounded-[15px]"
              >
                <img
                  src={category.img}
                  alt={category.gadget}
                  className="w-16"
                />
                <p className="text-sm font-medium">{category.gadget}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
