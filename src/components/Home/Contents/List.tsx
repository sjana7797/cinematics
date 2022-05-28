import { Swiper, SwiperSlide } from "swiper/react";
import { Category, Movie } from "../../../typing";
import Card from "./Card";

type Props = { contents: Movie[] | undefined; category: Category };
function List({ contents, category }: Props) {
  return (
    <div className="content-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {contents?.map((content, index) => (
          <SwiperSlide key={index}>
            <Card content={content} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default List;
