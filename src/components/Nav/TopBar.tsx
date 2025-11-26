import { useNavigate } from "react-router-dom";
import Btn from "../Ui/Btn";
import UserDropdown from "../Resources/UserDropdown";
import SwitchTabs from "../Ui/SwitchTabs";
import { useMediaQuery } from "../../composables/useMediaQuery";

interface TabProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
}
const TopBar: React.FC<{
  tabs: TabProps[];
  switchTab: (label: string) => void;
}> = ({ tabs, switchTab }) => {
  const navigate = useNavigate();
  const mediaMd = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <div className="bg-white p-4 rounded-xl flex justify-between items-center">
        <img
          src="/img/devlinks.svg"
          alt="Logo"
          className="h-8 hidden md:block"
        />
        <img src="/img/logo.svg" alt="Logo" className="h-[46px]  md:hidden " />

        {mediaMd && <SwitchTabs tabs={tabs} switchTab={switchTab} />}

        <div className="flex gap-2 items-center">
          <Btn
            onClick={() => navigate("/preview")}
            customClass="!bg-white !border-primary !text-primary !font-semibold hover:!bg-purpleHover !gap-2"
            label="Preview"
          />
          <UserDropdown />
        </div>
      </div>
    </>
  );
};

export default TopBar;
