import React from 'react';
import image1 from '../component/images/yoga.jpg'; 
import './Aboutus.css';
import axios from 'axios';

const Aboutus = () => {
  axios.get('https://ena8de7hm7jd.x.pipedream.net/',{
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  return (
    <div className='aboutus'>
  
      <div className='aboutimage'>'<img src={image1} alt="Yoga" /></div>
      <div>Fitness app About us<br/>
         consectetur<br/> adipisicing elit.
         Cumque ipsam ab dolorem <br/>esse possimus ut obcaecati nam eligendi,
         minima <br/>suscipit voluptatibus quidem
         vero error quod <br/>eius recusandae deserunt a labore?
         <br/><br/>
         <button className='aboutbutton'>Let Us Begin</button>
         </div>
    </div>
  );
};

export default Aboutus;