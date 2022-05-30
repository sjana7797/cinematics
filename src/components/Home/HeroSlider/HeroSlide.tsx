import { Dispatch, SetStateAction } from "react";
import { tmdbAPI } from "../../../api/tmdb";
import { Category, Content } from "../../../typing";
import { BASE_IMG_URL } from "../../../utils/tmdbAPIConfig";

type Props = {
  movie: Content;
  isActive: boolean;
  openModal: Dispatch<SetStateAction<boolean>>;
  setUrl: Dispatch<SetStateAction<string>>;
};
function HeroSlide({ movie, isActive, openModal, setUrl }: Props) {
  const img_url = movie.backdrop_path || movie.poster_path;
  const bgImage = BASE_IMG_URL.original(img_url);
  const { title, overview, poster_path, id } = movie;
  const getVideo = async () => {
    const video = await tmdbAPI.getVideos(Category.movie, `${id}`);
    setUrl(`https://www.youtube.com/watch?v=${video.results[0].key}`);
  };
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-24 px-2 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black/60 before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-24 after:w-full after:bg-gradient-to-t after:from-dark after:to-black/0 after:content-[''] md:px-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative flex items-center justify-center">
        <div className="relative w-full py-8 md:w-[55%]">
          <h2
            className={`dropdown-transistion mt-8 text-4xl font-bold leading-none md:text-7xl ${
              isActive && "!translate-y-0 !opacity-100 !delay-[0.3s,0.3s]"
            }`}
          >
            {title}
          </h2>
          <div
            className={`dropdown-transistion mt-8 font-bold ${
              isActive && "!translate-y-0 !opacity-100 !delay-[0.6s,0.6s]"
            }`}
          >
            {overview}
          </div>
          <div
            className={`dropdown-transistion mt-8 ${
              isActive && "!translate-y-0 !opacity-100 !delay-[0.9s,0.9s]"
            }`}
          >
            <button className="btn btn-primary mx-4 my-2 font-semibold hover:shadow-[0_0_7px_15px] md:my-0">
              Watch now
            </button>
            <button
              className="btn btn-outline mx-4 my-2 md:my-0"
              onClick={async () => {
                await getVideo();
                openModal(true);
              }}
            >
              Watch trailer
            </button>
          </div>
        </div>
        <div className="relative hidden flex-1 items-center justify-start md:flex">
          <img
            data-src={BASE_IMG_URL.w500(poster_path)}
            alt=""
            className={`lazyload w-96 scale-0 transform rounded-lg shadow-[0_7px_29px_0px] shadow-black/20 transition-transform duration-700 ${
              isActive && "scale-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;
