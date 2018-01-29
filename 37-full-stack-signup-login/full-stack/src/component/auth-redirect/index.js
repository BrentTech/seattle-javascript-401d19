import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'; 
import * as routes from '../../routes';

class AuthRedirect extends React.Component {
  render(){
    // vinicio - location and history comes from props directly
    //           token comes from the store
    let {location,history,token} = this.props;
    let {pathname} = location;
    let destinationRoute = null;

    if(pathname === routes.LOGIN_ROUTE || pathname === routes.SIGNUP_ROUTE || pathname === routes.ROOT_ROUTE){
      if(token){ 
        // vinicio - optional GET request
        destinationRoute = routes.DASHBOARD_ROUTE;
      }
    }
    else{ // vinicio - any other route
      if(!token)
        destinationRoute = routes.ROOT_ROUTE;
    }
     return(
       <div className='auth-redirect'>
        { destinationRoute ? <Redirect to={destinationRoute} />: undefined }
       </div>
     );
  }
}

const mapStateToProps = state => ({
  token : state.token,
});

export default connect(mapStateToProps)(AuthRedirect);