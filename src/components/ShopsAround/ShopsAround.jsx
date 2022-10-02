import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode } from 'swiper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import img1 from '../../assets/banner/1.jpg';
import img2 from '../../assets/banner/2.jpg';
import img3 from '../../assets/banner/3.jpg';
import img4 from '../../assets/banner/4.jpg';
import img5 from '../../assets/banner/5.jpg';
import img6 from '../../assets/banner/6.jpg';

import classes from './ShopsAround.module.css';

function ShopsAround() {
  return (
    <>
      <div className={classes.head}>
        <div className={classes.premium}>Shops Around</div>
        <div className={classes.viewMore}>view more</div>
      </div>
      <Swiper
        freeMode
        spaceBetween={20}
        slidesPerView={1.1}
        modules={[FreeMode]}
        className={classes.container}
      >
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img1} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                <div>
                Titan watch and eye wear
                </div>
                <div>
                <FavoriteBorderIcon style={{ color: 'red' }} />
                </div>
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img2} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img3} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img4} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img5} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img6} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img1} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img2} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img3} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img4} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img5} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.box}>
            <img src={img6} className={classes.image} />
            <div className={classes.text}>
              <div className={classes.name}>
                Titan watch and eye wear
                <FavoriteBorderIcon style={{ color: 'red' }} />
              </div>
              <div className={classes.categ}>
                <div>
                  watches
                </div>
                <div>
                  optical
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>

  );
}

export default ShopsAround;
