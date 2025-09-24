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
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container container">
        <div className="navbar-logo">
          {/* ✅ alt text improved for SEO */}
          <a href="/" aria-label="FocusForge Home">
            <img
              src={Logo}
              alt="FocusForge - Productivity and Habit Tracker Logo"
              className="navbar-logo-img"
              width="140"
              height="40"
            />
          </a>
        </div>

        {/* Hamburger toggle */}
        <button
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </button>

        {/* ✅ use <a> instead of <span> so crawlers recognize links */}
        <ul id="navbar-menu" className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a
              href="#who-we-are"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('who-we-are');
              }}
            >
              Who We Are
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#features"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('features');
              }}
            >
              Features
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#cta"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('cta');
              }}
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
