import { SelectOptionType } from "@/shared/types";
import { ChangeEventHandler } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { SelectProps } from "./Select";
import SelectOption from "./SelectOption";

export interface SelectOptionsProps extends SelectProps {
  reset: () => void;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  search: string;
  isActive: (value: string) => boolean;
  handleClick: (value: SelectOptionType) => void;
}
const SelectOptions = ({
  options = [],
  label,
  isSearchable,
  reset,
  search,
  handleChange,
  isActive,
  handleClick,
}: SelectOptionsProps) => {
  return (
    <ul className="max-h-options overflow-auto z-10 w-full absolute right-0 rounded-md  bg-white shadow-lg whitespace-nowrap translate-y-4">
      <div className="p-4">{label}</div>
      {isSearchable && (
        <SearchBar onDelete={reset} onChange={handleChange} value={search} />
      )}
      {options.map((option) => (
        <SelectOption
          onClick={() => handleClick(option)}
          active={isActive(option.value)}
          key={option.value}
        >
          {option.label}
        </SelectOption>
      ))}
    </ul>
  );
};

export default SelectOptions;
