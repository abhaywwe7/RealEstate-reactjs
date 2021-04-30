import React from 'react'
import aboutimg from '../images/hero.png';
function About() {
    return (
        <div className='about'>
            <div className="about-model">
                <img src={aboutimg} alt="" srcset="" />
            </div>
            <div className="about-text">
                <h2>We Are The Best <br />Real Estate Company</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati repellat, similique cupiditate praesentium iusto consectetur ipsum! Placeat dignissimos consequatur magni error rerum eos at dolore? Inventore voluptas corporis maxime nesciunt cum, nisi laboriosam iure, ipsa mollitia possimus similique rerum rem!</p>
                <button>View More Details</button>
            </div>
        </div>
    )
}

export default About;
