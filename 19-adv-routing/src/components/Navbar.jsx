import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-gray-800 justify-between'>
      <h2>My App</h2>
      <div className='flex gap-8 '></div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Product</Link>
      <Link to="/courses">Courses</Link>
    </div>
  );
}

export default Navbar;
