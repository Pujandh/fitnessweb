import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import BackgroundImage from './component/ImageSlider';
import ContactForm from './component/ContactForm';
import Aboutus from './component/Aboutus';
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (<div>
    <BackgroundImage/>
    <Navbar/>
   
    <ContactForm/>
    <Aboutus/>
    <Footer/>
    </div>
    
  );

};

export default App;
