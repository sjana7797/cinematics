import { Link } from "react-router-dom";
import { Category, Content } from "../../../typing";
import List from "./List";

type Props = {
  title: string;
  contents: Content[] | undefined;
  category: Category;
};
function ContentContainer({ title, contents, category }: Props) {
  return (
    <div className="flex w-full flex-col space-y-10 px-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-base-content md:text-xl lg:text-3xl">
          {title}
        </h2>
        <Link to={`/${category}`}>
          <button className="btn btn-outline btn-xs md:btn-sm">
            View more
          </button>
        </Link>
      </div>
      <List contents={contents} category={category} />
    </div>
  );
}

export default ContentContainer;
