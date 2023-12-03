import { formatCompact } from "@/shared/helpers";
import { RepositoriesInfoProps } from "./RepositoriesInfo";

export interface RepositoriesCountProps extends RepositoriesInfoProps {}

const RepositoriesCount = ({ count }: RepositoriesCountProps) => {
  return (
    <div className="grow shrink-0">
      10 van de {formatCompact(count)} resultaten
    </div>
  );
};

export default RepositoriesCount;
