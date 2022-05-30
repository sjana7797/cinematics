import { BASE_IMG_URL } from "../../utils/tmdbAPIConfig";

type Props = { img: string };
function PageHeader({ img }: Props) {
  const imageUrl = BASE_IMG_URL.original(img);
  return (
    <section
      className="relative z-0 h-[50vh] w-full overflow-hidden bg-gradient-to-b from-transparent to-black bg-cover bg-center bg-no-repeat before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black/60  before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-24 after:w-full after:bg-gradient-to-t after:from-dark after:to-black/0 after:content-['']"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></section>
  );
}

export default PageHeader;
