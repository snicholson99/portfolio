import { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import classnames from 'classnames';
import MenuIcon from '@mui/icons-material/Menu';

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
        <MenuIcon id="navbar-hamburger-icon" className="fas fa-bars hamburger sn-icon" onClick={() => setHamburgerOpen(!hamburgerOpen)} />
        <ul id="navbar-links">
          <li onClick={() => onNavLinkClick()}>
            <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/#highlights">Highlights</NavLink>
          </li>
          <li onClick={() => onNavLinkClick()}>
            <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/#coming-soon">My Tech Journey</NavLink>
          </li>
          <li onClick={() => onNavLinkClick()}>
            <NavLink className="navbar-link" scroll={(el) => scrollWithOffset(el, 0)} to="/#coming-soon">Get In Touch</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;