import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';
import Section from '../section';
import SectionForm from '../section-form'
import * as sectionActions from '../../action/section';

class Landing extends React.Component{
  render(){
    // vinicio - props comes from the store due to the connect
    let {
      sections,
      sectionCreate,
      sectionUpdate,
      sectionRemove,
    } = this.props;

    return(
      <div className='landing'>
        <SectionForm onComplete={sectionCreate} />
        <div className='section-container'>
          {
            sections.map((section,i) =>
              <Section key={i} section={section} />
            )
          }
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return{
    sections : state.sections,
  }
};

let mapDispatchToProps = (dispatch) => {
  return{
    sectionCreate: (data) => dispatch(sectionActions.createAction(data)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Landing);