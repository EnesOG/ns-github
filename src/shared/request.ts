import { baseApiUrl } from "./helpers";

async function request<T = Response>(
  input: RequestInfo,
  init?: RequestInit | undefined
) {
  let response = await fetch(baseApiUrl(input), init);
  return await response
    .json()
    .then((res: T) => (response.ok ? res : Promise.reject(res)));
}

export default request;
