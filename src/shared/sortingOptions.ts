import { SelectOptionType } from "./types";

const sortingOptions: SelectOptionType[] = [
  {
    label: "Standaard",
    value: "",
  },
  {
    label: "Sterren (hoog-laag)",
    value: "&sort=stars&order=desc",
  },
  {
    label: "Sterren (laag-hoog)",
    value: "&sort=stars&order=asc",
  },
  {
    label: "Forks (hoog-laag)",
    value: "&sort=forks&order=desc",
  },
  {
    label: "Forks (laag-hoog)",
    value: "&sort=forks&order=asc",
  },
];

export default sortingOptions;
