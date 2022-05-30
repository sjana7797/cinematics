import { useEffect, useState } from "react";
import { tmdbAPI } from "../../api/tmdb";
import { Cast, Category } from "../../typing";
import { BASE_IMG_URL } from "../../utils/tmdbAPIConfig";

type Props = {
  id: number;
  category: Category;
};
function Castlist({ id, category }: Props) {
  const [list, setList] = useState<Cast[]>([]);
  useEffect(() => {
    tmdbAPI.credits(category, `${id}`).then((data) => {
      setList(data.cast.slice(0, 4));
    });
  }, []);
  return (
    <div className="flex space-x-2">
      {list.map((cast) => (
        <div key={cast.id}>
          <img
            className="lazyload h-[160px] rounded-xl object-cover"
            data-src={BASE_IMG_URL.w500(cast.profile_path)}
          />
          <h3 className="mt-2 text-center text-xs font-medium">{cast.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Castlist;
