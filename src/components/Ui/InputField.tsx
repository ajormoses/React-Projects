import { ReactNode } from "react";
import Btn from "./Btn";
import clsx from "clsx";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  register: object;
  showBtn?: ReactNode;
  btnLabel?: string;
  handleBtnClick?: () => void;
  customBtn?: any;
  error?: any;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  register,
  label,
  type,
  placeholder,
  showBtn,
  btnLabel,
  handleBtnClick,
  customBtn,
  error,
  required,
}) => {
  return (
    <>
      <div className="form-group">
        <label className={`text-[#545454] text-sm ${error && `error`}`}>
          {label} {required && <span className="required-mark">*</span>}
        </label>
        <div className="relative">
          <input
            type={type}
            className={`inputField ${error && `input-error`}`}
            placeholder={placeholder}
            {...register}
          />
          {showBtn && (
            <Btn
              onClick={handleBtnClick}
              customClass={clsx(
                `!absolute !right-5 !top-1/2 !transform !-translate-y-1/2 !h-[32px] !p-2 !text-xs !w-[77px] !bg-white !text-primary !border !border-primary`,
                customBtn
              )}
              label={btnLabel || ""}
            />
          )}
        </div>
        <p className="error-message">{error}</p>
      </div>
    </>
  );
};

export default InputField;
