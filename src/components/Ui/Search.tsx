import { FiSearch } from "react-icons/fi";

interface Props {
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
const UiSearch: React.FC<Props> = ({ value, onChange, disabled }) => {
  return (
    <>
      <div className="relative py-2 px-4 rounded-lg bg-[#F5F5F5]">
        <input
          type="text"
          value={value}
          onChange={() => onChange}
          placeholder="Search..."
          disabled={disabled}
          className="w-full bg-transparent focus:outline-none text-sm ml-6"
        />
        <FiSearch className="absolute left-4 top-3 text-[#989898]" />
      </div>
    </>
  );
};

export default UiSearch;
