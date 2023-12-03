import { formatCompact } from "@/shared/helpers";
import { RepositoryType } from "@/shared/types";
import StarSvg from "../Icons/StarSvg";

export interface RepositoryProps extends RepositoryType {}

const Repository = ({
  full_name,
  description,
  language,
  owner,
  stargazers_count,
  svn_url,
}: RepositoryProps) => {
  return (
    <div className="w-full bg-white shadow-md p-6 rounded-md">
      <div className="flex items-center">
        <img
          className="bg-grey w-full h-auto max-w-avatar rounded-full mr-4"
          src={owner.avatar_url}
          alt="Owner avatar url"
        />
        <a
          target="_blank"
          className="text-primary font-bold overflow-hidden whitespace-nowrap	text-ellipsis"
          href={svn_url}
        >
          {full_name}
        </a>
      </div>
      <p className="my-2 text-black">{description}</p>
      <div className="text-grey text-sm fill-grey flex gap-4 items-center">
        <div>{language}</div>
        <div className="flex items-center gap-2">
          <StarSvg />
          {formatCompact(stargazers_count)}
        </div>
      </div>
    </div>
  );
};

export default Repository;
