import React from 'react';
import './style.css';
import favicon from './favicon.ico';

function Footer() {
  return (
    <div className="footer">
      <img src={favicon} className="img-padding" />
      <h6> &copy;2020 Project 2 - Group 1</h6>
      <img src={favicon} className="img-padding" />
    </div>
  );
}

export default Footer;
