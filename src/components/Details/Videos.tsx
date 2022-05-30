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
    width: "100%",
    height: "85vh",
  };
  useEffect(() => {
    tmdbAPI.getVideos(category, id).then((data) => {
      setVideos(data.results);
    });
  }, []);
  return (
    <section className="my-5 px-2">
      <h2 className="my-10 ml-5 text-5xl">Videos</h2>
      <div className="flex flex-col space-y-10">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col">
            <h3 className="text- my-2 ml-5">{video.name}</h3>
            <ReactPlayer
              {...videoPlayerOptions}
              className="h-full w-full"
              url={`https://www.youtube.com/watch?v=${video.key}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Videos;
