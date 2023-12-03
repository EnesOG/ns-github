import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import useOnEscClick from "@/hooks/useOnEscClick";
import useToggle from "@/hooks/useToggle";
import { inputBase } from "@/shared/classNames";
import { SelectOptionType, onSelectChange } from "@/shared/types";
import { useRef } from "react";
import Button from "../Button/Button";
import TimesSvg from "../Icons/TimesSvg";
import SelectOptions from "./SelectOptions";
import useSelectOptions, { useSelectProps } from "./useSelect";

export interface SelectProps extends useSelectProps {
  options: SelectOptionType[];
  onChange: onSelectChange;
  label?: string;
}

const Select = ({
  label = "Sorteer op:",
  options,
  isMulti = false,
  isSearchable = false,
  onChange,
  defaultValue,
}: SelectProps) => {
  const { value, toggle, close } = useToggle();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, close);
  useOnEscClick(close);
  const {
    showDelete,
    buttonLabel,
    search,
    handleClick,
    handleChange,
    isActive,
    reset,
    resetValues,
    filtered,
  } = useSelectOptions({
    isMulti,
    defaultValue,
    isSearchable,
    onChange,
    options,
    label,
  });
  return (
    <div ref={ref} className="relative">
      <div className="flex gap-4">
        <button
          type="button"
          onClick={toggle}
          className={`${inputBase} min-w-select w-full cursor-pointer bg-white px-4 focus:outline-2 focus:-outline-focus-2 focus:outline ${
            isMulti
              ? "md:max-w-button overflow-hidden whitespace-nowrap	text-ellipsis"
              : ""
          }`}
        >
          {buttonLabel}
        </button>
        {showDelete && (
          <Button onClick={resetValues}>
            <TimesSvg className="fill-white" />
          </Button>
        )}
      </div>
      {value && (
        <SelectOptions
          handleClick={handleClick}
          reset={reset}
          handleChange={handleChange}
          search={search}
          isActive={isActive}
          isMulti={isMulti}
          isSearchable={isSearchable}
          label={label}
          onChange={onChange}
          options={filtered}
        />
      )}
    </div>
  );
};

export default Select;
