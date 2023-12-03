import { RepositoriesSearchResults } from "@/shared/types";
import { useQueryClient } from "@tanstack/react-query";
import { SearchHistory } from "../SearchHistory/SearchHistory";

const useHistory = () => {
  const queryClient = useQueryClient();
  const searches = queryClient
    .getQueriesData<RepositoriesSearchResults>({
      queryKey: ["search"],
      exact: false,
      type: "all",
    })
    .filter((search) => search[1] !== undefined) as SearchHistory[];
  return { searches };
};

export default useHistory;
