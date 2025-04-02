import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  customClass?: string;
  headerClass?: string;
  headerContent?: string;
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
          className={`bg-white rounded-lg shadow-xl  w-full max-w-[300px] md:max-w-[400px] ${customClass}`}
        >
          {/* Header */}
          <div
            className={`p-4 flex justify-between items-center border-b ${headerClass}`}
          >
            <h2 className="font-semibold">{headerContent}</h2>
            <MdClose
              className="cursor-pointer"
              onClick={() => {
                onClose();
              }}
            />
          </div>

          {/* Content */}
          <div
            className={`py-2 px-4 max-h-[80vh] overflow-y-auto ${customBody}`}
          >
            {children || "No content"}
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogModal;
