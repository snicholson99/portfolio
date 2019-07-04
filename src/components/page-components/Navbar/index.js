import React, { Component } from 'react';
import classnames from 'classnames';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import outlineGraphic from "/profile_outline.svg";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      hamburgerOpen: false,
      topOfPage: null,
    }
  }

  componentDidMount() { 
    if (window.pageYOffset === 0) {
      this.setState({ topOfPage: true });
      return;
    } else {
      this.setState({ topOfPage: false });
    }
  }

  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  } 

  render() {
    const navbarClassnames = classnames({
      'navbar': true,
      'show-animation': this.state.topOfPage,
      'hamburger-open': this.state.hamburgerOpen,
    });
    return (
      <div className={navbarClassnames}>
        <div>
          <NavLink scroll={el => this.scrollWithOffset(el, 150)} to="/#landing"><img src={outlineGraphic} alt="logo" /></NavLink>
          <i className="fas fa-bars hamburger" onClick={() => this.setState({ hamburgerOpen: !this.state.hamburgerOpen })}></i>
        </div>
        <ul>
          <li><NavLink scroll={el => this.scrollWithOffset(el, 150)} to="/#highlights">Highlights</NavLink></li>
          <li><NavLink scroll={el => this.scrollWithOffset(el, 50)} to="/#my-journey">My Journey</NavLink></li>
          <li><NavLink scroll={el => this.scrollWithOffset(el, 120)} to="/#behind-the-code">Behind The Code</NavLink></li>
          <li><NavLink scroll={el => this.scrollWithOffset(el, 60)} to="/#get-in-touch">Get In Touch</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
