import React from 'react'
import './Signup.css';
import { MdOutlinePersonAdd } from "react-icons/md";

function Signup() {
  return (
    <div id='signup'
    onSubmit={(e) => {
        alert('Sign Up Successful.......👍');
    }}
    >
        <form action="">
            <span id='signuptitle'>Sign Up Page</span>
            <div className="list">
                <label htmlFor="name">Username</label>
                <input type="text" id='name' required/>
            </div>
            <div className="list">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' required/>
            </div>
            <div className="list">
                <label htmlFor="pass1">Password</label>
                <input type="password" id='pass1' required/>
            </div>
            <div className="list">
                <label htmlFor="pass2">Confirm Password</label>
                <input type="password" id='pass2' required/>
            </div>
            <button id='signupbtn'>Sign Up <MdOutlinePersonAdd /></button>
        </form>
      
    </div>
  )
}

export default Signup
