import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Main from './layots/MainLayout';

function App() {
  return (
    <div className='app '>
      <Routes>
        <Route path='/' element={<Main><Home></Home></Main>}></Route>
        <Route path='/about' element={<Main><About></About></Main>}></Route>
        <Route path='/products' element={<Main><Products></Products></Main>}></Route>
        <Route path='/cart' element={<Main><Cart /></Main>}></Route>
      </Routes>
    </div>
  )
}

export default App
