import React from 'react'
import { useLocation } from 'react-router-dom';

function AnimatedRoutes() {
    const location=useLocation();
  return (
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/menu' element={<Menu></Menu>}></Route>
    <Route path='about' element={<About></About>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
  );
};

export default AnimatedRoutes; 