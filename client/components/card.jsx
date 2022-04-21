import React from 'react';

export default function Card(props) {
  return (
    <div className='container mt-3'>
      <div className="row gy-3 mt-3">
        <div className="col-12 col-md-6 col-lg-4">
          <a href='#posts?mood=happiness' className='plain'>
            <div className='card'>
              <img src='./images/joyful.jpg' className='card-img-top' alt='image-happiness'/>
              <div className="card-body">
                <h5 className='card-title'>Happiness</h5>
                <p className='card-text'>Happiness is often characterized by feelings of joy, gratification, satisfaction, and well-being.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <a href='#posts?mood=love' className='plain'>
            <div className='card'>
              <img src='./images/Love.jpg' className='card-img-top' alt='image-love'/>
              <div className="card-body">
                <h5 className='card-title'>Love</h5>
                <p className='card-text'>Love is Security, Indescribable, Give-and-Take, Respect, and Commitment.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <a href='#posts?mood=sadness' className='plain'>
            <div className='card'>
              <img src='./images/feelingdown.jpg' className='card-img-top' alt='image-sadness'/>
              <div className="card-body">
                <h5 className='card-title'>Sadness</h5>
                <p className='card-text'>Sadness is something that all people experience from time to time. You are not the only one.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row gy-3 mt-3 mb-4">
        <div className="col-12 col-md-6 col-lg-4">
          <a href='#posts?mood=fear' className='plain'>
            <div className='card'>
              <img src='./images/fear.jpg' className='card-img-top' alt='image-fear'/>
              <div className="card-body">
                <h5 className='card-title'>Fear</h5>
                <p className='card-text'>Fear is an unpleasant often strong emotion caused by anticipation or awareness of danger</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <a href='#posts?mood=surprise' className='plain'>
            <div className='card'>
              <img src='./images/surprise.jpg' className='card-img-top' alt='image-surprise'/>
              <div className="card-body">
                <h5 className='card-title'>Surprise</h5>
                <p className='card-text'>Surprise is an unexpected or astonishing event, fact, or thing.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
