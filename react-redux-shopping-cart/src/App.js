import React from 'react';
import './styles.css';
import { Route} from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import {data} from './data';


function App() {
  return (
    <div className="App">
       
       <h1>
         <Route exact path='/' element={<Products/>}></Route>
         <Route exact path='/cart' element={<Cart/>}></Route>
       </h1>
    </div>
  );
}

export default App;
