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
      setSections,
    } = this.props;

    return(
      <div className='landing'>
        <div><button onClick={this.props.setSections}>load sections</button></div>
        <SectionForm onComplete={sectionCreate} />
        {
          sections.map((section,i) =>
            <Section key={i} section={section} />
          )}
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
    setSections: (data) => dispatch(sectionActions.setActions(data)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Landing);