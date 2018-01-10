import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search-form';
import SearchResultList from './components/search-result-list';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      redditResponse: [],
    };
  }

  render() {
    return (
      <div>
        <h1 id='main-header'>Reddit Search Engine</h1>
        <SearchForm app={this} getReddit={this.renderReddit} />
        <SearchResultList redditArray={this.state.redditResponse}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('appGoesHere'));
