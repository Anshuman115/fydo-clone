import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode } from 'swiper';
import classes from './Features.module.css';

import logo from '../../assets/cider.png';

function Features() {
  return (
    <Swiper
      freeMode
      spaceBetween={15}
      slidesPerView={1.2}
      modules={[FreeMode]}
      className={classes.featuresPart}
    >
      <SwiperSlide className={classes.child}>
        <div>Pay at premium shops
          <div>Get upto 50% discount
          </div>
        </div>
        <img src={logo} className={classes.logo} />
      </SwiperSlide>
      <SwiperSlide className={classes.child}>
        <div>Recharge mobile now
          <div>Get guaranteed 2% cashback</div>
        </div>
        <img src={logo} className={classes.logo} />
      </SwiperSlide>
      <SwiperSlide className={classes.child}>
        <div>Refer your friends
          <div>Win upto $150 on referals</div>
        </div>
        <img src={logo} className={classes.logo} />
      </SwiperSlide>
      <SwiperSlide className={classes.child}>
        <div>List your event
          <div>Make it visible to people around you</div>
        </div>
        <img src={logo} className={classes.logo} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Features;
