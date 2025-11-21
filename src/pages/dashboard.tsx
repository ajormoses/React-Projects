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
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

interface Link {
  id: string;
  platform: string | null;
  url: string;
  errors?: {
    platform?: string;
    url?: string;
  };
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

  const validateLink = (link: Link) => {
    const errors: any = {};

    if (!link.platform) {
      errors.platform = "Platform is required";
    }

    if (!link.url.trim()) {
      errors.url = "URL cannot be empty";
      return errors;
    }

    const urlRegex = /^(https?:\/\/)([\w\-]+\.)+[\w\-]{2,}(\/.*)?$/i;

    if (!urlRegex.test(link.url.trim())) {
      errors.url = "Enter a valid URL (must start with http:// or https://)";
      return errors;
    }

    const platform = link.platform?.toLowerCase();
    const url = link.url.toLowerCase();

    const patterns: any = {
      github: /^https:\/\/(www\.)?github\.com\/.+/i,
      youtube: /^https:\/\/(www\.)?(youtube\.com|youtu\.be)\/.+/i,
      linkedin: /^https:\/\/(www\.)?linkedin\.com\/.+/i,
      instagram: /^https:\/\/(www\.)?instagram\.com\/.+/i,
      facebook: /^https:\/\/(www\.)?facebook\.com\/.+/i,
    };

    if (platform && patterns[platform] && !patterns[platform].test(url)) {
      errors.url = `Enter a valid ${platform} link`;
    }

    return errors;
  };

  const allLinksValid =
    links.length > 0 &&
    links.every((link) => Object.keys(validateLink(link)).length === 0);

  const addLink = () => {
    // If empty list → Create first link
    if (links.length === 0) {
      return setLinks([
        { id: crypto.randomUUID(), platform: null, url: "", errors: {} },
      ]);
    }

    const last = links[links.length - 1];
    const lastErrors = validateLink(last);

    // If last link has errors → show errors, block add
    if (Object.keys(lastErrors).length > 0) {
      setLinks((prev) =>
        prev.map((link) =>
          link.id === last.id ? { ...link, errors: lastErrors } : link
        )
      );
      return;
    }

    // Else → Add new empty link
    setLinks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), platform: null, url: "", errors: {} },
    ]);
  };

  const removeLink = (id: string) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  // const updatePlatform = (id: string, value: any) => {
  //   setLinks((prev) =>
  //     prev.map((link) =>
  //       link.id === id
  //         ? {
  //             ...link,
  //             platform: value,
  //             errors: { ...link.errors, platform: undefined },
  //           }
  //         : link
  //     )
  //   );
  // };

  const updatePlatform = (id: string, value: any) => {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, platform: value } : link))
    );
  };

  const updateUrl = (id: string, value: string) => {
    setLinks((prev) =>
      prev.map((link) =>
        link.id === id
          ? {
              ...link,
              url: value,
              errors: { ...link.errors, url: undefined },
            }
          : link
      )
    );
  };

  const phoneDemoLinks = links
    .filter((link) => {
      const errors = validateLink(link);
      return Object.keys(errors).length === 0; // include only valid links
    })
    .map((link) => ({
      platform: link.platform as any, // Provide a default value if platform is null
      url: link.url,
    }));

  // const schema = yup
  //   .object({
  //     promo_code: yup
  //       .number()
  //       .typeError("Promo code must be a number")
  //       .required("Please enter your promo code"),
  //     card_number: yup
  //       .number()
  //       .typeError("Card number must be numeric")
  //       .required("Please enter your card number"),
  //   })
  //   .required();
  // type FormData = yup.InferType<typeof schema>;

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>({
  //   resolver: yupResolver(schema),
  // });

  // function handleFormData(value: any) {
  //   console.log(value);
  // }

  return (
    <>
      <div className="dashboard-wrapper grid gap-4">
        <TopBar tabs={tabs} switchTab={switchTab} />
        <div className="grid grid-col-1 md:grid-cols-2 gap-4">
          <PhoneDemo links={phoneDemoLinks} />

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
                              label: "Facebook",
                              value: "facebook",
                              icon: <FaFacebook />,
                            },
                          ]}
                          placeholder="Select platform"
                          showClear
                          error={link?.errors?.platform}
                          onChange={(value: any) =>
                            updatePlatform(link.id, value)
                          }
                        />

                        <InputField
                          type="text"
                          label="Link"
                          prependIcon={<FaLink />}
                          placeholder="e.g. https://github.com/ajormoses"
                          error={link?.errors?.url}
                          register={{
                            value: link.url,
                            onChange: (e: any) =>
                              updateUrl(link.id, e.target.value),
                          }}
                        />
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div>Profile Details Content</div>
            )}
            <FooterSheet>
              <Btn
                type="submit"
                disabled={!allLinksValid}
                customClass="w-fit ml-auto !h-[46px]"
                label="Save"
              />
            </FooterSheet>
          </ProfileDetails>
        </div>
      </div>
    </>
  );
};

export default dashboard;
