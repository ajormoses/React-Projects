import { PiGithubLogoFill } from "react-icons/pi";
import { FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

interface LinkPreview {
  platform: "github" | "youtube" | "linkedin" | "instagram" | "facebook";
  url: string;
}

interface Props {
  links: LinkPreview[];
}
const PhoneDemo: React.FC<Props> = ({ links }) => {
  const icons = {
    github: <PiGithubLogoFill />,
    youtube: <FaYoutube />,
    linkedin: <FaLinkedin />,
    instagram: <LuInstagram />,
    facebook: <FaFacebook />,
  };

  const colors = {
    github: "!bg-dullBlack",
    youtube: "!bg-warningRed",
    linkedin: "bg-skyBlue",
    instagram: "!bg-orange",
    facebook: "!bg-fbBlue",
  };

  return (
    <div className="p-20 rounded-xl bg-white flex justify-center items-center">
      <div className="relative">
        <div className="h-[631px] w-[307px] border border-grey rounded-[50px] p-2">
          <div className="h-full border border-grey rounded-[45px] bg-white">
            {/* Top notch */}
            <div className="relative">
              <div className="h-7 w-[145px] border border-grey border-t-white -mt-[0.8px] absolute translate-x-1/2 bg-white rounded-b-[40px]"></div>
            </div>

            {/* 👉 Screen content here */}
            <div className="h-full w-full p-4 flex flex-col gap-10 justify-center items-center">
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="bg-paleGray h-[96px] w-[96px] rounded-full"></div>
                <div className="bg-paleGray h-[16px] w-[160px] rounded-[104px] mt-2"></div>
                <div className="bg-paleGray h-[8px] w-[72px] rounded-[104px]"></div>
              </div>

              <div className="flex flex-col gap-4 justify-center items-center mt-4">
                {Array.from({ length: 5 }).map((_, index) => {
                  // If there's a link for this index, show the actual link
                  const link = links[index];

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

                  // Otherwise show a placeholder
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
      </div>
    </div>
  );
};

export default PhoneDemo;
