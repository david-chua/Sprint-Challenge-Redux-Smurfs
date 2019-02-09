import React, { Component } from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SmurfsList from './SmurfsList';
import Smurf from './Smurf';
import Navigation from './Navigation';
import CreateSmurfForm from './CreateSmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact path='/'
          component ={ SmurfsList} />
        <Route
          path="/post"
          component= { CreateSmurfForm } />
        <Route
          exact path="/smurfs/:id"
          render={(props) => <Smurf
          { ...props }
          smurfs = {this.props.smurfs}/>}
        />
      </div>

    );
  }
}

const mapStateToProps = function(state){
  return{
    smurfs: state.smurfs
  }

}



export default withRouter(connect(mapStateToProps)(App));
