import React from 'react';
import image1 from '../component/images/cardio.jpg';
import image2 from '../component/images/sliderimage1.jpg' 
import   './ImageSlider.css'

const BackgroundImage: React.FC = () => {
  const divStyle = {
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '800px',
  };

  return (<div className="background-image" style={divStyle}></div>);
};

export default BackgroundImage;