import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={aboutimage} alt="" />
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia debitis impedit assumenda tenetur, temporibus laboriosam vel id eum! Minima necessitatibus mollitia optio quo tempore porro possimus pariatur magni voluptatem non.</p>
            <button>READ MORE</button>
        </div>

    </div>
  )
}

export default About;