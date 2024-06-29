import React from "react";
import "./Shopping.css";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Forma1 from "./Forma1.png";
import Forma2 from "./Forma2.png";
import Forma3 from "./Forma3.png";
import Forma4 from "./Forma4.png";
import Left from "./Left.png";
import Right from "./Right.png";

function Shopping() {
  return (
    <div className="shopping-container">
      <div className="flex justify-between">
        <div className="group-left">
          <h2 className="text font-bold">🎮 Follow Club</h2>
        </div>

        <div className="group-right">
          <div className="swiper-button-prev-custom">
            <div className="left">
              <img src={Left} alt="left" />
            </div>
          </div>

          <div className="left">
            <div className="swiper-button-next-custom">
              <img src={Right} alt="right" />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={120}
        slidesPerView={4}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="shopping-item">
            <img src={Forma1} alt="Item 1" />
            <h3>Chelsea Home Kit 21 / 22</h3>
            <h4>$150.10</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shopping-item">
            <img src={Forma2} alt="Item 2" />
            <h3> West Ham Home Kit 21 / 22</h3>
            <h4>$120.00</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shopping-item">
            <img src={Forma3} alt="Item 3" />
            <h3> Man City Away Kit 21/22</h3>
            <h4>$150.45</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shopping-item">
            <img src={Forma4} alt="Item 4" />
            <h3> Arsenal Away Kit 21/22</h3>
            <h4>$140.11</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shopping-item">
            <img src={Forma4} alt="Item 4" />
            <h3> Arsenal Away Kit 21/22</h3>
            <h4>$140.11</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Shopping;
