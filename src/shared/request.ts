import { baseApiUrl } from "./helpers";

async function request<T = Response>(input: RequestInfo, init?: RequestInit) {
  let response = await fetch(baseApiUrl(input), init);
  if (!response.ok) return Promise.reject(response.json());
  return response.json() as T;
}

export default request;
