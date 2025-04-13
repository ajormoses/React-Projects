import React from "react";
import clsx from "clsx";

interface FooterProps {
  outerClass?: string;
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ outerClass, children }) => {
  return (
    <div
      className={clsx(
        "footer fixed sm:absolute bottom-0 sm:bottom-8 xl:bottom-0 right-0 left-0 bg-white px-8 py-2 flex justify-end border-t z-40",
        outerClass
      )}
    >
      {children}
    </div>
  );
};

export default Footer;
