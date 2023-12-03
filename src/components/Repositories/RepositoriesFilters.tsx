import useRepositoriesFilters from "@/hooks/useRepositoriesFilters";
import Button from "../Button/Button";
import LanguageFilter from "../Filter/LanguageFilter";
import RangeFilter from "../Filter/RangeFilter";

export interface RepositoriesFiltersProps {
  starCount?: number;
  forkCount?: number;
  close: Function;
}

const RepositoriesFilters = ({
  starCount = 0,
  forkCount = 0,
  close,
}: RepositoriesFiltersProps) => {
  const {
    localFilters,
    handleSubmit,
    updateForks,
    updateStars,
    updateLanguages,
    defaultLanguages,
  } = useRepositoriesFilters(close);
  return (
    <form onSubmit={handleSubmit} className="flex-full flex flex-wrap gap-6">
      <RangeFilter
        onChange={updateStars}
        minValue={localFilters?.stars?.[0]}
        maxValue={starCount}
      />
      <RangeFilter
        onChange={updateForks}
        minValue={localFilters?.forks?.[0]}
        maxValue={forkCount}
        label="Forks"
      />
      <LanguageFilter
        defaultValue={defaultLanguages}
        onChange={updateLanguages}
      />
      <Button className="flex-full md:flex-none">Opslaan</Button>
    </form>
  );
};

export default RepositoriesFilters;
