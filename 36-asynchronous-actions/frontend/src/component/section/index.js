import React from 'react';
import {connect} from 'react-redux';
import Card from '../card';
import CardForm from '../card-form';
import SectionForm from '../section-form';

import * as cardActions from '../../action/card';
import * as sectionActions from '../../action/section';

class Section extends React.Component {
  render(){
    let {
      cards,
      section,
      cardCreate,
      sectionUpdate,
      sectionRemove,
    } = this.props;

    let sectionCards = cards[section.id];

    return(
      <div className='section'>
        <h2> {section.title} </h2>
        <button onClick={() => sectionRemove(section)}> delete </button>
        <SectionForm section={section} onComplete={sectionUpdate} />
        <CardForm section = {section} onComplete={cardCreate} />

        { 
          sectionCards.map((card,i) => <Card card={card} key={i} />)
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  cards : state.cards,
});

let mapDispatchToProps = (dispatch) => ({
  cardCreate : (data) => dispatch(cardActions.createAction(data)),
  sectionUpdate : (data) => dispatch(sectionActions.updateAction(data)),
  sectionRemove : (data) => dispatch(sectionActions.removeAction(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Section);