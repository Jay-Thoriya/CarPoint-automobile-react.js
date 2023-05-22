import React from 'react'
import { NavLink } from 'react-router-dom';

export const NevBar = () => {
    return (
        <div className='Navigation_bar '>
            <nav class="navbar bg-dark justify-content-center" data-bs-theme="dark" style={{"height":"40px" , "fontSize":"20px"}}>
            <div className='Logo'> Car<span>Point </span></div>
                <ul class="nav nav-underline">
                    <li class="nav-item active">
                        <NavLink exact activeClassName="nav-link" aria-current="page" to="home">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="nav-link" to="about">About</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="nav-link" to="cart">Cart</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="nav-link" to='contact'>Contact us</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
