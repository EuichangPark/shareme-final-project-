import React from 'react';
import Header from '../components/header';
import Share from '../components/share';
import Post from '../components/post';
import PhotoLibrary from '../components/photolibrary';
import QuotesLibrary from '../components/quotes';

export default function FeedPage(props) {
  return (
    <>
      <Header />
      <div className="container">
        <div className='row'>
          <div className='col-lg-6'>
            <Post />
          </div>
          <div className='col-lg-6'>
            <Share />
            <PhotoLibrary />
            <QuotesLibrary />
          </div>
        </div>
      </div>
    </>
  );
}
