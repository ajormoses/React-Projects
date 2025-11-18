import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import TopBar from "../components/Nav/TopBar";
import PhoneDemo from "../components/Resources/PhoneDemo";
import ProfileDetails from "../components/Resources/ProfileDetails";
import FooterSheet from "../components/Ui/FooterSheet";
import Btn from "../components/Ui/Btn";
import { IoReorderTwoOutline } from "react-icons/io5";

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
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <h1 className="font-bold text-[32px]">
                    Customize your links
                  </h1>
                  <p>
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                  </p>
                </div>
                <Btn
                  customClass="!bg-white !border-primary !text-primary !font-semibold hover:!bg-purpleHover !gap-2 w-full my-4"
                  label="+ Add New Link"
                />

                <div className="rounded-xl bg-lightGray p-5 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2.5 items-center">
                      <IoReorderTwoOutline />
                      <p className="font-bold">Link #1</p>
                    </div>
                    <span>Remove</span>
                  </div>
                  {/* <Dropdown
                    label="Title"

                    placeholder="e.g. My Portfolio"
                  /> */}
                </div>
              </div>
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
