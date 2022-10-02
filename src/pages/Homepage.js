import React from 'react';
import Banner from '../components/Banner/Banner';
import Brands from '../components/Brands/Brands';
import Categories from '../components/Categories/Categories';
import Deals from '../components/Deals/Deals';
import Events from '../components/Events/Events';
import Features from '../components/Features/Features';
import Header from '../components/Header/Header';
import Shops from '../components/Shops/Shops';
import ShopsAround from '../components/ShopsAround/ShopsAround';

function Homepage() {
  return (
    <div style={{ paddingLeft: '20px', paddingBottom: '20px', paddingTop: '20px' }}>
      <Header />
      <Banner />
      <Features />
      <Shops />
      <Deals />
      <Events />
      <Categories />
      <Brands />
      <ShopsAround />
    </div>
  );
}

export default Homepage;
