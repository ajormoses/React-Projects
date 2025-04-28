import clsx from "clsx";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  customField?: string;
  placeholder?: string;
  onChange?: (value: Option | null) => void;
  showClear?: boolean;
  error?: string;
}

const UiDropdown: React.FC<Props> = ({
  options,
  customField,
  placeholder = "Select an option",
  onChange,
  showClear,
  error,
}) => {
  const [selected, setSelected] = useState<Option | null>(null);

  const handleChange = (e: any) => {
    setSelected(e.value);
    if (onChange) onChange(e.value);
  };

  return (
    <>
      <Dropdown
        value={selected}
        onChange={handleChange}
        options={options}
        optionLabel="label"
        showClear={showClear}
        placeholder={placeholder}
        auto-filter-focus
        className={clsx("custom-dropdown", [
          {
            "p-invalid !border !border-red-500": error,
          },
          customField,
        ])}
        pt={{
          root: {
            className:
              "flex justify-between item-center border border-[#D4D4D4] text-primary rounded-md h-[42px] pt-2 px-3 relative",
          },
          clearIcon: {
            class: "absolute right-[30px] mt-1.5",
          },
          trigger: {
            className: "text-primary mt-1.5",
          },
          input: {
            className: "text-primary text-sm",
          },
          panel: {
            className:
              "bg-white border border-[#D4D4D4] rounded-md shadow-lg mt-1",
          },
          item: {
            className:
              "px-3 py-2 text-sm text-primary cursor-pointer hover:!bg-[#F5F5F5] outline-none hover:border-transparent",
          },
        }}
      />
      <small v-if="error" className="p-error">
        {error}
      </small>
    </>
  );
};

export default UiDropdown;
