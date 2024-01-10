import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <header>
                <nav>
                    <span>Logo</span>
                    <ul>
                        <li><NavLink to={`/home`} >Home</NavLink></li>
                        <li><NavLink to={`/about`}>About</NavLink></li>
                        <li><NavLink    to={`/products`}>Products</NavLink></li>
                        <li><NavLink  to={`/users`}>Users</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Nav;