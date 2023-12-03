import useSort from "@/atoms/useSort";
import { onSelectChange } from "@/shared/types";

const useSortHook = () => {
  const [sort, setSort] = useSort();
  const handleSort: onSelectChange = (value) => {
    return setSort(value[0]);
  };
  return { sort, handleSort };
};

export default useSortHook;
