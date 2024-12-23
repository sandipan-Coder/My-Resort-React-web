import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id='footer'>
      <div className="footertop">
        <div className="box">
            <span id='contact1'>Contact Us</span>
            <span>+917585949632</span>
            <span>sndivai@gmail.com</span>
            <span>Address,city/India</span>
        </div>
        <div className="box">
            <span id='services'>Our Services</span>
            <span>Home</span>
            <span>Add Listing</span>
            <span>Rent</span>
        </div>
        <div className="box">
            <span id='Quick'>Quick Link</span>
            <span>Knowledge Base</span>
            <span>FAQ</span>
            <span>Contact</span>
        </div>
        <div className="box">
            <span id='logo'>
                My Resort
            </span>
            <Link to={"/Contact"}><button>Contact Us</button></Link>
        </div>
      </div>
      <div className="footerbuttom">
        <span>&copy; 2024 My Resort. All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer
