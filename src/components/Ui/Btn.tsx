import React, { ReactNode } from "react";
import clsx from "clsx";

interface BtnProps {
  label: string;
  customClass?: string;
  onClick?: () => void;
  prependIcon?: ReactNode;
  appendIcon?: ReactNode;
}

const Btn: React.FC<BtnProps> = ({
  label,
  customClass,
  onClick,
  prependIcon,
  appendIcon,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(
          `border flex items-center justify-center border-white py-4 px-14 bg-primary text-white font-medium text-base rounded-md ease-in-out duration-300 hover:scale-95 hover:opacity-90 `,
          (prependIcon || appendIcon) && "gap-4",
          customClass
        )}
        type="button"
      >
        {/* Prepend Icon */}
        {prependIcon && prependIcon}
        {/* label */}
        {label}
        {/* Append Icon */}
        {appendIcon && appendIcon}
      </button>
    </>
  );
};

export default Btn;
