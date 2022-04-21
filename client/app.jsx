import React from 'react';
import Home from './pages/home';
import Profile from './pages/profile';
import FeedPage from './pages/feedpage';
import { parseRoute } from './lib';
import MoodPosts from './components/moodposts';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    }, false);
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'profile') {
      return <Profile />;
    }
    if (route.path === 'feed') {
      return <FeedPage />;
    }
    if (route.path === 'posts') {
      const mood = route.params.get('mood');
      return <MoodPosts mood={mood} />;
    }

    return (
      <div className='page-not-found'>
        <h1>404 - Page Not Found</h1>
      </div>
    );
  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    );
  }
}
