import { useEffect } from "react";
import Input from "../Input/Input";
import FilterLabel from "./FilterLabel";
import useRangeFilter from "./useRangeFilter";

export interface RangeFilterProps {
  minValue?: number | string;
  maxValue?: number | string;
  label?: string;
  onChange: (value: any[]) => void;
}

const RangeFilter = ({
  minValue = 0,
  maxValue = 10,
  label = "Sterren",
  onChange,
}: RangeFilterProps) => {
  const { min, max, setMin, setMax } = useRangeFilter({ minValue, maxValue });
  useEffect(() => {
    onChange([min, max]);
  }, [min, max]);
  return (
    <div className="flex gap-4 items-center flex-full">
      <FilterLabel>{label}</FilterLabel>
      <Input
        required
        name={`${label}-min`}
        max={typeof max === "string" ? "" : max - 1}
        min={0}
        className="pl-4"
        value={min}
        onChange={setMin}
        type={"number"}
        placeholder="Minimaal"
      />
      <Input
        required
        type={"number"}
        name={`${label}-max`}
        max={max}
        min={minValue}
        className="pl-4"
        value={max}
        onChange={setMax}
        placeholder="Maximaal"
      />
    </div>
  );
};

export default RangeFilter;
