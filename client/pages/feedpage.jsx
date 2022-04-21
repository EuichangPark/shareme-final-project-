import React from 'react';
import Header from '../components/header';
import Share from '../components/share';
import Post from '../components/post';
import PhotoLibrary from '../components/photolibrary';
import QuotesLibrary from '../components/quotes';

export default class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
    <>
      <Header />
      <div className="container">
        <div className='row'>
          <div className='col-lg-6'>
            <Share />
            <PhotoLibrary />
            <QuotesLibrary />
          </div>
          <div className='col-lg-6'>
            {this.state.posts.map(post => (
              <Post key={post.postId} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
    );
  }
}
