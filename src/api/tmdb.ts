import { tmdbAxios } from "../utils/tmdbAxios";
import { Category, MovieType, TVType } from "../typing";

const tmdbAPI = {
  getTrending: () => {
    const url = `trending/movie/week`;
    return tmdbAxios.get(url, { params: {} }).then((response) => response.data);
  },
  getMovieList: (type: MovieType, params: Object) => {
    const url = `movie/${MovieType[type]}`;
    return tmdbAxios.get(url, params).then((response) => response.data);
  },
  getTVList: (type: TVType, params: Object) => {
    const url = `tv/${TVType[type]}`;
    return tmdbAxios.get(url, params).then((response) => response.data);
  },
  getVideos: (category: Category, id: string) => {
    const url = `${Category[category]}/${id}/videos`;
    return tmdbAxios.get(url, { params: {} }).then((response) => response.data);
  },
  search: (category: Category, params: Object) => {
    const url = `search/${Category[category]}`;
    return tmdbAxios.get(url, params).then((response) => response.data);
  },
  detail: (category: Category, id: string, params: Object) => {
    const url = `${Category[category]}/${id}`;
    return tmdbAxios.get(url, params).then((response) => response.data);
  },
  credits: (category: Category, id: string) => {
    const url = `${Category[category]}/${id}/credits`;
    return tmdbAxios.get(url, { params: {} }).then((response) => response.data);
  },
  similar: (category: Category, id: string) => {
    const url = `${Category[category]}/${id}/similar`;
    return tmdbAxios.get(url, { params: {} }).then((response) => response.data);
  },
};

export { tmdbAPI };
