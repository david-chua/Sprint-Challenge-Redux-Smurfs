import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getSmurfs } from '../actions';

class SmurfsList extends React.Component{
  componentDidMount(){
    this.props.getSmurfs();
  }

  render(){
    console.log(this.props.smurfs)
    return(
      <div>
      <h1> Smurfs List </h1>
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
