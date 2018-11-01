import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import './App.css';



class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Route path="/" component={Links} />
              <Route path="/login" component={Login} />
              <Route path="/registration" component={Registration} />
          </div>
        </Router>
        )
  }
}

class Links extends Component {
    render() {
        return (
            <ul>
                <li>Login</li>
                <li>Registration</li>
            </ul>
        )
    }
}
export default App;
