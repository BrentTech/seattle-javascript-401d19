import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from '../profile-form';

import { createProfile, updateProfile, fetchProfile } from '../../action/profile';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.handleCreate = (profile) => {
      this.props.createProfile(profile)
        .then(() => {
          this.props.history.push('/dashboard');
        })
        .catch(console.error);
    };

    this.handleUpdate = (profile) => {
      this.props.updateProfile(profile);
      this.setState({ editing: false });
    };
  }

  render() {
    let { profile, createProfile, updateProfile } = this.props;

    let JSXediting = null;
    let JSXDisplay = null;
    let JSXProfile = null;

    if (profile) {
      JSXediting = 
        <React.Fragment>
          <ProfileForm profile={profile} onComplete={this.handleUpdate} />
          <button onClick={() => this.setState({ editing: false })}> cancel </button>
        </React.Fragment>;

      JSXDisplay = 
        <React.Fragment>
          <p>{profile.meetups}</p>
          <button onClick={() => this.setState({ editing: true })}> update </button>
        </React.Fragment>;

      JSXProfile =
        <React.Fragment>
          <h2>{profile.name}</h2>
          <h3>{profile.meetupMemberId}</h3>
          {this.state.editing ? JSXediting : JSXDisplay}
        </React.Fragment>;
    }
    
    return(
      <React.Fragment>
        <h1> Profile </h1>
        {profile ? JSXProfile : <ProfileForm onComplete={this.handleCreate} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  createProfile: (profile) => dispatch(createProfile(profile)),
  updateProfile: (profile) => dispatch(updateProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);