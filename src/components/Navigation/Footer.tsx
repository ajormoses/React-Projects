import Logo from "../../assets/img/white-logo.svg";

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
  return (
    <>
      <div className="section bg-darkPri flex flex-col gap-4 justify-center items-center">
        <img src={Logo} alt="logo" className="w-[65.4px] h-[22.87px" />
        <p className="text-[#CFCFCF] text-[13px] text-center">
          We are a residential interior design firm located in Portland. Our
          boutique-studio offers more than
        </p>
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 items-center justify-center ${
              index === 0 ? "mb-8" : ""
            }`}
          >
            <h3 className="text-white font-semibold">{service.title}</h3>
            <ul className="flex flex-col gap-2 items-center justify-center">
              {service.list.map((item, index) => (
                <li key={index} className="text-[#CFCFCF] text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
