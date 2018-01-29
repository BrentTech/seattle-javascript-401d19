import React from 'react';
import { signupAction, loginAction } from '../../action/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

let emptystate = {
  username: '',
  usernameDirty: false,
  usernameError: 'Username is required',

  email: '',
  emailDirty: false,
  emailError: 'Email is required',
  
  password: '',
  passwordDirty: false,
  passwordError: 'Password is required',
};

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = emptystate;

    this.handleChange = (e) => {
      let { name, value } = e.target;
      this.setState({ 
        [name] : value, 
        [`${name}Dirty`] : true, 
        [`${name}Error`] : this.handleValidation(name, value), 
      });
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      let { nameError, emailError, passwordError } = this.state;
      let { type, onComplete } = this.props;

      if (type ==='login' || !nameError && !emailError && !passwordError) {
        onComplete(this.state);
        this.setState(emptystate);
      } else {
        this.setState({
          usernameDirty : true,
          emailDirty : true,
          passwordDirty : true,
        });
      }
    };

    this.handleValidation = (name, value) => {
      if (this.props.type === 'login') {
        return null;
      }

      switch (name) {
        case 'username':
          if (value.length > 12) {
            return 'name must not exceed 12 characters';
          }
          return null;
          
        case 'email':
          if (!validator.isEmail(value)) {
            return 'you must provide a valid email';
          }
          return null;

        case 'password':
          if (value.length > 20) {
            return 'password must not exceed 20 characters';
          }
          return null;
            
        default:
          return null;
      }
    };
  }
  
  render() {
    let {type} = this.props;

    let renderEmail = type === 'signup' ? 
      <React.Fragment>
        {this.state.emailDirty ? <p>{this.state.emailError}</p> : undefined}
        <input 
          className={this.state.emailDirty && this.state.emailError ? 'invalid' : undefined}
          onChange={this.handleChange} 
          type="email" 
          name='email' 
          placeholder ='email' 
        />
      </React.Fragment> : null;
      

    let header = type === 'signup' ? 'Signup' : 'Login';

    return (
      <form noValidate className='auth-form' onSubmit={this.handleSubmit}>

        {this.state.usernameDirty ? <p>{this.state.usernameError}</p> : undefined}

        <input 
          className={this.state.usernameDirty && this.state.usernameError ? 'invalid' : undefined}
          onChange={this.handleChange} 
          type="username" 
          name='username' 
          value={this.state.username}
          placeholder ='username' 
        />

        {renderEmail}

        {this.state.passwordDirty ? <p>{this.state.passwordError}</p> : undefined}

        <input 
          className={this.state.passwordDirty && this.state.passwordError ? 'invalid' : undefined}
          onChange={this.handleChange} 
          type="password" 
          name='password' 
          value={this.state.password}
          placeholder ='password' 
        />

        <button type="submit"> {header.toLowerCase()} </button>
      </form>
    );
  }
}

export default AuthForm;