import React from 'react';
import {BrowserRouter,  Routes, Route} from 'react-router-dom'

import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/home" element={<Homepage/>} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App;


