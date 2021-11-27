import { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import classnames from 'classnames';
import './style.css';

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const scrollWithOffset = (el, offset) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth"
    });
  } 
  
  const onNavLinkClick = (isLanding) => {
    setHamburgerOpen(false);
    if (!isLanding) {
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  const navbarClassnames = classnames({
    'hamburger-open': hamburgerOpen
  });

  return (
    <div id="navbar-container">
      <header id="navbar" className={navbarClassnames}>
        <div id="navbar-mobile-home" onClick={() => onNavLinkClick(true)}>
          <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/">
            <div id="navbar-home-container">
              <span>Scott A. Nicholson</span>
              <span>Front-End Developer</span>
            </div>
          </NavLink>
        </div>
        <i id="navbar-hamburger-icon" className="fas fa-bars hamburger sn-icon" onClick={() => setHamburgerOpen(!hamburgerOpen)}></i>
        <ul id="navbar-links">
          <li onClick={() => onNavLinkClick()}>
            <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/#coming-soon">Highlights</NavLink>
          </li>
          <li onClick={() => onNavLinkClick()}>
            <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/#coming-soon">My Tech Journey</NavLink>
          </li>
          <li onClick={() => onNavLinkClick()}>
            <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/#coming-soon">Get In Touch</NavLink>
          </li>
        </ul>
      </header>
      <NavLink onClick={() => onNavLinkClick()} scroll={(el) => scrollWithOffset(el, 0)} to="/#coming-soon">
        <div id="landing-see-more-container">
          <i id="landing-see-more-icon" className="fas fa-arrow-down"></i>
          <p>Scroll for more</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Navbar;