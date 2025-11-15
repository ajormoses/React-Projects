import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import TopBar from "../components/Nav/TopBar";
import PhoneDemo from "../components/Resources/PhoneDemo";
import ProfileDetails from "../components/Resources/ProfileDetails";
import FooterSheet from "../components/Ui/FooterSheet";

const dashboard = () => {
  const [currentTab, setCurrentTab] = useState("Links");
  const [tabs, setTabs] = useState([
    {
      label: "Links",
      icon: <FaLink />,
      isActive: true,
    },
    {
      label: "Profile Details",
      icon: <RxAvatar />,
      isActive: false,
    },
  ]);

  function switchTab(label: string) {
    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isActive: tab.label === label,
      }))
    );
    setCurrentTab(label);
  }

  return (
    <>
      <div className="dashboard-wrapper grid gap-4">
        <TopBar tabs={tabs} switchTab={switchTab} />
        <div className="grid grid-col-1 md:grid-cols-2 gap-4">
          <PhoneDemo>dkdk</PhoneDemo>

          <ProfileDetails>
            {currentTab === "Links" ? (
              <div>Hello</div>
            ) : (
              <div>Profile Details Content</div>
            )}
            <FooterSheet>dkdkd</FooterSheet>
          </ProfileDetails>
        </div>
      </div>
    </>
  );
};

export default dashboard;
