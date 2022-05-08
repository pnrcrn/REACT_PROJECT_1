import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Country from './Country';
import CountryList from './CountryList';



function RestCountries() {


    return (
        <Router>
            <div className='ui form'>
                <Routes>
                    <Route
                        path='/'
                        element={<CountryList/>}>
                    </Route>
                </Routes>
                <Routes>
                    <Route
                        path='/country/:code'
                        element={<Country/>}
                    ></Route>
                </Routes>
            </div>
        </Router>
    )
}


export default RestCountries;
