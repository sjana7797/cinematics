import { Category, Content } from "../../../typing";
import ContentContainer from "./ContentContainer";

type Props = {
  contents: {
    popularMovies: Content[] | undefined;
    topRatedMovies: Content[] | undefined;
    topRatedTV: Content[] | undefined;
    trending: Content[] | undefined;
    popularTV: Content[] | undefined;
  };
};
function Contents({ contents }: Props) {
  return (
    <section className="mt-10 space-y-10 md:mt-20">
      <ContentContainer
        title="Trending"
        contents={contents.trending}
        category={Category.movie}
      />
      <ContentContainer
        title="Popular Movies"
        contents={contents.popularMovies}
        category={Category.movie}
      />
      <ContentContainer
        title="Top Rated Movies"
        contents={contents.topRatedMovies}
        category={Category.movie}
      />
      <ContentContainer
        title="Top Rated TV Shows"
        contents={contents.topRatedTV}
        category={Category.tv}
      />
      <ContentContainer
        title="Popular TV Shows"
        contents={contents.popularTV}
        category={Category.tv}
      />
    </section>
  );
}

export default Contents;
