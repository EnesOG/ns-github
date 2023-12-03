import SearchSvg from "@/components/Icons/SearchSvg";
import Input, { InputProps } from "@/components/Input/Input";
import { absoluteCenter } from "@/shared/classNames";
import { MouseEventHandler } from "react";
import SearchReset from "./SearchReset";

export interface SearchBarProps extends InputProps {
  onDelete?: MouseEventHandler<HTMLDivElement>;
}

const SearchBar = ({ value, onDelete, ...props }: SearchBarProps) => {
  const showReset = value !== (undefined || "");
  return (
    <div className="relative">
      <SearchSvg className={`${absoluteCenter} left-4 fill-primary`} />
      <Input className="pl-12" value={value} {...props} />
      {showReset && <SearchReset onClick={onDelete} />}
    </div>
  );
};

export default SearchBar;
