import React from 'react';

let emptyState = {
  username: '',
  email: '',
  password: '',
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
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }
  //---------------------------------------------------------------
  // Life-cycle Hooks
  //---------------------------------------------------------------
  
  render(){
    let { type } = this.props;

    type = type === 'login' ? type : 'signup';

    let signupJSX = 
      <input
        name='email'
        placeholder='email'
        type='email'
        value={this.state.email}
        onChange={this.handleChange}
        />;

    let signupRenderedJSX = (type !== 'login') ? signupJSX : undefined;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit} >
      
        <input
          name='username'
          placeholder='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
          />

        {signupRenderedJSX}

        <input
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