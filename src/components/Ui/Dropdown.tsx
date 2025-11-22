import clsx from "clsx";
import { Dropdown } from "primereact/dropdown";
// import { useState } from "react";

interface Option {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface Props {
  options: Option[];
  label: string;
  value: string | null;
  customField?: string;
  placeholder?: string;
  onChange?: (value: Option | null) => void;
  showClear?: boolean;
  error?: string;
}

const UiDropdown: React.FC<Props> = ({
  options,
  label,
  value,
  customField,
  placeholder = "Select an option",
  onChange,
  showClear,
  error,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <label className={clsx("text-xs", error && "!text-red-500")}>
          {label}
        </label>
        <Dropdown
          value={value}
          onChange={(e) => onChange?.(e.value)}
          options={options}
          optionLabel="label"
          showClear={showClear}
          placeholder={placeholder}
          itemTemplate={(option) => (
            <div className="flex items-center gap-2">
              {option.icon && <span className="text-grey">{option.icon}</span>}
              <span>{option.label}</span>
            </div>
          )}
          valueTemplate={(option) =>
            option ? (
              <div className="flex items-center gap-2">
                {option.icon && (
                  <span className="text-grey">{option.icon}</span>
                )}
                <span>{option.label}</span>
              </div>
            ) : (
              <span className="text-grey">{placeholder}</span>
            )
          }
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
                "flex justify-between item-center border border-[#D9D9D9] bg-white text-primary rounded-md h-[48px] pt-3  px-3 relative",
            },
            clearIcon: {
              class: "absolute right-[30px] mt-1.5",
            },
            trigger: {
              className: "text-primary mt-1.5",
            },
            input: {
              className: "!text-grey text-sm",
            },
            panel: {
              className:
                "bg-white border border-[#D9D9D9] rounded-md shadow-lg mt-1",
            },
            item: {
              className:
                "px-3 py-2 text-sm text-grey cursor-pointer !border-b !border-b-[#D9D9D9] hover:!bg-[#F5F5F5] outline-none hover:border-transparent",
            },
          }}
        />

        <small className="p-error">{error}</small>
      </div>
    </>
  );
};

export default UiDropdown;
