export enum MovieType {
  popular = "popular",
  top_rated = "top_rated",
  upcoming = "upcoming",
}
export enum Category {
  movie = "movie",
  tv = "tv",
}

export enum TVType {
  popular = "popular",
  on_the_air = "on_the_air",
  top_rated = "top_rated",
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Number[];
  id: Number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: Number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: Number;
  vote_count: Number;
}
