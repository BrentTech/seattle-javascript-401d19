import './_section.scss';
import React from 'react';
import {connect} from 'react-redux';
import Card from '../card';
import CardForm from '../card-form';
import SectionForm from '../section-form';
import DropZone from '../drop-zone';

import * as cardActions from '../../action/card';
import * as sectionActions from '../../action/section';

class Section extends React.Component {
  // vinicio - adding view state
  constructor(props){
    super(props);
    this.state = {editing : false};
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Section.prototype);
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
  handleUpdate(section){
    this.props.sectionUpdate(section);
    this.setState({editing : false});
  }
  //---------------------------------------------------------------
  // Hooks
  //---------------------------------------------------------------

  render(){
    let {
      cards,
      section,
      cardCreate,
      sectionUpdate,
      sectionRemove,
      cardUpdateSection,
    } = this.props;

    let sectionCards = cards[section.id];

    let editingJSX = <SectionForm section={section} onComplete={this.handleUpdate} />;
    let contentJSX = 
      <div>
        <h2 onDoubleClick={() => this.setState({editing: true})}> {section.title} </h2>
        <button className='delete' onClick={() => sectionRemove(section)}> X </button>
      </div>;
    let renderJSX = this.state.editing ? editingJSX : contentJSX;

    return(
      <div className='section'>
        <DropZone onComplete={(card) => cardUpdateSection(card,section.id)}>
          {renderJSX}
          <CardForm section={section} onComplete={cardCreate} />
          <main className='card-container'>
          { 
            sectionCards.map((card,i) => <Card card={card} key={i} />)
          }
          </main>
        </DropZone>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  cards : state.cards,
});

let mapDispatchToProps = (dispatch) => ({
  cardCreate : (data) => dispatch(cardActions.createAction(data)),
  cardUpdateSection : (data,sectionID) => dispatch(cardActions.updateSectionID(data,sectionID)),
  sectionUpdate : (data) => dispatch(sectionActions.updateAction(data)),
  sectionRemove : (data) => dispatch(sectionActions.removeAction(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Section);
