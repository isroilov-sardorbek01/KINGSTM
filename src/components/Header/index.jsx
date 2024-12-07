import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import image from '../../images/MoonImg.svg';
import image2 from '../../images/cart.svg'
import './index.css';

function Header() {
    const [darkmode, setDarkmode] = useState(false);

    const isNav = useNavigate();
    function handleOpen(e) {
        e.preventDefault();
        isNav('/')
    }
    function handleOpenCart(e) {
        e.preventDefault()
        isNav('/cart')
    }
    function onDarkMode(e) {
        e.preventDefault()
        setDarkmode(!darkmode)
    }
    return (
        <div className={darkmode === false ? 'header' : 'dark'}>
            <div className="container head-container">
                <h1 onClick={handleOpen}>C</h1>
                <ul className='headSame'>
                    <li className='headTitle'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'nonactive'}>Home</NavLink>
                    </li>
                    <li className='headTitle'>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : 'nonactive'}>About</NavLink>
                    </li>
                    <li className='headTitle'>
                        <NavLink to='/products' className={({ isActive }) => isActive ? 'active' : 'nonactive'}>Products</NavLink>
                    </li>
                    <li className='headTitle'>
                        <NavLink to='/cart' className={({ isActive }) => isActive ? 'active' : 'nonactive'}>Cart</NavLink>
                    </li>
                </ul>
                <div className="appSame">
                    <img className={darkmode === false ? 'styleImg' : 'darkStyleImg'} src={image} onClick={onDarkMode} width={20} height={20} alt="" />
                    <img className={darkmode === false ? 'styleImg' : 'darkStyleImg'} onClick={handleOpenCart} src={image2} width={20} height={20} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Header
