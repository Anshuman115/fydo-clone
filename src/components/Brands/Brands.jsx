import React from 'react';
import classes from './Brands.module.css';
import img1 from '../../assets/brands/1.png';
import img2 from '../../assets/brands/2.jpg';
import img3 from '../../assets/brands/3.png';
import img4 from '../../assets/brands/4.png';

function Brands() {
  return (
    <>
      <div className={classes.head}>
        <div className={classes.premium}>Top Brands</div>
        <div className={classes.viewMore}>view more</div>
      </div>
      <div className={classes.container}>
        <div className={classes.box}>
          <img src={img1} className={classes.images} />
        </div>
        <div className={classes.box}>
          <img src={img2} className={classes.images} />
        </div>
        <div className={classes.box}>
          <img src={img3} className={classes.images} />
        </div>
        <div className={classes.box}>
          <img src={img4} className={classes.images} />
        </div>
        <div className={classes.box}>
          <img src={img1} className={classes.images} />
        </div>
        <div className={classes.box}>
          <img src={img2} className={classes.images} />
        </div>
        <div className={classes.box}>
          <img src={img3} className={classes.images} />
        </div>
        <div className={classes.box}>
          <img src={img4} className={classes.images} />
        </div>
        <div className={classes.box}>
          <img src={img1} className={classes.images} />
        </div>
      </div>
    </>
  );
}

export default Brands;
