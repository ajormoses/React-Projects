import { PiGithubLogoFill } from "react-icons/pi";
import { FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

interface Props {
  githubUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

const PhoneDemo: React.FC<Props> = ({
  githubUrl,
  youtubeUrl,
  linkedinUrl,
  facebookUrl,
  instagramUrl,
}) => {
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
                <div
                  className={`bg-paleGray h-[44px] w-[237px] rounded-lg ${
                    githubUrl && "!bg-dullBlack"
                  }`}
                >
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-full w-full flex justify-between items-center text-white font-medium px-4"
                    >
                      <p className="flex items-center gap-2">
                        <PiGithubLogoFill />
                        <span className="text-xs font-normal">GitHub</span>
                      </p>
                      <span className="mdi mdi-arrow-right"></span>
                    </a>
                  )}
                </div>

                <div
                  className={`bg-paleGray h-[44px] w-[237px] rounded-lg ${
                    youtubeUrl && "!bg-warningRed"
                  }`}
                >
                  {youtubeUrl && (
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-full w-full flex justify-between items-center text-white font-medium px-4"
                    >
                      <p className="flex items-center gap-2">
                        <FaYoutube />
                        <span className="text-xs font-normal">YouTube</span>
                      </p>
                      <span className="mdi mdi-arrow-right"></span>
                    </a>
                  )}
                </div>

                <div
                  className={`bg-paleGray h-[44px] w-[237px] rounded-lg ${
                    linkedinUrl && "bg-skyBlue"
                  }`}
                >
                  {linkedinUrl && (
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-full w-full flex justify-between items-center text-white font-medium px-4"
                    >
                      <p className="flex items-center gap-2">
                        <FaLinkedin />
                        <span className="text-xs font-normal">LinkedIn</span>
                      </p>
                      <span className="mdi mdi-arrow-right"></span>
                    </a>
                  )}
                </div>

                <div
                  className={`bg-paleGray h-[44px] w-[237px] rounded-lg ${
                    instagramUrl && "bg-orange"
                  }`}
                >
                  {instagramUrl && (
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-full w-full flex justify-between items-center text-white font-medium px-4"
                    >
                      <p className="flex items-center gap-2">
                        <LuInstagram />
                        <span className="text-xs font-normal">Instagram</span>
                      </p>
                      <span className="mdi mdi-arrow-right"></span>
                    </a>
                  )}
                </div>

                <div
                  className={`bg-paleGray h-[44px] w-[237px] rounded-lg ${
                    facebookUrl && "!bg-fbBlue"
                  }`}
                >
                  {facebookUrl && (
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-full w-full flex justify-between items-center text-white font-medium px-4"
                    >
                      <p className="flex items-center gap-2">
                        <FaFacebook />
                        <span className="text-xs font-normal">Facebook</span>
                      </p>
                      <span className="mdi mdi-arrow-right"></span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDemo;
