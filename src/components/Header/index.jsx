import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import image from '../../images/korzinka.svg';

function Header() {
    const isNav = useNavigate();
    function handleOpen(e) {
        e.preventDefault();
        isNav('/')
    }
    return (
        <div className="header">
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
                    <img src={image} width={40} height={40} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
