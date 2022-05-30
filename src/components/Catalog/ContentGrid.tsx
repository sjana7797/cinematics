import { Category, Content } from "../../typing";
import Card from "../Home/Contents/Card";

type Props = {
  contents: Content[];
  category: Category;
  loadMoreContent: () => Promise<void>;
  loadingBtn: boolean;
};

function ContentGrid({
  contents,
  category,
  loadMoreContent,
  loadingBtn,
}: Props) {
  return (
    <section className="">
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 px-10 md:grid-cols-2 xl:grid-cols-4">
        {contents.map((item) => (
          <Card key={`${item.id}`} category={category} content={item} />
        ))}
      </div>
      <div className="mx-auto my-10 w-fit">
        <button
          className="btn btn-primary capitalize"
          onClick={async () => await loadMoreContent()}
        >
          {loadingBtn && (
            <svg
              className="-ml-1 mr-3 h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          load more
        </button>
      </div>
    </section>
  );
}

export default ContentGrid;
