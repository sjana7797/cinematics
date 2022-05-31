import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { tmdbAPI } from "../../api/tmdb";
import { Category, Video } from "../../typing";

type Props = {
  id: string;
  category: Category;
};
function Videos({ id, category }: Props) {
  const [videos, setVideos] = useState<Video[]>([]);
  const videoPlayerOptions = {
    width: "600px",
  };
  useEffect(() => {
    tmdbAPI.getVideos(category, id).then((data) => {
      setVideos(data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="my-5 px-2">
      <h2 className="my-10 ml-5 text-5xl">Videos</h2>
      <div className="flex space-x-10 overflow-x-scroll scrollbar-hide">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col">
            <h3 className="text- my-2 ml-5">{video.name}</h3>
            <ReactPlayer
              {...videoPlayerOptions}
              className="w-full"
              url={`https://www.youtube.com/watch?v=${video.key}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Videos;
