import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';
import Section from '../section';
import SectionForm from '../section-form'
import * as sectionActions from '../../action/section';

class Landing extends React.Component{
  componentWillMount() {
    console.log('component will mount')
    this.props.handleAJAX()
  }

  render(){
    // vinicio - props comes from the store due to the connect
    let {
      sections,
      sectionCreate,
      sectionUpdate,
      sectionRemove,
      handleAJAX,
    } = this.props;

    return(
      <div className='landing'>
        <button onClick={handleAJAX}> do AJAX </button>

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
  return {
    sectionCreate: (data) => dispatch(sectionActions.createAction(data)),
    handleAJAX: () => dispatch(sectionActions.getNotes()),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Landing);