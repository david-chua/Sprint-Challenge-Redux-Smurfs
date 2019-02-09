import React from 'react';

const Smurf = props => {
  return (
    <div>
      <h3> {props.name} </h3>
      <h3> {props.age} </h3>
      <h3> {props.height} </h3>
    </div>
  )
}

export default Smurf;
