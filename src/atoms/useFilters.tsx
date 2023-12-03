import { Filters } from "@/shared/types";
import { atom, useAtom, useSetAtom } from "jotai";

export const filtersAtom = atom<Filters>({
  stars: [],
  forks: [],
  languages: [],
});

const useFilters = () => {
  const atom = useAtom(filtersAtom);
  return atom;
};

export const useSetfilters = () => useSetAtom(filtersAtom);

export default useFilters;
