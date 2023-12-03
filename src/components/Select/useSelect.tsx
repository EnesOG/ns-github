import useSearchHook from "@/hooks/useSearchHook";
import { searchArray, selectOptionsToLabels, toggle } from "@/shared/helpers";
import { SelectOptionType, onSelectChange } from "@/shared/types";
import { useMemo, useState } from "react";

export interface useSelectProps {
  onChange: onSelectChange;
  options: SelectOptionType[];
  isMulti?: boolean;
  isSearchable?: boolean;
  label?: string;
  defaultValue?: SelectOptionType[];
}
const useSelect = ({
  isMulti = false,
  isSearchable = false,
  options = [],
  label = "",
  onChange,
  defaultValue = [],
}: useSelectProps) => {
  const { debounced, search, reset, handleChange } = useSearchHook(250);
  const [values, setValues] = useState<SelectOptionType[]>(defaultValue);
  const resetValues = () => setValues([]);
  const handleClick = (value: SelectOptionType) => {
    setValues((current) => {
      const newValue = isMulti
        ? toggle(current, value, (item) => item.value)
        : [value];
      console.log(newValue);
      onChange(newValue);
      return newValue;
    });
    reset();
  };

  const filtered = useMemo(
    () =>
      isSearchable && search !== ""
        ? searchArray(options, debounced, (item) => item.label)
        : options,
    [isSearchable, debounced, options]
  );

  const isActive = (value: string) =>
    values.find((v) => v.value === value) !== undefined;

  const buttonLabel = isMulti
    ? values.length === 0
      ? label
      : `${label}: ${selectOptionsToLabels(values).join(",")}`
    : label;

  const showDelete = isMulti && values.length > 1;

  return {
    handleClick,
    handleChange,
    filtered,
    search,
    values,
    showDelete,
    isActive,
    reset,
    buttonLabel,
    resetValues,
  };
};

export default useSelect;
