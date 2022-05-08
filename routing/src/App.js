import React from 'react';
import {  BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';



function App() {

    return (
        <div className='App'>
            {/* <RestCountries></RestCountries> */}
            <Router>
                <Navbar></Navbar>
                <AnimatedRoutes/>
                {/* <Footer></Footer> */}
            </Router>
        </div>
    );
};


export default App;
