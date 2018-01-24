import React from 'react';
import * as authActions from '../../action/auth';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  render(){
    let JSXNotLoggedIn = 
      <ul> 
        <li> <Link to='/'> Home </Link> </li>
        <li> <Link to='/login'> Login </Link> </li>
        <li> <Link to='/signup'> Signup </Link> </li>
      </ul>;

    let JSXLoggedIn = 
      <ul> 
        <li> <Link to='/dashboard'> dashboard </Link> </li>
        <li> <Link to='/upload'> upload </Link> </li>
        <li> <Link to='/profile'> profile </Link> </li>
      </ul>;

      return(
        <header className='header'>
          <h1>Sluggram</h1>
          <nav>
            { this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn}
          </nav>
          { this.props.loggedIn ?
            <button onClick={this.props.doLogout}> logout </button> : 
            undefined
          }
        </header>
      );
  }
}

const mapStateToProps = (state) => ({
  // vinicio - getting the truthy/falsy value of token
  loggedIn: !!state.token, 
});

const mapDispatchToProps = (dispatch) => ({
  doLogout : () => dispatch(authActions.logoutAction()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);