import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { tmdbAPI } from "../api/tmdb";
import Detail from "../components/Details/Detail";
import PageHeader from "../components/Details/PageHeader";
import Recomendations from "../components/Details/Recomendations";
import Videos from "../components/Details/Videos";
import Loading from "../components/Loading";
import { Category, Movie, TV } from "../typing";

function Details() {
  const { category, id } = useParams();
  const cate = category === Category.movie ? Category.movie : Category.tv;
  const content = useQuery<Movie | TV, Error>([`${cate}_${id}`], async () => {
    const content = await tmdbAPI.detail(cate, id || "", {
      params: {},
    });
    return content;
  });
  return !content.isLoading && content.data ? (
    <>
      <PageHeader img={content.data.backdrop_path} />
      <Detail content={content.data} category={cate} />
      <Videos id={id || ""} category={cate} />
      <Recomendations category={cate} id={id || ""} />
    </>
  ) : (
    <Loading />
  );
}

export default Details;
