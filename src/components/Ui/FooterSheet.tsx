import React from "react";

interface Props {
  children?: React.ReactNode;
}

const FooterSheet: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="absolute bottom-0 right-0 left-0 bg-white px-10 py-6 flex justify-end border-t z-50 rounded-b-xl">
        {children}
      </div>
    </>
  );
};

export default FooterSheet;
