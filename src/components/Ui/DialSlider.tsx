import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";

const UiRangeSlider = () => {
  const TOTAL = 100;
  const [value, setValue] = useState(50);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        {/* From */}
        <div className="flex flex-col gap-2.5 items-center">
          <p className="text-sm text-gray">From</p>
          <div className="border border-[#9F9F9F] rounded-sm max-w-[109px] w-full py-2 px-4 text-center">
            {value}
          </div>
        </div>

        <AiOutlineMinus className="mt-8" />

        {/* To */}
        <div className="flex flex-col gap-2.5 items-center">
          <p className="text-sm text-gray text-right">To</p>
          <div className="border border-[#9F9F9F] rounded-sm max-w-[109px] w-full py-2 px-4 text-center">
            {TOTAL - value}
          </div>
        </div>
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max={TOTAL}
        value={value}
        onChange={handleChange}
        className="w-full accent-black"
      />
    </div>
  );
};

export default UiRangeSlider;
