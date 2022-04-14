import React from 'react';

// const defaultArray = [
//   {
//     title: 'joyful',
//     photoUrl: '../../server/public/images/joyful.jpg',
//     description: 'synonyms of joyful'
//   },
//   {
//     title: 'love',
//     photoUrl: '../../server/public/images/love.jpg',
//     description: 'synonyms of love'
//   },
//   {
//     title: 'joyful',
//     photoUrl: '../../server/public/images/feelingdown.jpg',
//     description: 'synonyms of feelingdown'
//   }
// ];

export default function Cards(props) {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center">
      <div className="col p-5">
        <div className="card h-100">
          <img src="https://images.unsplash.com/photo-1590698933947-a202b069a861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Joyful</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
      </div>
      <div className="col p-5">
        <div className="card h-100">
          <img src="https://images.unsplash.com/photo-1514446750685-c27ac87a4403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxsb3ZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="love image" />
            <div className="card-body">
              <h5 className="card-title">Love</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
      </div>
      <div className="col p-5">
        <div className="card h-100">
          <img src="https://images.unsplash.com/photo-1622240506921-042a4e71c172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Feeling down</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
