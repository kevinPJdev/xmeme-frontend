import React from 'react';
import '../css/navbar.css';
import Form from './Form.js';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo'>X-Meme</div>
          <div className='btn-form'>
            <Form />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
