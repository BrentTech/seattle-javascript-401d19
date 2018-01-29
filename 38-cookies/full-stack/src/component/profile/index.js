import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile-form';


import * as clientProfileActions from '../../action/client-profile';
import * as routes from '../../routes';


class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Profile.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    //-------------------------------------------------------------
  }
  //----------------------------------------------------
  // Member Functions
  //----------------------------------------------------
  handleCreate(profile){ 
    this.props.profileCreate(profile)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
  }

  handleUpdate(profile){
    this.props.profileUpdate(profile);
    this.setState({editing: false});
  }
  //----------------------------------------------------
  // Life-cycle Hooks
  //----------------------------------------------------
  render(){
    let {
      profile,
      profileCreate,
      profileUpdate
    } = this.props;

    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXProfile = null; // vinicio - final render variable

    if(profile){
      JSXEditing = 
        <div>
          <ProfileForm profile={profile} onComplete={this.handleUpdate} />
          <button onClick={() => this.setState({editing:false})}> cancel </button>
        </div>;
      
       JSXDisplay = 
        <div>
          <p>{profile.bio}</p>
          <button onClick={() => this.setState({editing:true})}> Edit Bio </button>
        </div>;
      
      JSXProfile = 
        <div>
          <h2>{profile.username}</h2>
          <h3>{profile.email}</h3>
          {this.state.editing ? JSXEditing : JSXDisplay }
        </div>;
    }

    return(
      <div>
        <h1> Profile </h1>
        { profile ? JSXProfile : <ProfileForm onComplete={this.handleCreate} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile : state.clientProfile,
});

const mapDispatchToProps = (dispatch) => ({
  profileCreate : (profile) => dispatch(clientProfileActions.createAction(profile)),
  profileUpdate : (profile) => dispatch(clientProfileActions.updateAction(profile)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);