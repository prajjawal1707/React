import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
    <Link to="/men">Men</Link>
    <Link to="/women">Women</Link>
    <Link to="/kids">Kids</Link>
    </div>
  );
}

export default Product;
