import React from 'react';

class PlayGroundForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  render() {
    return (
      <form>
        <div>
          <p>
            Name:
            <input size="40" type="text" value={this.state.name}
              onChange={this.handleNameChange}
              placeholder="Jefferson G. Memorial Park"/>
          </p>
          <textarea value={this.state.description}
            onChange={this.handleDescriptionChange}
            cols="60" rows="20"
            placeholder="This park has many nice features...">
          </textarea>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form> 
    )
  }
}

module.exports = PlayGroundForm