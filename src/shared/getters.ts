import request from "./request";
import { RepositoriesSearchResults } from "./types";

export const searchRepositories = (query: string, sort = "") =>
  request<RepositoriesSearchResults>(
    `/search/repositories?per_page=10&${query}${sort}`
  );

export const getHighestStarCount = () =>
  request<RepositoriesSearchResults>(
    `/search/repositories?q=stars:>1&sort=stars`
  );

export const getHighestForkCount = () =>
  request<RepositoriesSearchResults>(
    `/search/repositories?q=forks:>1&sort=forks`
  );
