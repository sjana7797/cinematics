import { Content } from "../../../typing";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlide from "./HeroSlide";
import { useState } from "react";
import TrailerModal from "./TrailerModal";

type Props = { movies: Content[] };

function HeroSlider({ movies }: Props) {
  SwiperCore.use([Autoplay]);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState<string>("");
  return (
    <>
      <section className="mb-8">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <HeroSlide
                  movie={movie}
                  openModal={setOpen}
                  setUrl={setUrl}
                  isActive={isActive}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <TrailerModal open={open} openModal={setOpen} url={url} setUrl={setUrl} />
    </>
  );
}

export default HeroSlider;
