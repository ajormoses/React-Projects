import React, { useEffect, useState } from "react";
import "../Styles/LoaderCircle.css";

interface LoaderCircleProps {
  customCircle?: string;
}

const UiAnimateCheckMark: React.FC<LoaderCircleProps> = ({
  customCircle = "",
}) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCompleted(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center">
      <div
        className={`relative inline-block w-[80px] h-[80px] rounded-full border border-gray-300 border-l-btn-primary animate-spin circle-loader ${customCircle} ${
          isCompleted ? "load-complete" : ""
        }`}
      >
        {isCompleted && <div className="checkmark"></div>}
      </div>
    </div>
  );
};

export default UiAnimateCheckMark;
