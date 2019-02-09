import React from 'react';
import { deleteSmurf } from '../actions';

import { connect } from 'react-redux';

const Smurf = props => {

  this.deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(props.id);
  }

  return (
    <div>
      <h3> {props.name} </h3>
      <h3> {props.age} </h3>
      <h3> {props.height} </h3>
      <button onClick={this.deleteSmurf}> delete Smurf </button>
    </div>
  )
}

export default connect(null, {deleteSmurf})(Smurf);
