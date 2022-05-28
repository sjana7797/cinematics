export const BASE_IMG_URL = {
  original: (img_path: string) =>
    `https://image.tmdb.org/t/p/original/${img_path}`,
  w500: (img_path: string) => `https://image.tmdb.org/t/p/w500/${img_path}`,
};
export const BASE_API_URL = "https://api.themoviedb.org/3";
export const API_KEY = process.env.REACT_APP_API_KEY || "";
