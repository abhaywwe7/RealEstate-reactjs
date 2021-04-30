import React from 'react';
import logo from '../images/logoo.png';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <nav>
            <a href="#" className='logo'>
                <img src={logo} alt="" srcset="" />
            </a>
            <input type="checkbox" id='menu-btn' className='menu-btn' />
            <label for='menu-btn' className='menu-icon'>
                <span className='nav-icon'></span></label>
            <ul className="menu">
                <li><a href='#home' className='active'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#agents'>Agents</a></li>
                <li><a href='#'>Property</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

            <a href="#" className='property'>Property</a>
        </nav>
    )
}

export default Navbar;
