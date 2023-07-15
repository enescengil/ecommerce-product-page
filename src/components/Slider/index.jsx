// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Navigation } from "swiper/modules";

import Img1 from "../../assets/images/image-product-1.jpg";
import Img2 from "../../assets/images/image-product-2.jpg";
import Img3 from "../../assets/images/image-product-3.jpg";
import Img4 from "../../assets/images/image-product-4.jpg";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={Img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
