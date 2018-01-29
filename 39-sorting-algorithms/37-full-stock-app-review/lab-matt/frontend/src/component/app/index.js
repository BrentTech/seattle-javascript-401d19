import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../dashboard';
import Landing from '../landing';
import AuthForm from '../auth-form';
import AuthRedirect from '../auth-redirect';
import Header from '../header';
import { fetchProfile } from '../../action/profile';
import Profile from '../profile';


class App extends React.Component {
  componentDidMount() {
    let { loggedIn } = this.props;
    console.log('__Logged_In?__', loggedIn);
    if (loggedIn) {
      this.props.fetchMyProfile();
    }
  }
  
  render() {
    return (
      <div className='app'>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0" 
        />
        <BrowserRouter>
          <div>
            <nav>
              <h1> Trendly </h1>
            </nav>
            <Header />
            <Route exact path='*' component={AuthRedirect} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup' component={Landing} />
            <Route exact path='/login' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/profile' component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn : !!state.token,
});

const mapDispatchToProps = dispatch => ({
  fetchMyProfile : () => dispatch(fetchProfile()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);