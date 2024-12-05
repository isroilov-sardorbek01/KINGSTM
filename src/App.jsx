import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/index.jsx';
import Cart from './Pages/Cart';
import Home from './Pages/Home/index.jsx';
import Products from './Pages/Products/index.jsx';
import Main from './layots/MainLayout';
import ProductDeatails from './Pages/ProductDetails/index.jsx';

function App() {
  return (
    <div className='app '>
      <Routes>
        <Route path='/' element={<Main><Home></Home></Main>}></Route>
        <Route path='/about' element={<Main><About></About></Main>}></Route>
        <Route path='/products' element={<Main><Products></Products></Main>}></Route>
        <Route path='/products/:id' element={<Main><ProductDeatails/></Main>}></Route>
        <Route path='/cart' element={<Main><Cart /></Main>}></Route>
      </Routes>

    </div>
  )
}

export default App
