import React from "react";

const FoodTruck = props => {
  return (
    <div className="truck-list">
      {props.trucks.map(truck => (
        <div key={truck.id}>
          <h2>{truck.title}</h2>
          <p>{truck.cuisineType}</p>
          <p>{truck.menuitems}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodTruck;


