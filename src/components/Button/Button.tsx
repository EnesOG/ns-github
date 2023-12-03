import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Spinner from "../Spinner/Spinner";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
}
const Button = ({
  isLoading = false,
  className = "",
  children,
  ...props
}: ButtonProps) => (
  <button
    disabled={isLoading}
    className={`${className} py-4 px-8 ${
      isLoading ? "cursor-not-allowed bg-grey" : "bg-tertiary"
    } rounded-md text-white flex items-center justify-center`}
    {...props}
  >
    {isLoading ? (
      <Spinner color={isLoading ? "border-t-grey" : undefined} />
    ) : (
      children
    )}
  </button>
);

export default Button;
