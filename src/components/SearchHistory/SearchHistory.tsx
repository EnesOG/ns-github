import useToggle from "@/hooks/useToggle";
import {
  Filters,
  RepositoriesSearchResults,
  SelectOptionType,
} from "@/shared/types";
import Repositories from "../Repositories/Repositories";
import useSearchHistory from "./useSearchHistory";

type QueryKey = [string, string, SelectOptionType, Filters];

export type SearchHistory = [QueryKey, RepositoriesSearchResults];

export interface SearchHistoryProps {
  search: SearchHistory;
}
const SearchHistory = ({ search }: SearchHistoryProps) => {
  const { toggle, value } = useToggle();
  const { label } = useSearchHistory({ search });
  const data = search[1];
  return (
    <div className="mb-8">
      <div
        onClick={toggle}
        className="bg-white rounded-md shadow-md p-8 cursor-pointer"
      >
        {label}
      </div>

      {value && data && (
        <Repositories resultCount={data.total_count} data={data.items} />
      )}
    </div>
  );
};

export default SearchHistory;
