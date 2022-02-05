import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import productsAction from "../redux/products/productsAction";

import SwiperSlider from "../components/swiper/SwiperSlider";
import Category from "../components/category/Category";
import Gallery from "../components/gallery/Gallery";
import SuggestionSlider from "../components/sugesstionSlider/SugesstionSlider";

const Home = () => {
  const productList = useSelector((state) => state.productsReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsAction());
  }, []);

  return (
    <div>
    <SwiperSlider />
    <Category /> 
    <Gallery />
    <SuggestionSlider />
    </div>
  );
};

export default Home;
