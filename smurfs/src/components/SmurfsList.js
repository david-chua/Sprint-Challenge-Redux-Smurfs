import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getSmurfs } from '../actions';

import Smurf from './Smurf.js';

class SmurfsList extends React.Component{
  componentDidMount(){
    this.props.getSmurfs();
  }

  render(){
    return(
      <div>
      <h1> Smurfs List </h1>
      { this.props.smurfs.map(smurf => {
        return <Smurf name={smurf.name} height={smurf.height } age= {smurf.age} />
      })}
      </div>
    );
  };
};

const mapStateToProps = function(state){
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}


export default connect(mapStateToProps, { getSmurfs } )(SmurfsList);
