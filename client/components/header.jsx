import React from 'react';

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-container">
        <div className='shareme-logo col-half'>
          <span className='logo'>Shareme</span>
        </div>
        <div className='flex-end col-half'>
          <div className="navbar">
            <a href="#" className="navbar-item"> Home </a>
            <a href="#" className="navbar-item"> About </a>
            <a href="#" className="navbar-item"> Profile </a>
          </div>
          <div className='log-out'>
            <button type='button' className='log-out-btn'>LOGOUT</button>
          </div>
          <div className='profile-picture'>
            <img className='profile-img' src='https://serc.carleton.edu/images/curenet/funding/placeholder_650.jpg' />
          </div>
        </div>
      </div>
    </header>
  );
}
