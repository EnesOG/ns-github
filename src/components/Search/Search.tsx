import useRepositoriesSearch from "@/hooks/useRepositoriesSearch";
import useSearchHook from "@/hooks/useSearchHook";
import Repositories from "../Repositories/Repositories";
import RepositoriesError from "../Repositories/RepositoriesError";
import RepositoriesFilterButton from "../Repositories/RepositoriesFilterButton";
import RepositoriesSkeleton from "../Repositories/RepositoriesSkeleton";
import RepositoriesSort from "../Repositories/RepositoriesSort";
import SearchBar from "../SearchBar/SearchBar";

const Search = () => {
  const { debounced, search, reset, handleChange } = useSearchHook();
  const { refetch, data, isLoading, isSuccess, isError } =
    useRepositoriesSearch(debounced);
  return (
    <>
      <div className="flex flex-wrap gap-6">
        <div className="flex-full">
          <SearchBar
            placeholder="Zoek naar een repository"
            onDelete={reset}
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className="flex-auto">
          <RepositoriesSort />
        </div>
        <RepositoriesFilterButton />
      </div>

      {isError && <RepositoriesError onRetry={() => refetch()} />}
      {isLoading && <RepositoriesSkeleton />}
      {isSuccess && (
        <Repositories resultCount={data.total_count} data={data.items} />
      )}
    </>
  );
};

export default Search;
