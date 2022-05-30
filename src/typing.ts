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

export interface Content {
  backdrop_path: string;
  id: number;
  original_title?: string;
  overview: string;
  title?: string;
  poster_path: string;
  name?: string;
  original_name?: string;
  media_type?: Category;
}

export interface TV extends Content {
  adult: boolean;
  genre_ids: number[];
  genres: { id: number; name: string }[];
  original_language: string;
  popularity: Number;
  release_date: string;
  video: boolean;
  vote_average: Number;
  vote_count: Number;
}

export interface Movie extends Content {
  adult: boolean;
  genre_ids: number[];
  genres: { id: number; name: string }[];
  original_language: string;
  popularity: Number;
  video: boolean;
  vote_average: Number;
  vote_count: Number;
}

export interface Cast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: true;
  published_at: string;
  site: string;
  size: number;
  type: string;
}
