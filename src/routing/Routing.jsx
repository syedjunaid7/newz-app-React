// import React from 'react'
import Home from '../pages/Home/Home';
import Bussiness from '../pages/Bussiness/Bussiness';
import Entertainment from '../pages/Entertainment/Entertainment';
import Health from '../pages/Health/Health';
import Science from '../pages/science/Science.jsx';
import Sports from '../pages/sports/Sports.jsx';
import Technology from '../pages/technology/Technology';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
function Routing() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/bussiness' element={<Bussiness/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='health' element={<Health/>}/>
        <Route path='science' element={<Science/>}/>
        <Route path='sports' element={<Sports/>}/>
        <Route path='technology' element={<Technology/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
