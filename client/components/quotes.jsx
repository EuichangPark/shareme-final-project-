import React from 'react';

export default class QuotesLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(result => {
        this.setState({
          quotes: result
        });
      });

  }

  render() {
    const { quotes } = this.state;
    return (
      <div className='post-quotes off'>
        {quotes.map((quote, i) => (
          <div key={i}>
            <p>{quote.text}</p>
          </div>
        ))}
      </div>
    );
  }
}
