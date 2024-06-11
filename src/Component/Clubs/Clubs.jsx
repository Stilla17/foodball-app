import React from "react";
import Chelsea from "./Chelsea.svg";
import Avfs from "./Avfs.svg";
import Arsenal from "./Arsenal.svg";
import Liverpool from "./Liverpool.svg";
import Mu from "./Mu.svg";
import Westham from "./Westham.svg";
import Mc from "./Mc.svg";
import Club from "./Club.svg";
import Left from "./Left.svg";
import Right from "./Right.svg";
import "./Clubs.css";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Clubs() {
  return (
    <div className="clubs-container">
      <div className="flex">
        <div className="group-left">
          <h3 className="text">🎮 Follow Club</h3>
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
        slidesPerView={7}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="club-logo rounded-full">
            <img src={Chelsea} alt="Chelsea" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="club-logo rounded-full">
            <img src={Avfs} alt="Aston Villa" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="club-logo rounded-full">
            <img src={Arsenal} alt="Arsenal" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="club-logo rounded-full">
            <img src={Liverpool} alt="Liverpool" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="club-logo rounded-full">
            <img src={Mu} alt="Manchester United" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="club-logo rounded-full">
            <img src={Westham} alt="West Ham" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="club-logo rounded-full">
            <img src={Mc} alt="Manchester City" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="club-logo rounded-full">
            <img src={Club} alt="Club Name" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Clubs;
