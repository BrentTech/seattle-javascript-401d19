import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import PlayGroundForm from './components/playground-form'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PlayGroundForm />
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));