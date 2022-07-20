/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link to='/' className='navbar-brand'>
          FakeShop
        </Link>
      </div>
      <div className='nav-links'>
        <Link to='/' className='nav-link'>
          home
        </Link>
        <Link to='/products' className='nav-link'>
          products
        </Link>
        <Link to='/about' className='nav-link'>
          about
        </Link>
        <Link to='/contact' className='nav-link'>
          contact
        </Link>
      </div>
      <div className='buttons'>
        <Link to='/login' className='btn'>
          <i className='fa fa-sign-in'> Login</i>
        </Link>
        <Link to='/register' className='btn'>
          <i className='fa fa-user-plus'> Register</i>
        </Link>
        <Link to='/cart' className='btn'>
          <i className='fa fa-shopping-cart'> cart ({state.length})</i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
