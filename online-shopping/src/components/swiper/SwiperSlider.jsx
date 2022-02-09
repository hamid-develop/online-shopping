import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

import fisrtBanner from "../../assets/images/mensArival.jpg";
import secondBanner from "../../assets/images/jeans.jpg";
import thirthBanner from "../../assets/images/outwear.jpg";
import fourthBanner from "../../assets/images/polo.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={fisrtBanner} alt="first" style={{ width: "100%", height:"100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={secondBanner} alt="second" style={{ width: "100%", height:"100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thirthBanner} alt="thirth" style={{ width: "100%", height:"100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fourthBanner} alt="fourth" style={{ width: "100%", height:"100%" }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
