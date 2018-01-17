import React from 'react';
import {connect} from 'react-redux';
import SectionForm from '../section-form'
import * as section from '../../action/section';

class Landing extends React.Component{
  render(){
    // vinicio - props comes from the store due to the connect
    let {
      sections,
      sectionCreate,
      sectionUpdate,
      sectionRemove,
    } = this.props;

    // section = {title : 'hi'};
    // newSection = {title: 'bye'}
    return(
      <div className='landing'>
        <SectionForm onComplete={sectionCreate} />
        {
          sections.map((section,i) =>
            <div key={i}>
              <h2> {section.title} </h2> 
              <button onClick={() => sectionRemove(section)}> delete </button>
              <SectionForm section={section} onComplete={sectionUpdate} />
            </div>
          )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  //vinicio - I'm creating props in landing
  return{
    //! vinicio - cats : 'This con be ANYTHING',
    sections : state.sections,
  }
};

let mapDispatchToProps = (dispatch) => {
  //vinicio - I'm creating props in landing
  return{
    sectionCreate: (data) => dispatch(section.createAction(data)),
    sectionUpdate: (data) => dispatch(section.updateAction(data)),
    sectionRemove: (data) => dispatch(section.removeAction(data)),
  }
};

// vinicio: This is the connection to the store
//          This is a curried function.
export default connect(mapStateToProps,mapDispatchToProps)(Landing);

// vinicio - Behind the scenes, this is happening:
// let middleFunction = connect(mapStateToProps,mapDispatchToProps);
// export default middleFunction(Landing);