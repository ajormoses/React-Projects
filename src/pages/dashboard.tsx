import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import TopBar from "../components/Nav/TopBar";
import PhoneDemo from "../components/Resources/PhoneDemo";
import ProfileDetails from "../components/Resources/ProfileDetails";
import FooterSheet from "../components/Ui/FooterSheet";
import Btn from "../components/Ui/Btn";
import { IoReorderTwoOutline } from "react-icons/io5";
import Dropdown from "../components/Ui/Dropdown";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import InputField from "../components/Ui/InputField";
import EmptyField from "../components/Ui/EmptyField";

interface Link {
  id: string;
  platform: string | null;
  url: string;
}

const dashboard = () => {
  const [currentTab, setCurrentTab] = useState("Links");

  const [links, setLinks] = useState<Link[]>([]);

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

  // Link creation
  const addLink = () => {
    setLinks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), platform: null, url: "" },
    ]);
  };

  const removeLink = (id: string) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  const updatePlatform = (id: string, value: any) => {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, platform: value } : link))
    );
  };

  const updateUrl = (id: string, value: string) => {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, url: value } : link))
    );
  };

  function handleSubmit(value: any) {
    console.log(value);
  }

  return (
    <>
      <div className="dashboard-wrapper grid gap-4">
        <TopBar tabs={tabs} switchTab={switchTab} />
        <div className="grid grid-col-1 md:grid-cols-2 gap-4">
          <PhoneDemo
            githubUrl="https://www.github.com/ajormoses"
            youtubeUrl="https://youtube.com"
            linkedinUrl="https://linkedin.com"
            instagramUrl="https://instagram.com"
            facebookUrl="https://facebook.com"
          />

          <ProfileDetails>
            <form onSubmit={handleSubmit}>
              {currentTab === "Links" ? (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[32px]">
                      Customize your links
                    </h1>
                    <p>
                      Add/edit/remove links below and then share all your
                      profiles with the world!
                    </p>
                  </div>
                  <Btn
                    customClass="!bg-white !border-primary !text-primary !font-semibold hover:!bg-purpleHover !gap-2 w-full my-4"
                    label="+ Add New Link"
                    onClick={addLink}
                  />

                  <div className="h-[450px] overflow-y-auto flex flex-col gap-4">
                    {links.length === 0 && <EmptyField />}

                    {links.length > 0 &&
                      links.map((link, index) => (
                        <div
                          key={link.id}
                          className="rounded-xl bg-lightGray p-5 flex flex-col gap-4"
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2.5 items-center">
                              <IoReorderTwoOutline />
                              <p className="font-bold">Link #{index + 1}</p>
                            </div>
                            <span
                              className="text-red-500 cursor-pointer"
                              onClick={() => removeLink(link.id)}
                            >
                              Remove
                            </span>
                          </div>

                          <Dropdown
                            label="Platform"
                            value={link.platform}
                            onChange={(e: any) =>
                              updatePlatform(link.id, e.value)
                            }
                            options={[
                              {
                                label: "Github",
                                value: "github",
                                icon: <TbBrandGithubFilled />,
                              },
                              {
                                label: "Youtube",
                                value: "youtube",
                                icon: <FaYoutube />,
                              },
                              {
                                label: "Linkedin",
                                value: "linkedin",
                                icon: <FaLinkedin />,
                              },
                              {
                                label: "Instagram",
                                value: "instagram",
                                icon: <LuInstagram />,
                              },
                              {
                                label: "facebook",
                                value: "facebook",
                                icon: <FaFacebook />,
                              },
                            ]}
                            placeholder="Select platform"
                            showClear
                          />

                          <InputField
                            type="text"
                            label="Link"
                            value={link.url}
                            placeholder="e.g. https://www.github.com/ajor_moses"
                            prependIcon={<FaLink />}
                            onChange={(e: any) =>
                              updateUrl(link.id, e.target.value)
                            }
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <div>Profile Details Content</div>
              )}
              <FooterSheet>
                <Btn customClass="w-fit ml-auto !h-[46px]" label="Save" />
              </FooterSheet>
            </form>
          </ProfileDetails>
        </div>
      </div>
    </>
  );
};

export default dashboard;
