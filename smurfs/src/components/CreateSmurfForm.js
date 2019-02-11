import React from 'react';
import styled from 'styled-components';

import { connect } from "react-redux";
import { addSmurf } from '../actions';

export const MainFormDiv = styled.div`
  width: 500px;
  margin: 50px auto;
  padding: 30px;
  background: #ffffff;
  margin: 50px auto;
`;

export const FormTitle = styled.div`
  background: #00BBC4;
  text-transform: uppercase;
  font-family: sans-serif;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding: 20px;
  margin: -30px -30px 30px -30px;
`;

export const FormInput = styled.input`
  color: #00BBC4;
  outline: none;
  display: block;
  width: 100%;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin-bottom: 10px;
  font: 18px Arial, Helvetica, sans-serif;
  height: 45px;
  :: placeholder{
    color: #00BBC4;
  }
`;

export const FormButton = styled.button`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  margin-top: 26px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: white;
  background-color: #00BBC4;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
`;

class CreateSmurfForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      smurfData: {
        name: '',
        age: '',
        height: '',
      },
      error: ''
    };
  }

  handleChange = e => {
    this.setState({
      smurfData: {
        ...this.state.smurfData,
        [e.target.name]: e.target.value
      }
    });
  }

  addSmurf = e => {
    e.preventDefault();
    let newSmurfData = {
      name: this.state.smurfData.name,
      age: Number(this.state.smurfData.age),
      height: this.state.smurfData.height
    }

    if (!this.state.smurfData.name || !this.state.smurfData.age || !this.state.smurfData.height)
      return this.setState({error: "Please complete all the fields."})
    this.props.addSmurf(newSmurfData)
    this.setState({
      smurfData: {
        name: '',
        height: '',
        age: '',
      },
      error: ''
    })
    this.props.history.push('/');
  }

  render(){
    return (
      <MainFormDiv>
        <FormTitle>POST (add) a new smurf</FormTitle>
        <form onSubmit = {this.addSmurf}>
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.smurfData.name}
          />
          <FormInput
            type="text"
            name="height"
            placeholder="Height"
            onChange={this.handleChange}
            value={this.state.smurfData.height}
          />
          <FormInput
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.smurfData.age}
          />
          <FormButton className="quotes-btn" type="submit">
            POST smurf
          </FormButton>
        </form>
        {this.state.error ? (
          <div>
            <h1> {this.state.error}</h1>
          </div>
        ): null }
      </MainFormDiv>
    )
  }
}


export default connect(null, { addSmurf })(CreateSmurfForm);
