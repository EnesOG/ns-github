import { DetailedHTMLProps } from "react";

export interface ContainerProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Container = ({ className = "", ...props }: ContainerProps) => {
  return (
    <div
      className={`px-6 mx-auto md:max-w-container ${className}`}
      {...props}
    />
  );
};

export default Container;
