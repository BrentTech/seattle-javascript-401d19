import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import PlayGroundForm from './components/playground-form'
import ResultList from './components/result-list'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ResultList />
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));