import { DetailedHTMLProps } from "react";

export interface SkeletonProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Skeleton = ({ className = "", ...props }: SkeletonProps) => {
  return (
    <div
      className={`rounded-sm animate-skeleton bg-skeleton ${className}`}
      {...props}
    />
  );
};

export default Skeleton;
