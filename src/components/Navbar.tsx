import './Navbar.css';
import Logo from '/FocusForge-inlinebg.svg';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <img src={Logo} alt="FocusForge Logo" className="navbar-logo-img" />
        </div>
        {/* Updated: Add active class for hamburger animation */}
        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <span className="navbar-link" onClick={() => handleScroll('who-we-are')}>Who We Are</span>
          </li>
          <li className="navbar-item">
            <span className="navbar-link" onClick={() => handleScroll('features')}>Features</span>
          </li>
          <li className="navbar-item">
            <span className="navbar-link" onClick={() => handleScroll('cta')}>Get Started</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}