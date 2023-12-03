import Skeleton, { SkeletonProps } from "../Skeleton/Skeleton";

const RepositorySkeleton = ({ className = "", ...props }: SkeletonProps) => {
  return <Skeleton className={`w-full h-32 ${className}`} {...props} />;
};

export default RepositorySkeleton;
