import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar';
import BackgroundImage from './component/ImageSlider';
import ContactForm from './component/ContactForm';
import Footer from './component/footer';
import AboutPage from './Pages/Aboutpage';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <BackgroundImage />
      <ContactForm />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Pages/Aboutpage.tsx" element={<AboutPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
