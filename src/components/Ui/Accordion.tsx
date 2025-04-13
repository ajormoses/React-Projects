import { FiChevronDown } from "react-icons/fi";
import { ReactNode, useRef, useState, useEffect } from "react";

interface Props {
  title: string;
  children?: ReactNode;
}

const UiAccordion: React.FC<Props> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");
  const maxLimit = 400; // max height in px

  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      const clampedHeight = Math.min(scrollHeight, maxLimit);
      setHeight(open ? `${clampedHeight}px` : "0px");
    }
  }, [open]);

  return (
    <div className="flex flex-col gap-2.5">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center border-b border-b-[#B5B5B5] pb-2 cursor-pointer"
      >
        <p className="text-lg font-medium">{title}</p>
        <FiChevronDown
          className={`text-xl transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div
          ref={contentRef}
          className="pt-2 overflow-y-auto overflow-x-hidden"
          style={{
            maxHeight: `${maxLimit}px`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default UiAccordion;
