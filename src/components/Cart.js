import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../redux/action';
import './Cart.css';

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  console.log(state);

  const handleAddButton = (cartItem) => {
    dispatch(addCart(cartItem));
  };
  const handleMinusButton = (cartItem) => {
    dispatch(removeCart(cartItem));
  };

  const emptyCart = () => {
    return (
      <div className='emptyCart'>
        <h3>Your cart is empty</h3>
      </div>
    );
  };

  const cartItems = (cartItem) => {
    return (
      <div className='cart-detail' key={cartItem.id}>
        <div className='cart-image'>
          <img src={cartItem.image} alt={cartItem.title} height='200px' width='180px' />
        </div>
        <div className='cart-product-detail'>
          <h3>{cartItem.title}</h3>
          <p className='count'>
            {cartItem.qty} X ${cartItem.price} = ${cartItem.qty * cartItem.price}
          </p>
          <div className='cartBtn'>
            <button
              className='btn minus'
              style={{ display: 'inline', margin: '0' }}
              onClick={() => handleMinusButton(cartItem)}
            >
              <i className='fa fa-minus'></i>
            </button>
            <button className='btn plus' style={{ display: 'inline' }} onClick={() => handleAddButton(cartItem)}>
              <i className='fa fa-plus'></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='cart-container'>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
};

export default Cart;
