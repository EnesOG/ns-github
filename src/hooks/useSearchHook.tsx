import { ChangeEventHandler, useState } from "react";
import { useDebounce } from "./useDebounce";

const useSearchHook = (delay = 500) => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, delay);
  const reset = () => setSearch("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearch(e.target.value);
  return { search, setSearch, debounced, reset, handleChange };
};

export default useSearchHook;
