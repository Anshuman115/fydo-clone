import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode } from 'swiper';
import logo from '../../assets/cider.png';

import classes from './Categories.module.css';

function Categories() {
  return (
    <>
      <div className={classes.head}>
        <div className={classes.premium}>Categories</div>
        <div className={classes.viewMore}>view more</div>
      </div>
      <Swiper
        freeMode
        spaceBetween={20}
        slidesPerView={4}
        modules={[FreeMode]}
        className={classes.container}
      >
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Movies
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Clothing
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Footwear
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Grocery
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Movies
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Movies
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Movies
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Movies
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Movies
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Movies
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Movies
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Movies
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.child}>
          <img src={logo} className={classes.logo} />
          <div>
            Movies
          </div>
        </SwiperSlide>
      </Swiper>
    </>

  );
}

export default Categories;
