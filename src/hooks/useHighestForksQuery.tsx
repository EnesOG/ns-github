import { getHighestForkCount } from "@/shared/getters";
import { useQuery } from "@tanstack/react-query";

const useHighestForkQuery = () => {
  const queryKey = ["getHighestForkCount"];
  const queryFn = () => getHighestForkCount();
  return useQuery({
    queryKey,
    queryFn,
    select: (data) => data?.items?.[0]?.forks_count,
  });
};

export default useHighestForkQuery;
