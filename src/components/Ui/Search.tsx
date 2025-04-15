import { FiSearch } from "react-icons/fi";
import clsx from "clsx";

interface Props {
  outerclass?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
const UiSearch: React.FC<Props> = ({
  value,
  onChange,
  disabled,
  outerclass,
  placeholder,
}) => {
  return (
    <>
      <div
        className={clsx(
          `relative py-2 px-4 rounded-lg bg-[#F5F5F5] ${outerclass}`
        )}
      >
        <input
          type="text"
          value={value}
          onChange={() => onChange}
          placeholder={placeholder || "Search"}
          disabled={disabled}
          className="w-full bg-transparent focus:outline-none text-sm ml-6"
        />
        <FiSearch className="absolute left-4 top-3 text-[#989898]" />
      </div>
    </>
  );
};

export default UiSearch;
