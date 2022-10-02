import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper';
import classes from './Banner.module.css';
import img1 from '../../assets/banner/1.jpg';
import img2 from '../../assets/banner/2.jpg';
import img3 from '../../assets/banner/3.jpg';
import img4 from '../../assets/banner/4.jpg';
import img5 from '../../assets/banner/5.jpg';
import img6 from '../../assets/banner/6.jpg';

function Banner() {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination
      modules={[Autoplay, Pagination]}
      className={classes.banners}
    >
      <SwiperSlide><img src={img1} className={classes.child} /></SwiperSlide>
      <SwiperSlide><img src={img2} className={classes.child} /></SwiperSlide>
      <SwiperSlide><img src={img3} className={classes.child} /></SwiperSlide>
      <SwiperSlide><img src={img4} className={classes.child} /></SwiperSlide>
      <SwiperSlide><img src={img5} className={classes.child} /></SwiperSlide>
      <SwiperSlide><img src={img6} className={classes.child} /></SwiperSlide>
    </Swiper>
  );
}

export default Banner;
