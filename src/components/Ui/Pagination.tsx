import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useState } from "react";

const UiPagination = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <div className="px-4 flex items-center justify-center gap-4">
        <GoChevronLeft
          className={`text-2xl cursor-pointer ${
            page === 1 ? "text-priGray" : "text-primary"
          }`}
          onClick={() => page > 1 && setPage(page - 1)} // Prevent going below 1
        />
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-semibold cursor-pointer h-8 w-8 flex justify-center items-center rounded-[5px] ${
              page === 1 ? "bg-primary text-white" : "text-primary bg-[#F6F6F6]"
            }`}
            onClick={() => setPage(1)}
          >
            1
          </span>
          <span
            className={`text-sm font-semibold cursor-pointer h-8 w-8 flex justify-center items-center rounded-[5px] ${
              page === 2 ? "bg-primary text-white" : "text-primary bg-[#F6F6F6]"
            }`}
            onClick={() => setPage(2)}
          >
            2
          </span>
          <span
            className={`text-sm font-semibold cursor-pointer h-8 w-8 flex justify-center items-center rounded-[5px] ${
              page >= 3 && page <= 11
                ? "bg-primary text-white"
                : "text-primary bg-[#F6F6F6]"
            }`}
            onClick={() => setPage(page < 3 || page > 11 ? 3 : page)}
          >
            {page < 3 || page > 11 ? 3 : page}
          </span>
          <span className="text-xl text-priGray">...</span>
          <span
            className={`text-sm font-semibold cursor-pointer h-8 w-8 flex justify-center items-center rounded-[5px] ${
              page >= 12 ? "bg-primary text-white" : "text-primary bg-[#F6F6F6]"
            }`}
            onClick={() => setPage(page + 1)}
          >
            {page <= 12 ? 12 : page}
          </span>
        </div>
        <GoChevronRight
          onClick={() => setPage(page + 1)}
          className="text-2xl  cursor-pointer"
        />
      </div>
    </>
  );
};

export default UiPagination;
