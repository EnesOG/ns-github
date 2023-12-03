import RepositoriesCount from "./RepositoriesCount";

export interface RepositoriesInfoProps {
  count: number;
}

const RepositoriesInfo = ({ count }: RepositoriesInfoProps) => {
  return (
    <div className="flex items-center my-4 flex-wrap gap-4">
      <div className="flex-full">
        <RepositoriesCount count={count} />
      </div>
    </div>
  );
};

export default RepositoriesInfo;
