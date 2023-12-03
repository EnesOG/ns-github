import { SearchHistory } from "./SearchHistory";

export interface useSearchHistoryProps {
  search: SearchHistory;
}

const useSearchHistory = ({ search }: useSearchHistoryProps) => {
  const filters = Object.entries(search[0][3]).filter(
    ([_, values]) => values.length !== 0
  );
  const label = `Jouw zoek:  ${search[0][1]} - ${search[0][2].label} ${
    filters.length !== 0
      ? `- Filters: ${Object.entries(search[0][3]).map(
          ([key, values]) => `${key} -> ${values}`
        )}`
      : ``
  }`;

  return { label };
};

export default useSearchHistory;
