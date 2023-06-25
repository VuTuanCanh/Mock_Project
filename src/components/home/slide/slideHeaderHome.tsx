// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  EffectFlip,
  EffectCreative,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";

export default () => {
  return (
    <div className="mx-6">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectFade, EffectCreative, A11y, Autoplay]}
        effect={"fade, creative"}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-slide bg-[url('./assets/sample-1.jpg')]">
            <div className="absolute top-1/3 left-6 ">
              <p className="text-white uppercase">NIKE RUNNING SHOES</p>
              <h2 className="text-slate-100 text-4xl  ">Sport Shoes</h2>
              <h2 className="text-slate-100 text-6xl">Sale 40% Off</h2>
              <button className="bg-white border rounded px-4 py-2 mt-8 hover:bg-red-500 text-1xl uppercase ">
                shop now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-slide bg-cover bg-[url('./assets/sample-2.jpg')]">
            <div className="absolute top-1/3 left-6 ">
              <p className="text-white uppercase">NEW ARRIVALS</p>
              <h2 className="text-slate-100 text-4xl  ">Summer Sale</h2>
              <h2 className="text-slate-100 text-6xl">Up To 70% Off</h2>
              <button className="bg-white border rounded px-4 py-2 mt-8 hover:bg-red-500 text-1xl uppercase ">
                shop now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
