import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FormLabel, FormSpacing, TruckFormContainer, InputStyle, TextArea, TruckButton } from '../../styled-components'
import { addTruck } from "../../actions";
import OperatorHeader from "../headers/OperatorHeader";
import { MessageHeader } from "semantic-ui-react";

const FoodTruckForm = props => {
  const [truck, setTruck] = useState({
    truckname: "",
    cuisineType: "",
    menuitems: ""
  });

  const [message, setMessage] = useState({})

  const handleChanges = event => {
    setTruck({ ...truck, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addTruck({ ...truck, id: props.operator.id });
    setMessage({error: props.error, success: props.success})
    setTruck({ truckname: "", cuisineType: "" });
  };

  console.log(message)

  return (
    <>
      <OperatorHeader />
      <TruckFormContainer>
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
              <p class='success'>{message.success}</p>
              <p className='error'>{message.error}</p>
        </FormSpacing>
      </TruckFormContainer>
    </>
  );
};

const mapStateToProps = state => {
  return {
    operator: state.operator,
    success: state.success,
    error: state.error
  };
};

export default connect(
  mapStateToProps, 
  { addTruck }
)(FoodTruckForm);
