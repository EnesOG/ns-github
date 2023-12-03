import useFilters from "@/atoms/useFilters";
import { selectOptionsToLabels } from "@/shared/helpers";
import langauges from "@/shared/languages";
import { onSelectChange } from "@/shared/types";
import { FormEventHandler, useMemo, useState } from "react";

const useRepositoriesFilters = (close: Function) => {
  const [filters, setFilters] = useFilters();
  const [localFilters, setLocal] = useState(filters);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    close();
    setFilters(localFilters);
  };
  const updateStars = (value: number[]) =>
    setLocal((v) => ({ ...v, stars: value }));
  const updateForks = (value: number[]) =>
    setLocal((v) => ({ ...v, forks: value }));

  const updateLanguages: onSelectChange = (value) =>
    setLocal((v) => ({ ...v, languages: selectOptionsToLabels(value) }));

  const defaultLanguages = useMemo(
    () => langauges.filter((l) => filters.languages.includes(l.label)),
    []
  );
  return {
    localFilters,
    handleSubmit,
    updateForks,
    updateStars,
    updateLanguages,
    defaultLanguages,
  };
};

export default useRepositoriesFilters;
