import React, { useState, useEffect } from 'react';
import './navbar.css'; // Adjust the path to your CSS file

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
      // Scrolling down
      setScrolled(true);
    } else {
      // Scrolling up or at the top
      setScrolled(false);
    }
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position
  const navbarOpacity = scrolled ? 1 : 0;

  // Calculate transition duration (e.g., 1s for slower fade-out)
  const transitionDuration = scrolled ? '1s' : '0.3s'; // Adjust as needed

  // Calculate position (fixed or static) based on scroll position
  const navbarPosition: 'fixed' | 'static' = scrolled ? 'fixed' : 'static';

  const navbarStyle = {
    opacity: navbarOpacity,
    transition: `opacity ${transitionDuration} ease`,
    position: navbarPosition,
  };

  return (
    <header className="navbar" style={navbarStyle}>
      <div className="logo">
        <h1>Fitness</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Trainers</li>
          <li>Blog</li>
          <li>Prices</li>
          <li>Testimonials</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
