import React from 'react';
import {connect} from 'react-redux';
import CardForm from '../card-form'
import * as card from '../../action/card';

class Card extends React.Component{
  render(){
    let {
      card, // vinicio - this is coming from the actual props
      cardRemove,
      cardUpdate,
    } = this.props;

    return(
      <div className='card'>
        <p> {card.content} </p>
        <button onClick={() => cardRemove(card)}> delete </button>
        <CardForm card={card} onComplete={cardUpdate} />
      </div>
    );
  }

}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  cardRemove: (data) => dispatch(card.removeAction(data)),
  cardUpdate: (data) => dispatch(card.updateAction(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Card);