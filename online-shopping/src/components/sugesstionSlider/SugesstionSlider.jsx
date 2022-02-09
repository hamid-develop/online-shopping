import "./slider.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ProductCard from "../../components/productCard/ProductCard";
import { useSelector } from "react-redux";

const SuggestionSlider = () => {
  const { data } = useSelector((state) => state.productsReducer);
  return (
    <div className="slider">
      <h2 className="h2">Suggestion products:</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={4}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.slice(0, 8)?.map((product) => (
          <SwiperSlide>
            <ProductCard item={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuggestionSlider;
