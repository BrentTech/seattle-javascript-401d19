import React from 'react';
import { logoutAction } from '../../action/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    let { loggedIn, logout } = this.props;

    let JSXNotLoggedIn = 
      <ul>
        <li><Link to='/'> Home </Link></li>
        <li><Link to='/login'> Login </Link></li>
        <li><Link to='/signup'> Signup </Link></li>
      </ul>;

    let JSXLoggedIn = 
      <React.Fragment >
        <ul>
          <li><Link to='/dashboard'> Dashboard </Link></li>
          <li><Link to='/upload'> Upload </Link></li>
          <li><Link to='/profile'> Profile </Link></li>
          <li>
            {loggedIn ? <button onClick={logout}> logout </button> : null}
          </li> 
        </ul>
      </React.Fragment>;

    return(
      <header className='header'>
        <nav>
          {loggedIn ? JSXLoggedIn : JSXNotLoggedIn}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn : !!state.token,
});

const mapDispatchToProps = (dispatch) => ({
  logout : () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);