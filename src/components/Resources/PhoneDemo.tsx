interface Props {
  children?: React.ReactNode;
}

const PhoneDemo: React.FC<Props> = ({ children }) => {
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
            <div className="h-full w-full p-4 flex flex-col gap-4 justify-center items-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDemo;
