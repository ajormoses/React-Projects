import Btn from "../Ui/Btn";
import { useMediaQuery } from "../../composables/useMediaQuery";

interface TabProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const SwitchTabs: React.FC<{
  tabs: TabProps[];
  switchTab: (label: string) => void;
}> = ({ tabs, switchTab }) => {
  const mediaMd = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <div className="flex items-center">
        {tabs.map((tab) => (
          <Btn
            onClick={() => switchTab(tab.label)}
            key={tab.label}
            customClass={`!font-semibold !gap-2 ${
              tab.isActive
                ? "!bg-lightPurple !text-primary hover:!bg-purpleHover"
                : "!bg-white !text-grey"
            }`}
            label={mediaMd ? tab.label : ""}
            prependIcon={tab.icon}
            customIcon="text-xl"
          />
        ))}
      </div>
    </>
  );
};

export default SwitchTabs;
