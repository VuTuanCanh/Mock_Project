// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <div className="mx-6 mb-16">
      <div className="my-8 text-center">
        <h2 className="font-bold text-3xl font-sans">Latest Blogs</h2>
        <p className="font-light mt-3">
          Present posts in a best way to highlight interesting moments of your blog.
        </p>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 35 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
      >
        <div>
          {/* Fashion Fifth post */}
          <div>
            <SwiperSlide>
              <div className="overflow-hidden group/zoom mb-5">
                <img
                  src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog1.jpg"
                  alt=""
                  className="group-hover/zoom:scale-105 duration-500"
                />
              </div>
              <div className="pt-5">
                <div className="text-red-500 font-light">Fashion</div>
                <h4 className="py-2 capitalize font-bold hover:text-red-500">
                  <Link to="Detail-fifth">This is fifth post for xipBlog</Link>
                </h4>
                <div>
                  <p className="font-light">
                    Posted by <span className="text-red-500">Demo Posthemes</span> May 29MO, 2023
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>

          {/* Fashion Secound post */}
          <div>
            <SwiperSlide>
              <div className="overflow-hidden group/zoom mb-5">
                <img
                  src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog2.jpg"
                  alt=""
                  className="group-hover/zoom:scale-110 duration-500"
                />
              </div>
              <div className="pt-5">
                <div className="text-red-500 font-light">Fashion</div>
                <h4 className="py-2 capitalize font-bold hover:text-red-500">
                  <Link to="Detail-second">This is secound post for xipBlog</Link>
                </h4>
                <div>
                  <p className="font-light">
                    Posted by <span className="text-red-500">Demo Posthemes</span> May 29MO, 2023
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>

          {/* Fashion Fourth post */}
          <div>
            <SwiperSlide>
              <div className="overflow-hidden group/zoom mb-5">
                <img
                  src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog4.jpg"
                  alt=""
                  className="group-hover/zoom:scale-110 duration-500"
                />
              </div>
              <div className="pt-5">
                <div className="text-red-500 font-light">Fashion</div>
                <h4 className="py-2 capitalize font-bold hover:text-red-500">
                  <Link to="Detail-fourth">This is fourth post for xipBlog</Link>
                </h4>
                <div>
                  <p className="font-light">
                    Posted by <span className="text-red-500">Demo Posthemes</span> May 29MO, 2023
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>

          {/* Fashion Third post */}
          <div>
            <SwiperSlide>
              <div className="overflow-hidden group/zoom mb-5">
                <img
                  src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog3.jpg"
                  alt=""
                  className="group-hover/zoom:scale-110 duration-500"
                />
              </div>
              <div className="pt-5">
                <div className="text-red-500 font-light">Fashion</div>
                <h4 className="py-2 capitalize font-bold hover:text-red-500">
                  <Link to="Detail-third">This is third post for xipBlog</Link>
                </h4>
                <div>
                  <p className="font-light">
                    Posted by <span className="text-red-500">Demo Posthemes</span> May 29MO, 2023
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>

          {/* Fashion Fifth post */}
          <div>
            <SwiperSlide>
              <div className="overflow-hidden group/zoom mb-5">
                <img
                  src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog1.jpg"
                  alt=""
                  className="group-hover/zoom:scale-110 duration-500"
                />
              </div>
              <div className="pt-5">
                <div className="text-red-500 font-light">Fashion</div>
                <h4 className="py-2 capitalize font-bold hover:text-red-500">
                  <Link to="Detail-fifth">This is fifth post for xipBlog</Link>
                </h4>
                <div>
                  <p className="font-light">
                    Posted by <span className="text-red-500">Demo Posthemes</span> May 29MO, 2023
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>

          {/* Fashion Secound post */}
          <div>
            <SwiperSlide>
              <div className="overflow-hidden group/zoom mb-5">
                <img
                  src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog2.jpg"
                  alt=""
                  className="group-hover/zoom:scale-110 duration-500"
                />
              </div>

              <div className="pt-5">
                <div className="text-red-500 font-light">Fashion</div>
                <h4 className="py-2 capitalize font-bold hover:text-red-500">
                  <Link to="Detail-second">This is secound post for xipBlog</Link>
                </h4>
                <div>
                  <p className="font-light">
                    Posted by <span className="text-red-500">Demo Posthemes</span> May 29MO, 2023
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
