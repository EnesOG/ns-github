import useSortHook from "@/hooks/useSortHook";
import sortingOptions from "@/shared/sortingOptions";
import Select from "../Select/Select";

const RepositoriesSort = () => {
  const { handleSort } = useSortHook();
  return <Select onChange={handleSort} options={sortingOptions} />;
};

export default RepositoriesSort;
