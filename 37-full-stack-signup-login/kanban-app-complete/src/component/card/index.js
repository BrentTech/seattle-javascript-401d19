import './_card.scss';
import React from 'react';
import {connect} from 'react-redux';
import CardForm from '../card-form'
import * as card from '../../action/card';

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {editing : false};
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Card.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    //-------------------------------------------------------------
  }
  //---------------------------------------------------------------
  // Member Functions
  //---------------------------------------------------------------
  handleUpdate(card){
    this.props.cardUpdate(card);
    this.setState({editing: false});
  }
  //---------------------------------------------------------------
  // Life-cycle Hooks
  //---------------------------------------------------------------
  render(){
    let {
      card, // vinicio - this is coming from the actual props
      cardRemove,
      cardUpdate,
    } = this.props;

    let contentJSX = <p> {card.content} </p>;
    let editingJSX = <CardForm card={card} onComplete={this.handleUpdate} />;
    let renderJSX = this.state.editing? editingJSX : contentJSX;

    return(
      <div className='card'>
        <button className='delete' onClick={() => cardRemove(card)}> X </button>
        <main onDoubleClick={() => this.setState({editing: true})}>
          {renderJSX}
        </main>
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
