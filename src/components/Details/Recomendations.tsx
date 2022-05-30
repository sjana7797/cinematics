import { useEffect, useState } from "react";
import { tmdbAPI } from "../../api/tmdb";
import { Category, Content } from "../../typing";
import List from "../Home/Contents/List";

type Props = { id: string; category: Category };

function Recomendations({ category, id }: Props) {
  const [contents, setContents] = useState<Content[]>([]);
  useEffect(() => {
    tmdbAPI.similar(category, id).then((data) => {
      setContents(data.results);
    });
  }, []);
  return (
    <section>
      <div className="flex flex-col space-y-10 px-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-base-content md:text-xl lg:text-3xl">
            Recomendations
          </h2>
        </div>
        <List contents={contents} category={category} />
      </div>
    </section>
  );
}

export default Recomendations;
