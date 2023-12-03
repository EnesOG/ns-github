import sortingOptions from "@/shared/sortingOptions";
import { atom, useAtom, useSetAtom } from "jotai";

export const sortAtom = atom(sortingOptions[0]);

const useSort = () => {
  const atom = useAtom(sortAtom);
  return atom;
};

export const useSetSort = () => useSetAtom(sortAtom);

export default useSort;
