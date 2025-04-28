import Logo from "../../assets/img/white-logo.svg";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const services: {
    title: string;
    list: string[];
  }[] = [
    {
      title: "Services",
      list: [
        "Bonus program",
        "Gift cards",
        "Credit and payment",
        "Service contracts",
        "Non-cash account",
        "Payment",
      ],
    },
    {
      title: "Assistance to the buyer",
      list: [
        "Find an order",
        "Terms of delivery",
        "Exchange and return of goods",
        "Guarantee",
        "Frequently asked questions",
        "Terms of use of the site",
      ],
    },
  ];

  const media = [<FaTwitter />, <FaFacebookF />, <FaTiktok />, <FaInstagram />];

  return (
    <>
      <div className="bg-darkPri md:bg-black">
        <div className="section container">
          <div className=" flex flex-col gap-4 justify-center items-center md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-4 items-center md:items-start md:max-w-[384px]">
              <img src={Logo} alt="logo" className="w-[65.4px] h-[22.87px" />
              <p className="text-[#CFCFCF] text-[13px] text-center md:text-left">
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 items-center justify-center md:items-start ${
                  index === 0 ? "mb-8" : ""
                }`}
              >
                <h3 className="text-white font-semibold">{service.title}</h3>
                <ul className="flex flex-col gap-2 items-center justify-center md:items-start">
                  {service.list.map((item, index) => (
                    <li key={index} className="text-[#CFCFCF] text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-6">
            {media.map((icon, index) => (
              <span
                key={index}
                className="text-[#CFCFCF] text-base  cursor-pointer hover:text-white transition-all duration-300"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
