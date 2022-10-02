import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode } from 'swiper';

import img1 from '../../assets/banner/1.jpg';
import img2 from '../../assets/banner/2.jpg';
import img3 from '../../assets/banner/3.jpg';
import img4 from '../../assets/banner/4.jpg';
import img5 from '../../assets/banner/5.jpg';
import img6 from '../../assets/banner/6.jpg';
import logo from '../../assets/shops/prem2.png';

import classes from './Shops.module.css';

function Shops() {
  return (
    <>
      <div className={classes.head}>
        <div className={classes.premium}>Premium Shops</div>
        <div className={classes.viewMore}>view more</div>
      </div>
      <Swiper
        freeMode
        spaceBetween={30}
        slidesPerView={2.5}
        modules={[FreeMode]}
        className={classes.container}
      >
        <SwiperSlide className={classes.box}>
            <img src={img1} className={classes.child} />
            <div className={classes.child2}>Premium</div>
            <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img2} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img3} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img4} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img5} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img6} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img1} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img2} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img3} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img4} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img5} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
        <SwiperSlide  className={classes.box}>
          <img src={img6} className={classes.child} />
          <div className={classes.child2}>Premium</div>
          <div className={classes.child3}>10% OFF</div>
        </SwiperSlide>
      </Swiper>
    </>

  );
}

export default Shops;
