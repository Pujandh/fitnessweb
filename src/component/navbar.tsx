import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Adjust the path to your CSS file

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY && currentScrollY > 50) {
      // Scrolling down and past 50px from the top
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
  }, [prevScrollY]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <h1>Fitness</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="../Pages/Aboutpage.tsx"> About </Link>
          </li>
          <li>
            <Link to="/trainers">Trainers</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/prices">Prices</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
