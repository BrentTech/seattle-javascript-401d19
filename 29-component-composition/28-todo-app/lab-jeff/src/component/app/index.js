import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from '../landing';
import Dashboard from '../dashboard';

//Props : NO
//UI State vs App State vs NO State : NO State  
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1> Hello </h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
