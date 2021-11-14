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
    <header id="navbar" className={navbarClassnames}>
      <div id="navbar-inner-container">
        <div id="navbar-mobile-home" onClick={() => onNavLinkClick(true)}>
          <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/">
            <div id="navbar-mobile-home-container">
              <span>Scott A. Nicholson</span>
              <span>Front-End Developer</span>
            </div>
            </NavLink>
        </div>
        <i id="navbar-hamburger-icon" className="fas fa-bars hamburger sn-icon" onClick={() => setHamburgerOpen(!hamburgerOpen)}></i>
        <ul id="navbar-links">
          <li onClick={() => onNavLinkClick(true)}>
            <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/">Home</NavLink>
          </li>
          <li onClick={() => onNavLinkClick()}>
            <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/#highlights">Highlights</NavLink>
          </li>
          <li onClick={() => onNavLinkClick()}>
            <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/#highlights">My Tech Journey</NavLink>
          </li>
          <li onClick={() => onNavLinkClick()}>
            <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/#highlights">Get In Touch</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;