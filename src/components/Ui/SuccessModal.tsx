import Btn from "./Btn";
import UiAnimateCheckMark from "../Ui/AnimateCheckMark";
import { useNavigate } from "react-router";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  customClass?: string;
  title?: string;
  customDescription?: string;
  customBtnLabel?: string;
  description?: string;
}

const UiSuccessModal: React.FC<Props> = ({
  isOpen,
  onClose,
  customClass,
  title,
  customDescription,
  customBtnLabel,
  description,
}) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  function handleClose() {
    onClose();
    navigate("/");
  }

  return (
    <>
      <div
        className={`fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center`}
      >
        <div
          className={`bg-white rounded-lg shadow-xl  w-full max-w-[300px] md:max-w-[400px] flex flex-col justify-center items-center gap-4 px-8 py-6 ${customClass}`}
        >
          <UiAnimateCheckMark />

          {/* Header */}

          <h2 className="font-semibold text-center text-2xl animate-slide-up">
            {title}
          </h2>

          {/* Description */}

          <p
            className={`text-grey-slTextSec leading-6 text-center ${customDescription}`}
          >
            {description}
          </p>

          {/* Button */}
          <Btn
            onClick={() => {
              handleClose();
            }}
            customClass="!mt-2.5 !w-full !text-sm"
            label={customBtnLabel || "Done"}
          />
        </div>
      </div>
    </>
  );
};

export default UiSuccessModal;
