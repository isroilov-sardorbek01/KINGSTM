import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header';

function Main({ children }) {
    return (
        <div className='main'>
            <div className="main-container">
                <div className="login">
                    <div className="container login-container">
                        <ul className='loginFlex'>
                            <li><NavLink className='loginDesc'>Sign in / Guest</NavLink></li>
                            <li><NavLink className='loginDesc'>Create Acoount</NavLink></li>
                        </ul>
                    </div>
                </div>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Main
