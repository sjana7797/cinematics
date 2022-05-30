import contentGallery from "../../assets/content-gallery.jpg";

type Props = { title: string };
function Pageheader({ title }: Props) {
  return (
    <section
      className="flex h-36 w-full items-end justify-center bg-cover bg-center py-5 md:h-44 lg:h-52"
      style={{
        backgroundImage: `linear-gradient(180deg,rgba(25,86,78,0.5),rgba(0,0,0,0.8)),url(${contentGallery})`,
      }}
    >
      <h2 className="text-xl font-bold tracking-wider sm:text-2xl md:text-3xl lg:text-5xl">
        {title}
      </h2>
    </section>
  );
}

export default Pageheader;
