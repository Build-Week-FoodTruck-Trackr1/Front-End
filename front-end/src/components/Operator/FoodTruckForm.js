import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../axiosWithAuth";

const FormContainer = styled.div`
  width: 460px;
  background: #eca564;
  color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px #e68959;
`;
const InputStyle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6fb03e;
`;
const TextArea = styled.textarea`
  display:flex;
  flex-direction:column
 
  color: #6fb03e
  display: block;
`;

const FoodTruckForm = () => {
  const [truck, setTruck] = useState({
    truckname: "",
    cuisineType: "",
    menuitems: ""
  });

  //   useEffect( ()=>{
  // axiosWithAuth().get ("/trucks/owned")
  // .then(response =>{
  //   const foodTruck = response.data;
  //   setTruck(truck)
  // })
  // .catch(error => {
  // ?

  const handleChanges = event => {
    setTruck({ ...truck, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();

    setTruck({ truckname: "", cuisineType: "", menuitems: "" });
  };

  console.log("truck state", truck);
  return (
    <FormContainer>
      <form onSubmit={submitForm}>
        <label htmlFor="truckname">Food Truck Name</label>
        <InputStyle
          id="truckname"
          type="text"
          name="truckname"
          placeholder="Enter a Truck Name"
          onChange={handleChanges}
          value={truck.truckname}
        />

        <label htmlFor="cuisineType">Cuisine Type</label>
        <TextArea
          id="cuisineType"
          name="cuisineType"
          placeholder="Add cuisineType here"
          onChange={handleChanges}
          value={truck.cuisineType}
        />
        <label htmlFor="truck">Menu Items</label>
        <TextArea
          id="menuitems"
          name="menuitems"
          placeholder="Add Menu Items here"
          onChange={handleChanges}
          value={truck.menuitems}
        />
        <button type="submit">Add Food Truck</button>
      </form>
    </FormContainer>
  );
};

export default FoodTruckForm;
