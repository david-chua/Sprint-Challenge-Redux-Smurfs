import React from 'react';
import { deleteSmurf } from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Smurf = props => {
  let smurfName;
  let smurfHeight;
  let smurfAge;
  let smurfId;
  let specificSmurf;


  if (props.match){
    let id = props.match.params.id;
    specificSmurf = props.smurfs.find(smurf => { return `${smurf.id }` === id})
  }

  if (specificSmurf){
    smurfName = specificSmurf.name,
    smurfAge = specificSmurf.age,
    smurfHeight = specificSmurf.height
    smurfId = specificSmurf.id
  }

  this.deleteSmurf = (e, id) => {
    e.preventDefault();
    props.deleteSmurf(props.id);
  }
  return (
    <div>
      { (specificSmurf)
      ? <div>
          <h3> {smurfName} </h3>
          <h3> {smurfAge} </h3>
          <h3> {smurfHeight} </h3>
          <button onClick={this.deleteSmurf}> delete Smurf </button>
        </div>
      : <div>
          <Link to={{pathname: `/smurfs/${props.id}`, state: { id: props.id } }}> <h3> {props.name} </h3></Link>
          <h3> {props.age} </h3>
          <h3> {props.height} </h3>
          <button onClick={this.deleteSmurf}> delete Smurf </button>
      </div>}
    </div>
  )
}

const mapStateToProps = function(state){
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {deleteSmurf})(Smurf);
