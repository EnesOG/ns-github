import { protectFromNan } from "@/shared/helpers";
import { ChangeEventHandler, useState } from "react";

type Setter = ChangeEventHandler<HTMLInputElement>;

interface useRangeFilterProps {
  minValue: number | string;
  maxValue: number | string;
}

const useRangeFilter = ({ minValue, maxValue }: useRangeFilterProps) => {
  const [value, setValue] = useState({ min: minValue, max: maxValue });
  const setMin: Setter = (e) =>
    setValue((v) => ({ ...v, min: protectFromNan(e.target.value) }));
  const setMax: Setter = (e) =>
    setValue((v) => ({ ...v, max: protectFromNan(e.target.value) }));
  return { ...value, setMin, setMax };
};

export default useRangeFilter;
