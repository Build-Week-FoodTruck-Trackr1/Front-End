import React from "react";
import styled from "styled-components";

export default function FoodTruckMenu(props) {
  return (
    <div>
      <img src={props.truck.imgUrl} />

      <div>Truck #: {props.truck.id}</div>
      <div>Truck Name: {props.truck.name}</div>
      <div>CuisineType: {props.truck.cuisineType}</div>
      <div>Customer Rating Average: {props.truck.customerRatingAvg} </div>

      <h2>Menu Items</h2>

      <div> itemName: Burrito</div>
      <div>itemDescription: </div>
      <div>itemPrice: $5.99</div>
    </div>
  );
}
