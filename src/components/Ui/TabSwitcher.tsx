import { useState } from "react";

interface Props {
  items: {
    title: string;
    isActive: boolean;
  }[];
}

const TabSwitcher: React.FC<Props> = ({ items }) => {
  const [tabs, setTabs] = useState(items);

  function selectTab(index: number) {
    setTabs((prevTabs) =>
      prevTabs.map((tab, i) => ({
        ...tab,
        isActive: i === index,
      }))
    );
  }

  return (
    <>
      <div className="overflow-hidden">
        <div className="flex gap-x-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          {tabs.map((tab, index) => (
            <span
              key={index}
              onClick={() => selectTab(index)}
              className={`text-sm font-medium cursor-pointer ${
                tab.isActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-[#8B8B8B] "
              } `}
            >
              {tab.title}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabSwitcher;
