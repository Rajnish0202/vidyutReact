import React, { useEffect, useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const results = await response.json();
      setData(results);
      setFilter(results);
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <h3 className='loading'>Loading....</h3>;
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((el) => el.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className='buttons products-btn'>
          <button className='btn' onClick={() => setFilter(data)}>
            All ({data.length})
          </button>
          <button className='btn' onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button className='btn' onClick={() => filterProduct("women's clothing")}>
            women's Clothing
          </button>
          <button className='btn' onClick={() => filterProduct('jewelery')}>
            jewelery
          </button>
          <button className='btn' onClick={() => filterProduct('electronics')}>
            Electronics
          </button>
        </div>
        <div className='col-products'>
          {filter.map((product) => {
            return (
              <div className='product-card' key={product.id}>
                <img src={product.image} className='product-img' alt={product.title} />
                <div className='product-body'>
                  <h5 className='product-title' title={product.title}>
                    {product.title.substring(0, 15)}...
                  </h5>
                  <p className='product-price'>${product.price}</p>
                  <Link to={`/products/${product.id}`} className='cart-btn'>
                    Buy now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        ;
      </>
    );
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='heading'>Latest Products</h1>
        </div>
      </div>
      <div className='row-product'>{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
