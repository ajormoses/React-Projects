import Btn from "../Ui/Btn";

interface TabProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const SwitchTabs: React.FC<{
  tabs: TabProps[];
  switchTab: (label: string) => void;
}> = ({ tabs, switchTab }) => {
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
            label={tab.label}
            prependIcon={tab.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SwitchTabs;
