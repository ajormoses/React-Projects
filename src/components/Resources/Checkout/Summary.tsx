import iphone from "../../../assets/img/iphone14.svg";
import Airpod from "../../../assets/img/airpod.svg";
import watch from "../../../assets/img/newArrivals/img3.svg";

const Summary = () => {
  const products: {
    img: string;
    title: string;
    amount: string;
  }[] = [
    {
      img: iphone,
      title: "Apple iPhone 14 Pro Max 128Gb ",
      amount: "$1399",
    },
    {
      img: Airpod,
      title: "AirPods Max Silver",
      amount: "$549",
    },
    {
      img: watch,
      title: "Apple Watch Series 9 GPS 41mm",
      amount: "$399",
    },
  ];

  return (
    <>
      <div className="border border-[#EBEBEB] py-8 px-6 flex flex-col gap-4 rounded-[10px]">
        <p className="font-medium text-xl leading-4 text-black mb-2">Summary</p>
        {products.map((product, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-4 p-4 rounded-[13px] bg-[#F6F6F6]"
          >
            <div className="flex gap-4 items-center">
              <img
                src={product.img}
                alt={product.title}
                className="w-[40px] h-[40px]"
              />
              <p className="font-medium text-sm text-black">{product.title}</p>
            </div>
            <p className="text-sm text-gray-500">{product.amount}</p>
          </div>
        ))}

        {/* Address */}
        <div className="flex flex-col gap-2.5 mt-2.5">
          <p className="text-[#545454] text-sm">Address</p>
          <p className="text-black leading-6">
            1131 Dusty Townline, Jacksonville, TX 40322
          </p>
        </div>

        {/* Shipment method */}
        <div className="flex flex-col gap-2.5 mt-2.5">
          <p className="text-[#545454] text-sm">Shipment method</p>
          <p className="text-black leading-6">Free</p>
        </div>

        {/* Subtotal  */}
        <div className="flex justify-between items-center gap-2.5 my-2.5">
          <p className="text-black font-medium">Subtotal</p>
          <p className="text-black leading-6 font-medium">$2347</p>
        </div>

        {/* Estimated Tax */}
        <div className="flex justify-between items-center gap-2.5">
          <p className="text-[#545454] font-medium">Estimated Tax</p>
          <p className="text-black leading-6 font-medium">$50</p>
        </div>

        {/* Estimated shipping & handling */}
        <div className="flex justify-between items-center gap-2.5">
          <p className="text-[#545454] font-medium">
            Estimated shipping & Handling
          </p>
          <p className="text-black leading-6 font-medium">$29</p>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center gap-2.5 mt-2.5">
          <p className="text-black font-medium">Total</p>
          <p className="text-black leading-6 font-medium">$2426</p>
        </div>
      </div>
    </>
  );
};

export default Summary;
