import useHighestForkQuery from "@/hooks/useHighestForksQuery";
import useHighestStarQuery from "@/hooks/useHighestStarQuery";
import useToggle from "@/hooks/useToggle";
import Button from "../Button/Button";
import RepositoriesFilters from "./RepositoriesFilters";

const RepositoriesFilterButton = () => {
  const { value, toggle, close } = useToggle();
  const { data: starCount, isLoading: isHighestStarLoading } =
    useHighestStarQuery();
  const { data: forkCount, isLoading: isHighestForkLoading } =
    useHighestForkQuery();

  const isLoading = isHighestStarLoading || isHighestForkLoading;
  return (
    <>
      <Button className="flex-auto" isLoading={isLoading} onClick={toggle}>
        Filters
      </Button>
      {value && starCount && forkCount && (
        <RepositoriesFilters
          close={close}
          forkCount={forkCount}
          starCount={starCount}
        />
      )}
    </>
  );
};

export default RepositoriesFilterButton;
