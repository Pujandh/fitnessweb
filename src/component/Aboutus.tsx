import React from 'react';
import image1 from '../component/images/yoga.jpg'; // Adjust the path if needed
import './Aboutus.css';

interface AboutUsProps {}

const Aboutus: React.FC<AboutUsProps> = () => {
  return (
    <div className="aboutus" id="aboutus">  {/* Add a unique ID */}
      <div className="aboutimage">
        <img src={image1} alt="Yoga" />
      </div>
      <div>
        <h2>Fitness app About Us</h2>
        <br />
        <p>
          consectetur adipisicing elit. Cumque ipsam ab dolorem esse possimus
          ut obcaecati nam eligendi, minima suscipit voluptatibus quidem vero
          error quod eius recusandae deserunt a labore?
        </p>
        <br />
        <br />
        <button className="aboutbutton">Let Us Begin</button>
      </div>
    </div>
  );
};

export default Aboutus;
