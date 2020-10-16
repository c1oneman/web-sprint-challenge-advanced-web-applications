import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import BubblesPage from './components/BubblePage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to='/login'> Login </Link>
          </header>

          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/bubbles' component={BubblesPage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state =>{
  return{
    bubbles: state.bubbles
  }
}

export default connect(mapStateToProps, {})(App);