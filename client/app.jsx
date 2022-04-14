import React from 'react';
import Home from './pages/home';
import Profile from './pages/profile';
import About from './pages/about';
import Header from './components/header';
import { parseRoute } from './lib';
import Username from './components/username';
import Cards from './components/cards';
import Instruction from './components/instruction';

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
    if (route.path === 'about') {
      return <About />;
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
        <Header />
        <Username />
        <Cards />
        <Instruction />
        {this.renderPage}
      </>
    );
  }
}
