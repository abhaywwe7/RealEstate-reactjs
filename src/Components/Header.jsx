import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className='header'>
            <Navbar />
            <div className="intro">
                <p>Looking for a residance !</p>
                <h1><span>Buy </span>and <span>Sell</span> Properties</h1>
                <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, praesentium? Voluptatibus dignissimos necessitatibus ipsam exercitationem? Explicabo et dolor sit fugit tenetur officia, velit laborum modi laboriosam quis dolorum?</p>
                <a href="#" className='header-btn'>More Details</a>
            </div>

        </div>
    )
}

export default Header;
