import React from 'react';

class SearchResultList extends React.Component {
  buildResults() {
    if (this.props.redditArray.includes('Failed to fetch')) {
      return (
        <div>
          <p className='no-results'>No Results Found</p>
        </div>
      );
    } 
    
    else if (this.props.redditArray.length > 0) {
      return this.props.redditArray.map((each, index) => {
        let image;
        try {
          image = each.preview.images[0].source.url;
        } catch (e) {
          image = 'http://i.imgur.com/YAGEvij.png';
        }
        return (
          <div key={index} className='reddit'>

            <img className='image' src={image} alt="" />

            <a href={'https://reddit.com/' + each.permalink}>
              <h4 className='title'>{each.title}</h4>
            </a>

            <p className='author'>author: {each.author}</p>
            
            <h1 className='ups'>{each.ups}</h1>
            <img className='upvote' src="http://i.imgur.com/q94gk.png" alt="" />
            <p className='subreddit'>/r/{each.subreddit}</p>

          </div>   
        );
      }
      );}
    
    else
      return;
  }

  render() {
    return (
      <div>
        {this.buildResults()}
      </div>
    );
  }
}

module.exports = SearchResultList;