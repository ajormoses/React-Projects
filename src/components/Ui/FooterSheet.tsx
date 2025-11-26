import React from "react";
import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  customClass?: string;
}

const FooterSheet: React.FC<Props> = ({ children, customClass }) => {
  return (
    <>
      <div
        className={clsx(
          "absolute bottom-0 right-0 left-0 bg-white py-6 px-6 lg:px-10 flex justify-end border-t z-50 rounded-b-xl",
          customClass
        )}
      >
        {children}
      </div>
    </>
  );
};

export default FooterSheet;
