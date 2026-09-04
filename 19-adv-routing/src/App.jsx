import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';

const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />
        <Route path='/Product' element={<Product />} />
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
