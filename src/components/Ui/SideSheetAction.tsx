import React from "react";
import clsx from "clsx";

interface Props {
  outerClass?: string;
  children: React.ReactNode;
}

const UiSideSheetAction: React.FC<Props> = ({ outerClass, children }) => {
  return (
    <div
      className={clsx(
        "fixed bottom-0 left-0 right-0 bg-white px-8 py-2 flex justify-end border-t z-40",
        outerClass
      )}
    >
      {children}
    </div>
  );
};

export default UiSideSheetAction;
