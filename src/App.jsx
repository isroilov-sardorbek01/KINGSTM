import React from 'react'
import './App.css'
import { Navigate, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import image from '../src/images/korzinka.svg';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  const isNav = useNavigate();
  function handleOpen(e) {
    e.preventDefault();
    isNav('/')
  }
  return (
    <div className='app '>
      <div className="login">
        <div className="container login-container">
          <ul className='loginFlex'>
            <li><NavLink className='loginDesc'>Sign in / Guest</NavLink></li>
            <li><NavLink className='loginDesc'>Create Acoount</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="header">
        <div className="container head-container">
          <h1 onClick={handleOpen}>C</h1>
          <ul className='headSame'>
            <li className='headTitle'>
              <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'nonactive'}>Home</NavLink>
            </li>
            <li className='headTitle'>
              <NavLink to='/about' className='headLink'>About</NavLink>
            </li>
            <li className='headTitle'>
              <NavLink className='headLink'>Products</NavLink>
            </li>
            <li className='headTitle'>
              <NavLink className='headLink'>Cart</NavLink>
            </li>
          </ul>
          <div className="appSame">
            <img src={image} width={40} height={40} alt="" />
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/products' element={<Products></Products>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
