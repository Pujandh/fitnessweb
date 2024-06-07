import React from 'react';
import './footer.css';
import fblogo from '../component/images/facebook.png';
import instalogo from '../component/images/instagram.png';
import twitterxlogo from '../component/images/twitterx.png';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer1'>
        <h1>ABOUT FITNESS</h1>
        <p>
          Nunc id turpis tincidunt dui volutpat hendrerit et <br/>
          efficitur dolor. Morbi quis tempor felis, ut dictum<br/>
          ipsum. Praesent venenatis rutrum interdum.
        </p>
      </div>
      <div className='footer2'>
        <h1>SESSIONS</h1>
        <h3>Morning</h3>
        6:00 AM - 10:00 AM<br/>
        <h3>Evening</h3>
        4:00 PM - 9:00 PM
      </div>
      <div className='footer3'>
        <h1>Contact US</h1>
        <ul>
          <li>+977 98401111**</li>
          <li>Fitness@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
