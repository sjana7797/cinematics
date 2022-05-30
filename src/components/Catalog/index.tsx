import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbAPI } from "../../api/tmdb";
import { Category, Content, MovieType, TVType } from "../../typing";
import Loading from "../Loading";
import ContentGrid from "./ContentGrid";
import Pageheader from "./Pageheader";
import SearchText from "./SearchText";

function Catalog() {
  const { category } = useParams();
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const getCategory =
    category && category === Category.movie ? "Movies" : "TV Series";
  const cate = category === Category.movie ? Category.movie : Category.tv;
  const loadMoreContent = async () => {
    setLoadingBtn(true);
    setPage((prevPage) => prevPage + 1);
    if (category === Category.movie) {
      const movie = await tmdbAPI.getMovieList(MovieType.upcoming, {
        params: { page },
      });
      setContents([...contents, ...movie.results]);
    } else if (category === Category.tv) {
      const tv = await tmdbAPI.getTVList(TVType.popular, {
        params: { page },
      });
      console.log(tv);
      setContents([...contents, ...tv.results]);
    }
    setLoadingBtn(false);
  };
  useEffect(() => {
    const getMovie = async () => {
      const data = await tmdbAPI.getMovieList(MovieType.upcoming, {
        params: { page: 1 },
      });
      setContents([...data.results]);
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    };
    const getTv = async () => {
      const data = await tmdbAPI.getTVList(TVType.popular, {
        params: { page: 1 },
      });
      setContents([...data.results]);
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    };
    if (category === Category.movie) {
      getMovie();
    } else {
      getTv();
    }
  }, [category]);

  return (
    <>
      <Pageheader title={getCategory} />
      <SearchText />
      {loading ? (
        <Loading />
      ) : (
        <ContentGrid
          category={cate}
          contents={contents}
          loadMoreContent={loadMoreContent}
          loadingBtn={loadingBtn}
        />
      )}
    </>
  );
}

export default Catalog;
