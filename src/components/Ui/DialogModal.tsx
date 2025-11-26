import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  customClass?: string;
  headerClass?: string;
  headerContent?: ReactNode;
  children?: ReactNode;
  customBody?: string;
}

const DialogModal: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  customClass,
  headerClass,
  headerContent,
  children,
  customBody,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center`}
      >
        <div
          className={`bg-white shadow-xl w-full h-full overflow-y-auto transform transition-all duration-300 ease-out translate-x-[-100%] animate-slideInLeft ${customClass}`}
        >
          {/* Header */}
          <div
            className={`p-4 flex justify-between items-center border-b ${headerClass} sticky top-0 z-10 bg-white`}
          >
            {headerContent && headerContent}

            <MdClose
              className="cursor-pointer text-2xl"
              onClick={() => {
                onClose();
              }}
            />
          </div>

          {/* Content */}
          <div className={`py-2 px-4 overflow-y-auto ${customBody}`}>
            {children || "No content"}
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogModal;
