import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import styles from "./Main.module.css";
import mainInfoImg from "assets/image/img_mainInfo.png";
import mainSwiperImg_1 from "assets/image/img_main1.jpg";
import mainSwiperImg_2 from "assets/image/img_main2.jpg";
import mainSwiperImg_3 from "assets/image/img_main3.jpg";
import mainSwiperImg_4 from "assets/image/img_main4.jpg";

const IMAGE_DATAS = [
  mainSwiperImg_1,
  mainSwiperImg_2,
  mainSwiperImg_3,
  mainSwiperImg_4,
];

const Main = () => {
  return (
    <div className={styles.main}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect-fade="fade"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        slidesPerView="auto"
        className={styles.main_swiper}
      >
        {IMAGE_DATAS.map((imageData, index) => {
          return (
            <SwiperSlide
              className={styles.main_swiper}
              key={index}
              onChange={console.log(imageData)}
            >
              <img
                src={imageData}
                className={styles.main_image}
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.main_info}>
        <img src={mainInfoImg} alt="main page Info" />
      </div>
    </div>
  );
};

export default Main;
