import React, { ReactNode } from "react";
import clsx from "clsx";
import { TbLoader2 } from "react-icons/tb";

interface BtnProps {
  label: string;
  customClass?: string;
  onClick?: () => void;
  prependIcon?: ReactNode;
  appendIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
}

const Btn: React.FC<BtnProps> = ({
  label,
  customClass,
  onClick,
  prependIcon,
  appendIcon,
  type,
  disabled,
  isLoading,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(
          `!border flex items-center justify-center border-white py-3 px-7 bg-primary text-white font-medium text-base rounded-lg ease-in-out duration-300 hover:scale-95 hover:opacity-90 `,
          (prependIcon || appendIcon) && "gap-4",
          disabled &&
            "shadow-activeSelection bg-purpleHover cursor-not-allowed border-none",
          customClass
        )}
        type={type || "button"}
        disabled={disabled}
      >
        {!isLoading ? (
          <>
            {/* Prepend Icon */}
            {prependIcon && prependIcon}
            {/* label */}
            {label}
            {/* Append Icon */}
            {appendIcon && appendIcon}
          </>
        ) : (
          <TbLoader2 className="animate-spin" />
        )}
      </button>
    </>
  );
};

export default Btn;
