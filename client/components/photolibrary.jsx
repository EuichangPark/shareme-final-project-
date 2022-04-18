import React from 'react';

export default class PhotoLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    };
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/?client_id=vofryUdQ6rIN0DrxswzsJ6P4JwaGrkfRQ4JVBv6ClWw')
      .then(response => response.json())
      .then(result => this.setState({ urls: result }));
  }

  render() {
    const { urls } = this.state;
    return (
      <div className='container photo-container off'>
        <div className='d-flex'>
        {urls.map(url => (
            <div className='photo-wrapper' key={url.id}>
              <img src={url.urls.thumb} />
            </div>
        ))}
        </div>
      </div>
    );
  }
}

// Access Key: vofryUdQ6rIN0DrxswzsJ6P4JwaGrkfRQ4JVBv6ClWw
// Secret key: ilc2UZzhPAIa7__r255xjZs9GrSNB4lPbrs7nk37MvI
