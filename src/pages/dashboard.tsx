import * as yup from "yup";
import clsx from "clsx";
import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { IoReorderTwoOutline } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { SlPicture } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../composables/useMediaQuery";
import { v4 as uuidv4 } from "uuid";
import { writeUserData } from "../config/firebase";
import { useLocation } from "react-router-dom";
import TopBar from "../components/Nav/TopBar";
import PhoneDemo from "../components/Resources/PhoneDemo";
import ProfileDetails from "../components/Resources/ProfileDetails";
import FooterSheet from "../components/Ui/FooterSheet";
import InputField from "../components/Ui/InputField";
import EmptyField from "../components/Ui/EmptyField";
import Btn from "../components/Ui/Btn";
import Dropdown from "../components/Ui/Dropdown";
import DialogModal from "../components/Ui/DialogModal";
import SwitchTabs from "../components/Ui/SwitchTabs";

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
  const navigate = useNavigate();

  const [hydrated, setHydrated] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [image, setImage] = useState<string | null>(null);

  const [imageError, setImageError] = useState<string | null>(null);

  const [isModalOpen, setModalOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [currentTab, setCurrentTab] = useState("Links");

  const [links, setLinks] = useState<Link[]>([]);

  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const queryId = query.get("id");

  const mediaMd = useMediaQuery("(min-width: 768px)");

  const schema = yup
    .object({
      email: yup.string().email("Invalid email").required("Can't be empty"),
      firstName: yup.string().required("Can't be empty"),
      lastName: yup.string().required("Can't be empty"),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const watchedFirstName = watch("firstName");
  const watchedLastName = watch("lastName");
  const watchedEmail = watch("email");

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
    // If trying to leave the "Links" tab
    if (label !== "Links") {
      const hasAtLeastOneValidLink = links.some(
        (link) => Object.keys(validateLink(link)).length === 0
      );

      if (!hasAtLeastOneValidLink) {
        return; // block navigation
      }
    }

    // Update tabs
    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isActive: tab.label === label,
      }))
    );

    setCurrentTab(label);

    // 🔥 Save active tab to localStorage
    localStorage.setItem("activeTab", label);
  }

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");

    if (savedTab) {
      setCurrentTab(savedTab);

      setTabs((prev) =>
        prev.map((tab) => ({
          ...tab,
          isActive: tab.label === savedTab,
        }))
      );
    }
  }, []);

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

  const updatePlatform = (id: string, value: any) => {
    // Normalize in case Dropdown returns an option object like { label, value, icon }
    const normalized =
      typeof value === "string" ? value : value?.value ?? value ?? null;

    setLinks((prev) =>
      prev.map((link) =>
        link.id === id
          ? {
              ...link,
              platform: normalized,
              // clear platform error when user selects
              errors: { ...link.errors, platform: undefined },
            }
          : link
      )
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
      id: link.id,
      platform: link.platform as any, // Provide a default value if platform is null
      url: link.url,
    }));

  async function handleFormData() {
    if (!image) {
      setImageError("Please upload a profile image.");
      return;
    }

    if (imageError) {
      return; // prevent submit
    }

    const id = queryId || uuidv4();
    try {
      setIsLoading(true);
      await writeUserData(id);
      navigate(`/preview/${id}`);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  // Upload image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset
    setImageError(null);

    if (!["image/png", "image/jpeg"].includes(file.type)) {
      setImageError("Only PNG and JPG formats are allowed.");
      return;
    }

    if (file.size > 1024 * 1024) {
      setImageError("Image must be less than 1MB.");
      return;
    }

    const img = new Image();
    img.onload = () => {
      if (img.width > 1024 || img.height > 1024) {
        setImageError("Image dimensions must not exceed 1024x1024px.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    };
    img.src = URL.createObjectURL(file);
  };

  // useEffect(() => {
  //   const saved = localStorage.getItem("profileData");
  //   if (!saved) {
  //     setHydrated(true);
  //     return;
  //   }

  //   try {
  //     const parsed = JSON.parse(saved);

  //     // Restore image
  //     if (parsed.image) setImage(parsed.image);

  //     // Restore name
  //     if (parsed.name) {
  //       const [first = "", last = ""] = parsed.name.split(" ");
  //       setValue("firstName", first);
  //       setValue("lastName", last);
  //     }

  //     // Restore email
  //     if (parsed.email) {
  //       setValue("email", parsed.email);
  //     }

  //     // Restore links EXACTLY as saved
  //     if (Array.isArray(parsed.phoneDemoLinks)) {
  //       setLinks(
  //         parsed.phoneDemoLinks.map((item: any) => ({
  //           id: item.id ?? crypto.randomUUID(),
  //           platform: item.platform ?? null,
  //           url: item.url ?? "",
  //           errors: {}, // TEMP — we will validate AFTER hydration
  //         }))
  //       );
  //     }
  //   } catch (err) {
  //     console.error("Failed to load profileData:", err);
  //   } finally {
  //     setHydrated(true); // allow save + validation now
  //   }
  // }, []);

  // // ---------------------------------------------
  // // 2. RUN VALIDATION ONLY AFTER HYDRATION
  // // ---------------------------------------------
  // useEffect(() => {
  //   if (!hydrated) return;

  //   setLinks((prev) =>
  //     prev.map((link) => ({
  //       ...link,
  //       errors: validateLink(link),
  //     }))
  //   );
  // }, [hydrated]);

  // // ---------------------------------------------
  // // 3. Save only AFTER hydration
  // // ---------------------------------------------
  // useEffect(() => {
  //   if (!hydrated) return;

  //   const name = `${watchedFirstName ?? ""} ${watchedLastName ?? ""}`.trim();

  //   const profileData = {
  //     image,
  //     name,
  //     email: watchedEmail ?? "",
  //     phoneDemoLinks: links.map((l) => ({
  //       id: l.id,
  //       platform: l.platform,
  //       url: l.url,
  //     })),
  //   };

  //   localStorage.setItem("profileData", JSON.stringify(profileData));
  // }, [hydrated, image, links, watchedFirstName, watchedLastName, watchedEmail]);

  // ---------------------------------------------
  // 0. BUILD PROFILE DATA ON EVERY RENDER
  // ---------------------------------------------
  const profileData = useMemo(() => {
    return {
      image,
      name: `${watchedFirstName ?? ""} ${watchedLastName ?? ""}`.trim(),
      email: watchedEmail ?? "",
      phoneDemoLinks: links.map((l) => ({
        id: l.id,
        platform: l.platform,
        url: l.url,
      })),
    };
  }, [image, watchedFirstName, watchedLastName, watchedEmail, links]);

  // ---------------------------------------------
  // 1. LOAD FROM LOCALSTORAGE
  // ---------------------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("profileData");
    if (!saved) {
      setHydrated(true);
      return;
    }

    try {
      const parsed = JSON.parse(saved);

      if (parsed.image) setImage(parsed.image);

      if (parsed.name) {
        const [first = "", last = ""] = parsed.name.split(" ");
        setValue("firstName", first);
        setValue("lastName", last);
      }

      if (parsed.email) {
        setValue("email", parsed.email);
      }

      if (Array.isArray(parsed.phoneDemoLinks)) {
        setLinks(
          parsed.phoneDemoLinks.map((item: any) => ({
            id: item.id ?? crypto.randomUUID(),
            platform: item.platform ?? null,
            url: item.url ?? "",
            errors: {},
          }))
        );
      }
    } catch (err) {
      console.error("Failed to load profileData:", err);
    } finally {
      setHydrated(true);
    }
  }, []);

  // ---------------------------------------------
  // 2. VALIDATE LINKS AFTER HYDRATION
  // ---------------------------------------------
  useEffect(() => {
    if (!hydrated) return;

    setLinks((prev) =>
      prev.map((link) => ({
        ...link,
        errors: validateLink(link),
      }))
    );
  }, [hydrated]);

  // ---------------------------------------------
  // 3. SAVE TO LOCALSTORAGE AFTER HYDRATION
  // ---------------------------------------------
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("profileData", JSON.stringify(profileData));
  }, [hydrated, profileData]);

  // ---------------------------------------------
  // 4. COMPUTE IF PROFILE IS COMPLETE (BUTTON USE)
  // ---------------------------------------------
  const isProfileDataComplete = useMemo(() => {
    return (
      Boolean(profileData.image) &&
      Boolean(profileData.name) &&
      Boolean(profileData.email) &&
      Array.isArray(profileData.phoneDemoLinks) &&
      profileData.phoneDemoLinks.length > 0
    );
  }, [
    profileData.image,
    profileData.name,
    profileData.email,
    links.length, // always reliable
  ]);
  // ---------------------------------------------
  // RETURN JSX
  // ---------------------------------------------

  return (
    <>
      <div className="dashboard-wrapper grid gap-4">
        <TopBar
          openDialog={() => setModalOpen(true)}
          tabs={tabs}
          switchTab={switchTab}
          isPreviewDisabled={!isProfileDataComplete}
        />
        <div className="grid grid-col-1 md:grid-cols-2 gap-4 mt-[100px]">
          {mediaMd && (
            <PhoneDemo
              imageUrl={image}
              links={phoneDemoLinks}
              name={
                watchedFirstName &&
                watchedLastName &&
                watchedFirstName + " " + watchedLastName
              }
              email={watchedEmail}
            />
          )}

          <ProfileDetails>
            <form onSubmit={handleSubmit(handleFormData)} className="pb-20">
              {currentTab === "Links" ? (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[32px] leading-8">
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
                            sideError
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[32px]">Profile Details</h1>
                    <p>
                      Add your details to create a personal touch to your
                      profile.
                    </p>
                  </div>

                  <div className="rounded-xl bg-lightGray p-5 grid grid-cols-3 gap-4 place-items-center">
                    <p className="text-sm">Profile picture</p>

                    {/* Upload Box */}
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="group h-[193px] w-full max-w-[193px] rounded-xl bg-lightPurple flex flex-col justify-center items-center cursor-pointer overflow-hidden relative"
                    >
                      {/* If image exists, show preview */}
                      {image ? (
                        <img
                          src={image}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <>
                          <SlPicture className="w-[32.5px] h-[27.5px] text-primary" />
                          <span className="font-semibold mt-2 text-primary text-sm">
                            + Upload Image
                          </span>
                        </>
                      )}

                      {image && (
                        <div
                          className="
                        absolute inset-0 bg-black/50 z-10 
                        opacity-0 group-hover:opacity-100 
                        flex justify-center items-center 
                        transition-opacity duration-300
                      "
                        >
                          <MdDelete
                            onClick={() => setImage(null)}
                            className="text-white absolute top-3 right-3 text-lg"
                          />
                          <div className="flex flex-col gap-1.5 items-center justify-center">
                            <SlPicture className="w-[32.5px] h-[27.5px] text-white" />
                            <span className="font-semibold mt-2 text-white text-sm">
                              Change Image
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <p className="text-sm">
                      {imageError ? (
                        <p className="text-red-500">{imageError}</p>
                      ) : (
                        <p>
                          Image must be below 1024x1024px. Use PNG or JPG
                          format.
                        </p>
                      )}
                    </p>

                    {/* Hidden File Input */}
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>

                  <div className="rounded-xl bg-lightGray p-5 ">
                    <div className="flex items-center gap-4">
                      <span
                        className={clsx(
                          "basis-[32%]",
                          errors.firstName?.message && "text-red-500"
                        )}
                      >
                        First name *
                      </span>
                      <div className="basis-[68%]">
                        <InputField
                          type="text"
                          placeholder="e.g John"
                          register={register("firstName", {
                            required: true,
                          })}
                          error={errors.firstName?.message}
                          sideError
                          customSideError="!top-[35px]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={clsx(
                          "basis-[32%]",
                          errors.lastName?.message && "text-red-500"
                        )}
                      >
                        Last name *
                      </span>
                      <div className="basis-[68%]">
                        <InputField
                          type="text"
                          placeholder="e.g Appleseed"
                          register={register("lastName", {
                            required: true,
                          })}
                          error={errors.lastName?.message}
                          sideError
                          customSideError="!top-[35px]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={clsx(
                          "basis-[32%]",
                          errors.email?.message && "text-red-500"
                        )}
                      >
                        Email *
                      </span>
                      <div className="basis-[68%]">
                        <InputField
                          type="text"
                          placeholder="e.g email@example.com"
                          register={register("email", {
                            required: true,
                          })}
                          error={errors.email?.message}
                          sideError
                          customSideError="!top-[35px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <FooterSheet>
                {currentTab === "Links" ? (
                  <Btn
                    type="button"
                    onClick={(e: any) => {
                      e.preventDefault(); // 🛑 stops form validation + submit
                      switchTab("Profile Details");
                    }}
                    disabled={!allLinksValid}
                    customClass="!w-[91px] ml-auto !h-[46px]"
                    label="Save"
                  />
                ) : (
                  <Btn
                    type="submit"
                    customClass="!w-[91px] ml-auto !h-[46px]"
                    label="Save"
                    isLoading={isLoading}
                  />
                )}
              </FooterSheet>
            </form>
          </ProfileDetails>

          {/* Diagonal Modal */}
          <DialogModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            headerContent={<SwitchTabs tabs={tabs} switchTab={switchTab} />}
          >
            <PhoneDemo
              imageUrl={image}
              links={phoneDemoLinks}
              name={
                watchedFirstName &&
                watchedLastName &&
                watchedFirstName + " " + watchedLastName
              }
              email={watchedEmail}
            />
          </DialogModal>
        </div>
      </div>
    </>
  );
};

export default dashboard;
