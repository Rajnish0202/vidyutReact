import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Product.css';
import { addCart } from '../redux/action';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const results = await response.json();
      setProduct(results);
      setLoading(false);
    };

    getProducts();
  }, [id]);

  const Loading = () => {
    return <div className='loading'>Loading....</div>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className='product-img'>
          <img src={product.image} alt={product.title} />
        </div>
        <div className='product-detail'>
          <h4 className='text'>{product.category}</h4>
          <h1 className='title'>{product.title}</h1>
          <p className='rating'>
            Rating {product.rating && product.rating.rate} <i className='fa fa-star'></i>
          </p>
          <h3 className='price'>$ {product.price}</h3>
          <p className='desc'>{product.description}</p>
          <div className='cart-button'>
            <button className='btn add' onClick={() => addProductToCart(product)}>
              Add to Cart
            </button>
            <Link to='/cart' className='btn go'>
              Go to cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='details'>
      <div className='row-detail'>{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Product;
