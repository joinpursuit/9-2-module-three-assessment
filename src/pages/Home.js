// Import Swiper React components
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Pagination, Navigation, EffectCoverflow } from "swiper";

import { useFetch } from "../hooks/useFetch";
export default function Home() {
  const { data: movies } = useFetch("/films.json");
  SwiperCore.use([Autoplay]);

  return (
    <div className="home">
      <h1>Welcome to Ghibli App </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={500}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        {movies &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={movie.movie_banner} alt="movie banner" />
              <h2>{movie.title}</h2>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
