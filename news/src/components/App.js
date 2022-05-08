import React, { Component } from 'react'
import UserPage from './user_actions/UserPage';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import StreamDelete from './streams/StreamDelete';
import StreamUpdate from './streams/StreamUpdate';
import StreamCreate from './streams/StreamCreate';




class App extends Component {

  render() {

    return (

      <div className='container'>
        <Router>
        <Routes>
            <Route exact path='/' element={<UserPage></UserPage>}></Route>
          </Routes>
          <Routes>
            <Route  exact path='/StreamDelete' element={<StreamDelete/>}></Route>
          </Routes>
          <Routes>
            <Route  exact path='/StreamUpdate' element={<StreamUpdate/>}></Route>
          </Routes>
          {/* <Routes>
            <Route  exact path='/' element={<StreamCreate/>}></Route>
          </Routes> */}
 
        </Router>
      </div>
    )
  }
}
export default App;