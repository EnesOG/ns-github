import TimesSvg from "@/components/Icons/TimesSvg";
import { absoluteCenter } from "@/shared/classNames";
import { DetailedHTMLProps } from "react";

interface SearchResetProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const SearchReset = ({ className = "", ...props }: SearchResetProps) => {
  return (
    <div
      {...props}
      className={`h-14 w-14 ${absoluteCenter} right-1 bg-white flex items-center justify-center cursor-pointer ${className}`}
    >
      <TimesSvg className={`fill-grey`} />
    </div>
  );
};

export default SearchReset;
