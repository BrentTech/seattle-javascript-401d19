import React from 'react'

class ResultList extends React.Component {
  constructor(props) {
    super(props)
    let newResults = [
        {language: 'python', rating: 8},
        {language: 'java', rating: 6},
        {language: 'javascript', rating: 9},
        {language: 'php', rating: 2},
    ]
    this.state = {
      //results: []
      results: newResults
    }
  }

  languageList() {
    if (this.state.results.length === 0) {
      return <p>No results.</p>
    } else {
      return this.state.results.map((result, index)=> {
        return <div key={index}>
          <p>Rating: {result.rating}</p>
          <p>Language: {result.language}</p>
        </div>
      });
    }
  }

  render() {
    return (
      <div>
        {this.languageList()}
      </div>
    )
  }
}

module.exports = ResultList