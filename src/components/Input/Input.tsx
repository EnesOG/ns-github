import { inputBase } from "@/shared/classNames";
import { DetailedHTMLProps } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = ({ className = "", ...props }: InputProps) => {
  return <input className={`${inputBase}  w-full ${className}`} {...props} />;
};

export default Input;
