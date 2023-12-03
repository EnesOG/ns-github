import { Filters, SelectOptionType } from "./types";

export const baseApiUrl = (path: RequestInfo) =>
  `${import.meta.env.VITE_API_URL}${path}`;

export const formatCompact = (value: number | bigint) =>
  Intl.NumberFormat("nl", { notation: "compact" }).format(value);

export const filtersToGithubFilters = (filters: Filters) =>
  Object.entries(filters)
    .filter(([_, value]) => value.length !== 0)
    .map(([key, value]) => {
      return key === "languages"
        ? `language:${value}`
        : `${key}:${value[0]}..${value[1]}`;
    })
    .join(" ");

export const toGithubQuery = (search: string, filters: Filters) =>
  `q=${encodeURIComponent(
    `${search} ${filtersToGithubFilters(
      filters
    )} in:name in:description	in:topics	in:readme`
  )}`;

export const protectFromNan = (value: string) => {
  const num = parseInt(value, 10);
  return isNaN(num) ? "" : num;
};

export function removeAtIndex<T = any>(arr: T[], index: number) {
  const copy = [...arr];
  copy.splice(index, 1);
  return copy;
}

export function toggle<T = any>(
  arr: T[],
  item: T,
  getValue = (item: T): any => item
) {
  const index = arr.findIndex((i) => getValue(i) === getValue(item));
  if (index === -1) return [...arr, item];
  return removeAtIndex(arr, index);
}

export function searchArray<T = any>(
  arr: T[],
  search: string,
  getValue = (item: T): any => item
) {
  return arr.filter((item) =>
    String(getValue(item)).toLowerCase().includes(search.toLowerCase())
  );
}

export const selectOptionsToLabels = (values: SelectOptionType[]) =>
  values.map((v) => v.label);
