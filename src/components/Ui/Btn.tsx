import React from "react";

interface BtnProps {
  label: string;
  customClass?: string;
}

const Btn: React.FC<BtnProps> = ({ label, customClass }) => {
  return (
    <>
      <button
        className={`border border-white py-4 px-14 bg-primary text-white font-medium text-base rounded-md ease-in-out duration-300 hover:scale-95 hover:opacity-90 ${customClass} `}
        type="button"
      >
        {label}
      </button>
    </>
  );
};

export default Btn;
