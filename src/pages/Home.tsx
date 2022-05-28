import { useQuery } from "react-query";
import HeroSlider from "../components/Home/HeroSlider/HeroSlider";
import { tmdbAPI } from "../api/tmdb";
import { Movie, MovieType, TVType } from "../typing";
import Contents from "../components/Home/Contents";

function Home() {
  const params = { page: 1 };
  const popularMovies = useQuery<{ page: Number; results: Movie[] }, Error>(
    ["popular_movie"],
    async () => {
      const movies = await tmdbAPI.getMovieList(MovieType.popular, {
        params,
      });
      return movies;
    }
  );
  const trending = useQuery<{ page: Number; results: Movie[] }, Error>(
    ["trending"],
    async () => {
      const trending = await tmdbAPI.getTrending();
      return trending;
    }
  );
  const topRatedMovies = useQuery<{ page: Number; results: Movie[] }, Error>(
    ["top_rated_movie"],
    async () => {
      const movies = await tmdbAPI.getMovieList(MovieType.top_rated, {
        params,
      });
      return movies;
    }
  );
  const topRatedTV = useQuery<{ page: Number; results: Movie[] }, Error>(
    "top_rated_tv",
    async () => {
      const tvs = await tmdbAPI.getTVList(TVType.top_rated, {
        params,
      });
      return tvs;
    }
  );
  const popularTV = useQuery<{ page: Number; results: Movie[] }, Error>(
    "popular_tv",
    async () => {
      const tvs = await tmdbAPI.getTVList(TVType.popular, {
        params,
      });
      return tvs;
    }
  );

  const contents = {
    popularMovies: popularMovies.data?.results,
    topRatedMovies: topRatedMovies.data?.results,
    topRatedTV: topRatedTV.data?.results,
    trending: trending.data?.results,
    popularTV: popularTV.data?.results,
  };

  const showHeroSlide = () => {
    if (popularMovies.isLoading) return <div>loading</div>;
    if (popularMovies.data)
      return <HeroSlider movies={popularMovies.data.results.slice(0, 5)} />;
  };

  return (
    <>
      {showHeroSlide()}
      <Contents contents={contents} />
    </>
  );
}

export default Home;
