import React from 'react'
import Header from '../../components/Header';
import { NavLink } from 'react-router-dom';

function Main(children) {
    return (
        <div className='main'>
            <div className="login">
                <div className="container login-container">
                    <ul className='loginFlex'>
                        <li><NavLink className='loginDesc'>Sign in / Guest</NavLink></li>
                        <li><NavLink className='loginDesc'>Create Acoount</NavLink></li>
                    </ul>
                </div>
            </div>
            <Header></Header>
            {children}
        </div>
    )
}

export default Main
