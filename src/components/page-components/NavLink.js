import React from 'react';

const NavLink = ({ children, props }) => {
  return (
    <a {...props}>
      {children}
    </a>
  );
}

export default NavLink;
