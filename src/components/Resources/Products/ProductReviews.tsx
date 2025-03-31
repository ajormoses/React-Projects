import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import clsx from "clsx";
import Btn from "../../Ui/Btn";
import rating from "../../../assets/img/4.8_rating.svg";
import rating2 from "../../../assets/img/4_rating.svg";
import rating3 from "../../../assets/img/5_rating.svg";
import userPic1 from "../../../assets/img/avatar/userPic1.svg";
import userPic2 from "../../../assets/img/avatar/userPic2.svg";
import userPic3 from "../../../assets/img/avatar/userPic3.svg";
import userPic4 from "../../../assets/img/avatar/userPic4.svg";

const ProductReviews = () => {
  const ratings = [
    { rating: "Excellent", count: 100 },
    { rating: "Good", count: 11 },
    { rating: "Average", count: 3 },
    { rating: "Below Average", count: 8 },
    { rating: "Poor", count: 1 },
  ];

  const totalReviews = ratings.reduce((sum, r) => sum + r.count, 0);

  const ratingComments = [
    {
      avatar: userPic1,
      name: "Grace Carey",
      date: "24 January,2023",
      rating: rating2,
      comment:
        "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
    },
    {
      avatar: userPic2,
      name: "Ronald Richards",
      date: "24 January,2023",
      rating: rating3,
      comment:
        "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.",
    },
    {
      avatar: userPic3,
      name: "Darcy King",
      date: "24 January,2023",
      rating: rating2,
      comment:
        "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition",
    },
    {
      avatar: userPic4,
      name: "John Malcolm",
      date: "24 January,2023",
      rating: rating2,
      comment:
        "In Washington, it is already difficult to surprise with the opening of a new institution, but it is still possible. Especially if it is a True Cost project. Here you pay an entrance fee and get meals at cost price. ",
    },
  ];

  const [showMore, setShowMore] = useState(2);
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-medium leading-6 text-black text-2xl">Reviews</h1>
      <div className="rounded-[25px] bg-[#FAFAFA] p-8 flex items-center justify-center gap-5 my-5">
        <div className="flex flex-col justify-center items-center font-medium text-black">
          <p className="text-[56px]">4.8</p>
          <p className="text-[15px] text-gray -mt-1">
            of {totalReviews} reviews
          </p>
        </div>
        <img src={rating} alt="rating" />
      </div>

      {ratings.map((r, index) => (
        <div key={index} className="flex items-center justify-between gap-5">
          <p className="text-[#333333] text-[15px] w-28">{r.rating}</p>
          <div className="flex-1 bg-[#D9D9D9] h-[5px] rounded-full overflow-hidden">
            <div
              className="bg-rating h-full"
              style={{ width: `${(r.count / totalReviews) * 500}%` }}
            ></div>
          </div>
          <p className="text-gray ml-auto">{r.count}</p>
        </div>
      ))}

      <input
        type="textarea"
        placeholder="Leave Comment"
        className="border border-[#D9D9D9] rounded-[7px] p-3 w-full focus:outline-none my-4"
      />

      {ratingComments?.slice(0, showMore).map((r, index) => (
        <div
          key={index}
          className="flex items-start gap-5 bg-secGray rounded-[10px] py-6 px-[28px]"
        >
          <img src={r.avatar} alt="user" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between flex-wrap items-center gap-2">
              <p className="text-black font-medium">{r.name}</p>
              <p className="text-gray text-[15px]">{r.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={r.rating} alt="rating" />
            </div>
            <p className="text-gray text-[15px]">{r.comment}</p>
          </div>
        </div>
      ))}

      {/* View more  */}
      <Btn
        appendIcon={showMore === 2 ? <IoIosArrowDown /> : <IoIosArrowUp />}
        customClass={clsx(
          `!bg-transparent !text-sm !flex !item-center !justify-center !mx-auto !rounded-lg font-medium !bg-white !text-black !border !border-black !py-[12px] !px-[36px] !max-w-[230px]`
        )}
        label={showMore === 2 ? "View More" : "View Less"}
        onClick={() => setShowMore(showMore === 2 ? ratingComments?.length : 2)}
      />
    </div>
  );
};

export default ProductReviews;
