import clsx from "clsx";
import React, { ReactNode } from "react";
import { FiChevronLeft } from "react-icons/fi";

interface Props {
  size?: "sm" | "md" | "lg" | "full";
  position?: "top" | "bottom";
  modalWidth?: string;
  visible: boolean;
  children?: ReactNode;
  customHeader?: string;
  title: string;
  customChildren?: string;
  onClose: () => void;
}

const UiSideSheet: React.FC<Props> = ({
  size,
  position,
  modalWidth,
  visible,
  children,
  customHeader,
  title,
  customChildren,
  onClose,
}) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300",
        {
          "opacity-100 pointer-events-auto": visible,
          "opacity-0 pointer-events-none": !visible,
        }
      )}
    >
      <div
        className={clsx(
          "flex flex-col gap-6 bg-white h-full transform transition-transform duration-300 ease-in-out ml-auto section px-5",
          {
            "translate-x-0": visible,
            "translate-x-full": !visible,

            "w-full sm:w-1/4": size === "sm",
            "w-full md:w-1/2": size === "md",
            "w-full lg:w-3/4": size === "lg",
            "w-full": size === "full",

            "!h-auto w-full !mx-auto":
              position === "top" || position === "bottom",
          },
          modalWidth
        )}
      >
        {/* header */}
        <div className={clsx(`${customHeader}`)}>
          <div className="flex gap-3 items-center ">
            <FiChevronLeft className="text-2xl" onClick={onClose} />
            <p className="text-2xl font-medium">{title}</p>
          </div>
        </div>

        {/* children */}
        <div
          className={clsx(
            `overflow-y-auto flex flex-col gap-6 relative no-scrollbar ${customChildren}`
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default UiSideSheet;
