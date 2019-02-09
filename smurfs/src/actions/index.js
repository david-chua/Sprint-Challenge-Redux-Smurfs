import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const SMURF_ADDED = "SMURF_ADDED";
export const ADDING_SMURF = "ADDING_SMURF";
export const ERROR = "ERROR";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export function getSmurfs(){
  return dispatch => {
    dispatch({type: FETCHING_SMURFS});
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        dispatch({
          type: SMURFS_FETCHED,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: "Unable to retrive smurfs"
        });
      });
  };
};

export function addSmurf(smurf){
  return dispatch => {
    dispatch({type: ADDING_SMURF });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        dispatch({
          type: SMURF_ADDED,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: "Unable to add Smurf"
        });
      });
  };
};
