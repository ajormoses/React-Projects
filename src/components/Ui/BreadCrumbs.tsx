import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  customClass?: string;
  items?: {
    label: string;
    url?: string;
  }[];
}

const UiBreadCrumbs: React.FC<Props> = ({ customClass, items }) => {
  const navigate = useNavigate();

  const handleNavigation = (url: string) => {
    navigate(url);
  };
  return (
    <div className={clsx(`h-[104px] flex items-center ${customClass}`)}>
      {items?.map((item, index) => (
        <div key={index} className="flex items-center">
          <span
            className={`cursor-pointer transition font-medium ${
              index === items.length - 1 ? "text-black" : "text-[#A4A4A4]"
            }`}
            onClick={() => item?.url && handleNavigation(item.url)}
          >
            {item.label}
          </span>
          {index < items.length - 1 && (
            <IoIosArrowForward className="text-[#A4A4A4] mx-2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default UiBreadCrumbs;
