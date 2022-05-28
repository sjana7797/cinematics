import axios from "axios";
import { API_KEY, BASE_API_URL } from "./tmdbAPIConfig";
import queryString from "query-string";

const tmdbAxios = axios.create({
  baseURL: BASE_API_URL,
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: API_KEY }),
});

tmdbAxios.interceptors.request.use((config) => {
  return config;
});

export { tmdbAxios };
