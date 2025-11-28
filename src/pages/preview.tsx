import { PiGithubLogoFill } from "react-icons/pi";
import { FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import Btn from "../components/Ui/Btn";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Load saved data from localStorage
  const savedData = JSON.parse(localStorage.getItem("profileData") || "{}");
  const image = savedData.image || "";
  const phoneDemoLinks = savedData.phoneDemoLinks || [];
  const email = savedData.email || "email";
  const name = savedData.name !== "" ? savedData.name : "Your Name";
  const location = useLocation();
  console.log(location.pathname);

  // Icons for each platform
  const icons: any = {
    github: <PiGithubLogoFill />,
    youtube: <FaYoutube />,
    linkedin: <FaLinkedin />,
    instagram: <LuInstagram />,
    facebook: <FaFacebook />,
  };

  // Colors for each platform button
  const colors: any = {
    github: "!bg-dullBlack",
    youtube: "!bg-warningRed",
    linkedin: "bg-skyBlue",
    instagram: "!bg-orange",
    facebook: "!bg-fbBlue",
  };

  const shareUrl = `${window.location.origin}/public-preview/${id}`;

  return (
    <>
      <div className="md:h-screen md:flex md:justify-center md:items-center pb-4 md:pb-0">
        <div className="bg-primary p-5 h-[357px] md:h-[40%] rounded-b-[32px] md:absolute md:top-0 md:right-0 md:left-0">
          {location.pathname.startsWith("/preview") && (
            <header className="rounded-xl bg-white p-4 flex justify-between items-center">
              <Btn
                onClick={() => {
                  navigate(`/?id=${id}`);
                }}
                label="Back to Editor"
                customClass="!bg-white !text-primary !border-primary"
              />
              <Btn
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  alert("Link copied!");
                }}
                label="Share Link"
              />
            </header>
          )}
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-white shadow-card py-12 px-14 rounded-3xl w-[349px] -mt-20 md:mt-0 md:relative md:z-10 flex flex-col gap-6 justify-center items-center">
            {/* Profile Image */}
            <div className="border-4 border-primary h-[104px] w-[104px] rounded-full flex justify-center items-center">
              <img
                className="w-full h-full rounded-full"
                src={image || `/img/avatar.svg`}
                alt="Profile"
              />
            </div>

            {/* Dynamic Name */}
            <h1 className="font-bold text-[32px] text-center leading-8">
              {name}
            </h1>

            {/* Email */}
            <p className="text-center">{email}</p>

            {/* Links (up to 5) */}
            <div className="flex flex-col gap-4 justify-center items-center ">
              {Array.from({ length: phoneDemoLinks.length }).map((_, index) => {
                const link = phoneDemoLinks[index];

                if (link) {
                  return (
                    <div
                      key={index}
                      className={`h-[44px] w-[237px] rounded-lg ${
                        colors[link.platform]
                      }`}
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-full w-full flex justify-between items-center text-white font-medium px-4"
                      >
                        <p className="flex items-center gap-2">
                          {icons[link.platform]}
                          <span className="text-xs font-normal capitalize">
                            {link.platform}
                          </span>
                        </p>
                        <span className="mdi mdi-arrow-right"></span>
                      </a>
                    </div>
                  );
                }

                // Empty Placeholder
                return (
                  <div
                    key={index}
                    className="bg-paleGray h-[44px] w-[237px] rounded-lg"
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
