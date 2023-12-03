import RepositorySkeleton from "../Repository/RepositorySkeleton";

const length = 10;
const RepositoriesSkeleton = () =>
  Array.from(Array(length).keys()).map((key) => (
    <RepositorySkeleton className="mt-4" key={key} />
  ));

export default RepositoriesSkeleton;
