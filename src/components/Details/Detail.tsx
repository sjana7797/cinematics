import { Category, Movie, TV } from "../../typing";
import { BASE_IMG_URL } from "../../utils/tmdbAPIConfig";
import Castlist from "./Castlist";

type Props = {
  content: Movie | TV;
  category: Category;
};
function Detail({ content, category }: Props) {
  const {
    poster_path,
    name,
    original_name,
    title,
    original_title,
    overview,
    genres,
    id,
  } = content;
  const content_name = title || original_title || name || original_name || "";
  const image_url = BASE_IMG_URL.w500(poster_path);
  return (
    <section className="relative z-50 mx-auto -mt-[200px] flex max-w-7xl items-center p-2">
      <div className="hidden flex-1 md:block">
        <img
          data-src={image_url}
          alt=""
          className="lazyload rounded-xl object-cover"
        />
      </div>
      <div className="relative w-full pl-0 md:w-[70%] md:pl-5">
        <h2 className="mb-5 text-7xl font-bold">{content_name}</h2>
        <div className="mb-7 flex space-x-2 px-2">
          {genres.slice(0, 5).map((genre) => (
            <div
              key={genre.id}
              className="rounded-full border-2 bg-black px-4 py-1 text-sm text-base-content"
            >
              {genre.name}
            </div>
          ))}
        </div>
        <p className="mb-8 text-white">{overview}</p>
        <div className="flex flex-col space-y-8">
          <h3 className="text-xl font-medium capitalize">casts</h3>
          <Castlist category={category} id={id} />
        </div>
      </div>
    </section>
  );
}

export default Detail;
