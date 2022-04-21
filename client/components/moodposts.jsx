import React from 'react';
import Header from './header';
import Share from './share';
import QuotesLibrary from './quotes';
import PhotoLibrary from './photolibrary';
import Post from './post';

export default class MoodPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLiked: false
    };
  }

  componentDidMount() {
    fetch(`/api/mood-posts/${this.props.mood}`)
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  handleLike() {
    this.setState({ isLiked: true });
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
