import React from 'react';
import './style.css';
import favicon from './favicon.ico';

function Footer() {
  return (
    <div className="footer">
      <img src={favicon} className="img-padding" />
      <h6 className="custom-color"> &copy;2020 Wedding Planner</h6>
      <img src={favicon} className="img-padding" />
    </div>
  );
}

export default Footer;
