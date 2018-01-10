import React from 'react';

const REDDIT_URL = 'http://www.reddit.com/r/';
const URL_EXTENSION = '.json?limit=';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      term: 'doge', 
      limit: 25,
      error: ' ',
    };

    this.searchTerm = this.searchTerm.bind(this);
    this.limitEr = this.limitEr.bind(this);
    this.fetchReddit = this.fetchReddit.bind(this);
  }

  fetchReddit(event) {
    event.preventDefault();
    let term = event.target.subreddit.value;
    let limit = event.target.limit.value;

    fetch(REDDIT_URL + term + URL_EXTENSION + limit)
      .then(parseRedditJson)
      .then(response => {
        this.props.app.setState({redditResponse: response});
        this.setState({error: ' '});
      })
      .catch(error => {
        this.props.app.setState({redditResponse: error.message});
        this.setState({error: 'error '});
      });
  }

  searchTerm(event) {
    this.setState({term: event.target.value});
  }
  limitEr(event) {
    if (event.target.value > 100 || event.target.value < 0) {
      return;
    }
    this.setState({limit: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.fetchReddit}>
        <p className='pre-text-box'>reddit.com/r/</p><input className={this.state.error} onChange={this.searchTerm} name='subreddit' value={this.state.term} type='text' placeholder='Enter Search Here' />

        <p className='pre-text-box'>SearchLimit:</p><input className={this.state.error} onChange={this.limitEr} name='limit' value={this.state.limit} type='number' placeholder='Limit' max='100' min='0' />

        <button>Search</button>
      </form>      
    );
  }
}

module.exports = SearchForm;

function parseRedditJson(response) {
  return response.json()
    .then(responsePlus => {
      return responsePlus.data.children
        .filter(result => !result.data.stickied)
        .map(result => result.data);
    });
}