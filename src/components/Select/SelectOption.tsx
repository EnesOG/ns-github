import { DetailedHTMLProps, LiHTMLAttributes } from "react";

export interface SelectOptionProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  active?: boolean;
}

const SelectOption = ({
  active = false,
  className = "",
  ...props
}: SelectOptionProps) => (
  <li
    className={`hover:bg-tertiary hover:text-white p-4 cursor-pointer ${
      active ? "bg-tertiary text-white" : ""
    } ${className}`}
    {...props}
  />
);

export default SelectOption;
