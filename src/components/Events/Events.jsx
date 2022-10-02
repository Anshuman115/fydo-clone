import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode } from 'swiper';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import img1 from '../../assets/banner/1.jpg';
import img2 from '../../assets/banner/2.jpg';
import img3 from '../../assets/banner/3.jpg';
import img4 from '../../assets/banner/4.jpg';
import img5 from '../../assets/banner/5.jpg';
import img6 from '../../assets/banner/6.jpg';
import classes from './Events.module.css';

function Events() {
  return (
    <>
      <div className={classes.head}>
        <div className={classes.premium}>Events</div>
        <div className={classes.viewMore}>view more</div>
      </div>
      <Swiper
        freeMode
        spaceBetween={20}
        slidesPerView={1.1}
        modules={[FreeMode]}
        className={classes.container}
      >
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img1} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img2} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img3} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img4} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img5} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img6} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img1} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img2} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img3} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img4} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img5} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.box}>
          <div className={classes.child}>
            <img src={img6} className={classes.images} />
            <div className={classes.textBox}>
              <div className={classes.text}>Middle Class - Standup</div>
              <div className={classes.text2}>view details <NavigateNextIcon /></div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </>

  );
}

export default Events;
