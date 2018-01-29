import React from 'react';

let emptyState = {
  meetupMemberId: '',
  name: '',
  phoneNumber: '',
  meetups: '',
};

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.profile || emptyState;

    this.handleChange = (e) => {
      let { name, value } = e.target;
      this.setState({
        [name] : value,
      });
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      this.props.onComplete(this.state);
      this.setState(emptyState);
    };
  }

  componentWillReceiveProps(props) {
    if (props.profile)
      this.setState(props.profile);
  }

  render() {
    return(
      <form className='profile-form' onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          type='text' 
          name='meetupMemberId' 
          placeholder='meetup member id' 
          value={this.state.meetupMemberId}
        />
        <input 
          onChange={this.handleChange}
          type='text' 
          name='phoneNumber' 
          placeholder='555-555-5555' 
          value={this.state.phoneNumber}
        />      
        <input 
          onChange={this.handleChange}
          type='text' 
          name='meetups' 
          placeholder='one, two, three...' 
          value={this.state.meetups}
        />      
        <button type='submit'> {this.props.profile ? 'update' : 'create'} profile </button>

      </form>
    );
  }
}

export default ProfileForm;