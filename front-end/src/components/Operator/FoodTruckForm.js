import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addTruck } from "../../actions";
import OperatorHeader from "../headers/OperatorHeader";

const FormLabel = styled.label`
 
  font-size:25px;
  margin: 10px;
  font-family: Nunito Sans
  font-weight: Extra Bold
  color: #232429;
`;
const FormSpacing = styled.form`
  display: flex;

  flex-direction: column;
`;

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eca564;

  display: flex;
  justify-content: center;
`;
const InputStyle = styled.input`
  color: #6fb03e;
  max-width: 450px;
  background: #f8f6ee;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 6px solid #232429;
`;
const TextArea = styled.textarea`

  color: #6fb03e
  max-width: 450px;
	background: #F8F6EE;
	padding: 10px;
	margin: 5px ;
	box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
	border-radius: 10px;
	border: 6px solid #232429;
`;

const TruckButton = styled.button`
  background: linear-gradient(to bottom, #f0c911 5%, #f2ab1e 100%);
  background-color: #f0c911;
  border-radius: 6px;
  border: 1px solid #232429;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #c92200;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ded17c;
`;

const FoodTruckForm = props => {
  const [truck, setTruck] = useState({
    truckname: "",
    cuisineType: "",
    menuitems: ""
  });

  const handleChanges = event => {
    setTruck({ ...truck, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addTruck({ ...truck, id: props.operator.id });
    setTruck({ truckname: "", cuisineType: "" });
  };

  return (
    <>
      <OperatorHeader />
      <FormContainer>
        <FormSpacing onSubmit={submitForm}>
          <FormLabel htmlFor="truckname">Food Truck Name</FormLabel>
          <InputStyle
            id="truckname"
            type="text"
            name="truckname"
            placeholder="Enter a Truck Name"
            onChange={handleChanges}
            value={truck.truckname}
          />

          <FormLabel htmlFor="cuisineType">Cuisine Type</FormLabel>
          <TextArea
            id="cuisineType"
            name="cuisineType"
            placeholder="Add cuisineType here"
            onChange={handleChanges}
            value={truck.cuisineType}
          />

          <TruckButton type="submit">Add Food Truck</TruckButton>
        </FormSpacing>
      </FormContainer>
    </>
  );
};

const mapStateToProps = state => {
  return {
    operator: state.operator,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { addTruck })(FoodTruckForm);
