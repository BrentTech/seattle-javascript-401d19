import React from 'react';
import validator from 'validator';

let emptyState = {
  username: '',
  usernameDirty: false,
  usernameError: 'Username is required',

  email: '',
  emailDirty: false,
  emailError: 'Email is required',

  password: '',
  passwordDirty: false,
  passwordError: 'Password is Required',
};

class AuthForm extends React.Component {
  constructor(props){
    super(props)
    this.state = emptyState
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(AuthForm.prototype);
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
  handleChange(e){
    let {name, value} = e.target

    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: this.handleValidation(name,value),
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let {nameError,emailError,passwordError} = this.state;

    if(this.props.type === 'login' || !nameError && !emailError && !passwordError){
      // vinicio - if there are no errors or we want to login, proceed.
      this.props.onComplete(this.state);
      this.setState(emptyState);
    }else{
      // vinicio - if we try to submit the form, everything will be marked as dirty
      this.setState({
        usernameDirty: true,
        emailDirty: true,
        passwordDirty:true,
      });
    }
  }

  handleValidation(name,value){
    if(this.props.type == 'login')
      return null;
    
    switch(name){
      case 'username':
        if(value.length < 6)
          return 'Your name must be at lest 6 characters long';
        return null;
      case 'email':
        if(!validator.isEmail(value))
          return 'You must provide a valid email';
        return null;
      case 'password':
        if(value.length < 8)
          return 'Your password must be at lest 8 characters long';
        return null;
      default:
        return null;
    }
  }
  //---------------------------------------------------------------
  // Life-cycle Hooks
  //---------------------------------------------------------------
  
  render(){
    let { type } = this.props;

    type = type === 'login' ? type : 'signup';

    let signupJSX = 
      <div>
        {this.state.emailDirty ? <p>{this.state.emailError}</p> : undefined}
        <input
          className={this.state.emailDirty && this.state.emailError ? 'invalid' : undefined}
          name='email'
          placeholder='email'
          type='email'
          value={this.state.email}
          onChange={this.handleChange}
          />
        </div>

    let signupRenderedJSX = (type !== 'login') ? signupJSX : undefined;

    return (
      <form className='auth-form' noValidate onSubmit={this.handleSubmit} >
      
        {this.state.usernameDirty ? <p>{this.state.usernameError}</p> : undefined}
        <input
          className={this.state.usernameDirty && this.state.usernameError ? 'invalid' : undefined}
          name='username'
          placeholder='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
          />

        {signupRenderedJSX}

        {this.state.passwordDirty ? <p>{this.state.passwordError}</p> : undefined}
        <input
          className={this.state.passwordDirty && this.state.passwordError ? 'invalidPassword' : undefined}
          name='password'
          placeholder='password'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
          />

        <button type='submit'> {type} </button>
      </form>
    )
  }
}

export default AuthForm;