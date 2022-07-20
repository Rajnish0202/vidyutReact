import React from 'react';
import './Home.css';
import Products from './Products';

const Home = () => {
  return (
    <>
      <div className='hero'>
        <div className='card'>
          <img src='/assests/hero.jpg' className='card-img' alt='Background' />
          <div className='card-img-overlay'>
            <div className='img-container'>
              <h5 className='card-title'>New Season Arrivals</h5>
              <p className='card-text'>Check out all the trends</p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
