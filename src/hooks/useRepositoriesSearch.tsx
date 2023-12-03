import useFilters from "@/atoms/useFilters";
import useSort from "@/atoms/useSort";
import { searchRepositories } from "@/shared/getters";
import { toGithubQuery } from "@/shared/helpers";
import { useQuery } from "@tanstack/react-query";

const useRepositoriesSearch = (search: string) => {
  const [filters] = useFilters();
  const [sort] = useSort();
  const enabled = search !== "";
  const query = toGithubQuery(search, filters);
  const queryKey = ["search", search, sort, filters];
  const queryFn = () => searchRepositories(query, sort.value);
  return useQuery({
    queryKey,
    queryFn,
    enabled,
  });
};

export default useRepositoriesSearch;
