import { Link } from "react-router-dom";
import { Category, Movie } from "../../../typing";
import { BASE_IMG_URL } from "../../../utils/tmdbAPIConfig";

type Props = { category: Category; content: Movie };

function Card({ category, content }: Props) {
  const { id, poster_path, title, original_title } = content;
  const poster = BASE_IMG_URL.w500(poster_path);
  const name = title || original_title;
  return (
    <Link to={`/${category}/${id}`}>
      <div className="group flex flex-col space-y-4">
        <div className="overflow-hidden rounded-2xl">
          <img
            className="lazyload transition-transform duration-300 group-hover:scale-110"
            data-src={poster}
            alt={name}
            src="https://via.placeholder.com/500/FFFFFF/000000"
          />
        </div>
        <h2 className="text-lg font-semibold text-white underline-offset-2 group-hover:underline">
          {name}
        </h2>
      </div>
    </Link>
  );
}

export default Card;
