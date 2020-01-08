import React, { useState } from "react";

const FoodTruckForm = ({ addNewTruck }) => {
 
  const [truck, setTruck] = useState({
    truckname: "",
    description: ""
  });

  
  const handleChanges = event => {
    
    setTruck({ ...truck, [event.target.name]: event.target.value });
  };

  
  const submitForm = event => {
    event.preventDefault();                                               
    addNewTruck(truck);

  
    setTruck({ truckname: "", cuisineType: "" });
  };
  console.log("truck state", truck);
  return (
    <form onSubmit={submitForm}>
     
      <label htmlFor="truck">Food Truck Name</label>
      <input
        id="truck"
        type="text"
        name="title"
        placeholder="Enter a Truck Name"
        onChange={handleChanges}
        value={truck.title}
      />
      
      <label htmlFor="cuisineType">Cuisine Type</label>
      <textarea
        id="cuisineType"
        name="cuisineType"
        placeholder="Add cuisineType here"
        onChange={handleChanges}
        value={truck.cuisineType}
      />
      <label htmlFor="truck">Menu Items</label>
      <textarea
        id="menuitems"
        name="menuitems"
        placeholder="Add Menu Items here"
        onChange={handleChanges}
        value={truck.menuitems}
      />
      <button type="submit">Add Food Truck</button>
    </form>
  );
};

export default FoodTruckForm;
