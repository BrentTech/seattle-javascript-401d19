import React from 'react'

class ResultList extends React.Component {
  languageList() {
    if (!this.props.hasSearched) {
      return <div></div>
    } else if (this.props.loading) {
      return <p>Loading...</p>
    } else if (this.props.results.length === 0) {
      return <p>No results.</p>
    } else {
      return this.props.results.map((result, index)=> {
        return <div className="language-rating" key={index}>
          Rating: {result.rating}
          &nbsp;
          Language: {result.language}
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