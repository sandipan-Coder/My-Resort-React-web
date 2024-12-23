import React from 'react'
import './Contact.css';
import { GrContact } from "react-icons/gr";

function Contact() {
  return (
        <div id='contact'>
            <form action="https://formspree.io/f/xpwwzyby" method="POST">
                <span id='contacttitle'>Contact Page</span>
                <div className="list">
                    <label htmlFor="name1">UserName</label>
                    <input name='username' type="text" id='name1' required/>
                </div>
                <div className="list">
                    <label htmlFor="mail">Email</label>
                    <input name='mail' type="email" id='mail' required/>
                </div>
                <div className="list">
                    <label htmlFor="mess">Message</label>
                    <textarea name='message' id='mess' required></textarea>
                </div>
                <button id='contactbtn'>Submit<GrContact /></button>
            </form>
        </div>
    );
};

export default Contact
