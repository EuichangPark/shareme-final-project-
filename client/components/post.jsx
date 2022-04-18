import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Post() {
  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img className='post-profile-img' src='https://serc.carleton.edu/images/curenet/funding/placeholder_650.jpg'></img>
            <span className='post-user-name'>Kent park</span>
            <span className='post-date'>a week ago</span>
          </div>
          <div className="post-top-right"></div>
        </div>
        <div className="post-center">
          <span className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex architecto aperiam animi quis nesciunt nisi id? Voluptatibus numquam tempore, autem sunt rem aliquid, veritatis est, at iste dicta incidunt corrupti.</span>
          <img className='post-img' src='/images/surprise.jpg'></img>
        </div>
        <div className='post-bottom'>
          <div className="post-bottom-left">
            <ThumbUpIcon fontSize='small' className='icon-thumbs-up' />
            <span className='post-like-counter'>6 people liked</span>
          </div>
          <div className="post-bottom-right">
            <span className='post-comment-texts'> 2 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
