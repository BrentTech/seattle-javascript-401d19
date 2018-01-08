import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.state.value = this.props.value;
    this.state.suit = this.props.suit;
    console.log(this.state)

    this.increment = this.increment.bind(this)
  }

  increment() {
    // the state value comes as a string so let's parse it to make sure it's a
    // number
    let newVal = parseInt(this.state.value, 10) + 1

    // trying to manipulate things on state directly like this.state.value += 1
    // wont' work. we MUST call this.setState() for things to actually update in
    // the view.
    this.setState({value: newVal})
  }

  render() {
    return (<div className={'card ' + this.state.suit}
    onClick={this.increment}>
      <div className="top-left">{this.state.value}</div>
      <div className="bot-right">{this.state.value}</div>
    </div>)
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Card value="A" suit="hearts" />
        <Card value="2" suit="spades" />
        <Card value="7" suit="clubs" />
        <Card value="8" suit="diamonds" />
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))