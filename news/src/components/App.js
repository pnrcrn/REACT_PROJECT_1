import React, { Component } from 'react'
import UserPage from './user_actions/UserPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StreamDelete from './streams/StreamDelete';
import StreamUpdate from './streams/StreamUpdate';
import GoButton from './go-button/GoButton';
import StreamScreen from './streams/StreamScreen';
import Details from './streams/Details';

class App extends Component { 

  render() {

    return (

      <div className='container'>
        <Router>
          <Routes>
            <Route exact path='/' element={<UserPage></UserPage>}></Route>
            <Route exact path='/StreamDelete' element={<StreamDelete />}></Route>
            <Route exact path='/StreamUpdate' element={<StreamUpdate />}></Route>
            <Route exact path='/GoButton' element={<GoButton />}></Route>
            <Route exact path='/StreamScreen' element={<StreamScreen />}></Route>
            <Route exact path='/Details' element={<Details />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
export default App;