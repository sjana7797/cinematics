import { Link } from "react-router-dom";
import { Category, Content } from "../../../typing";
import { BASE_IMG_URL } from "../../../utils/tmdbAPIConfig";

type Props = { category: Category; content: Content };

function Card({ category, content }: Props) {
  const {
    id,
    poster_path,
    title,
    original_title,
    original_name,
    name,
    media_type,
  } = content;
  const poster = BASE_IMG_URL.w500(poster_path);
  const content_name =
    title || original_title || name || original_name || "Content Title";
  const category_type = media_type || category;
  return (
    <Link to={`/${category_type}/${id}`}>
      <div className="group flex flex-col space-y-4">
        <div className="overflow-hidden rounded-2xl">
          <img
            className="lazyload transition-transform duration-300 group-hover:scale-110"
            data-src={poster}
            alt={content_name}
            src="https://via.placeholder.com/500/FFFFFF/000000"
          />
        </div>
        <h2 className="text-lg font-semibold text-white underline-offset-2 group-hover:underline">
          {content_name}
        </h2>
      </div>
    </Link>
  );
}

export default Card;
