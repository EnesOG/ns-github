import languages from "../../shared/languages";
import Select, { SelectProps } from "../Select/Select";

interface LanguageFilterProps extends Omit<SelectProps, "options"> {}

const LanguageFilter = (props: LanguageFilterProps) => {
  return (
    <div className="flex-full md:flex-none">
      <Select
        {...props}
        label="Filter op programmeertaal"
        options={languages}
        isMulti
        isSearchable
      />
    </div>
  );
};

export default LanguageFilter;
