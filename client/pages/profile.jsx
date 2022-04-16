import React from 'react';
import Header from '../components/header';

export default function Profile(props) {
  return (
    <>
      <Header />
      <div className='container mt-5'>
        <div className="row justify-content-center">
          <div className="col-4 profile-image">
            <img className='img-fluid' src='https://images.unsplash.com/photo-1610186593977-82a3e3696e7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'></img>
          </div>
          <div className="col-4 mt-5">
            <h2>Name</h2>
            <span>25</span>
            <p>Toronto, Canada</p>
            <form>
              <label htmlFor='about-me'>About me</label>
              <div className='profile-section'>
                <textarea className='w-100' columns='25' rows='10' name='about-me' placeholder='Who are you?'></textarea>
              </div>
              <div className='d-flex justify-content-end'>
                <button className="btn-save me-3 padding" type="button">SAVE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
