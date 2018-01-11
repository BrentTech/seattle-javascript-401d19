import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filter: ''};
    this.handleFilter = this.handleFilter.bind(this)
    this.search = this.search.bind(this)
  }

  handleFilter(event) {
    this.setState({filter: event.target.value})
  }

  search(event) {
    event.preventDefault();
    this.props.submitSearch(this.state.filter)
  }

  render() {
    return <form onSubmit={this.search}>
      <input type="text" value={this.state.filter} onChange={this.handleFilter}/>
      <button type="submit">Search</button>
    </form>
  }
}

module.exports = SearchForm;