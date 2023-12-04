import { SearchHistory } from "./SearchHistory";

export interface useSearchHistoryProps {
  search: SearchHistory;
}

const useSearchHistory = ({ search }: useSearchHistoryProps) => {
  const [key] = search;
  const filters = Object.entries(key?.[3]).filter(
    ([_, values]) => values.length !== 0
  );
  const label = `Jouw zoek:  ${key?.[1]} - ${key?.[2].label} ${
    filters.length !== 0
      ? `- Filters: ${Object.entries(key?.[3]).map(
          ([key, values]) => `${key} -> ${values}`
        )}`
      : ``
  }`;

  return { label };
};

export default useSearchHistory;
