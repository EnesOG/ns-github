import { getHighestStarCount } from "@/shared/getters";
import { useQuery } from "@tanstack/react-query";

const useHighestStarQuery = () => {
  const queryKey = ["getHighestStarCount"];
  const queryFn = () => getHighestStarCount();
  return useQuery({
    queryKey,
    queryFn,
    select: (data) => data?.items?.[0]?.stargazers_count,
  });
};

export default useHighestStarQuery;
