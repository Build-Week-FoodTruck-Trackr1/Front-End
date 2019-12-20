import React from "react";


export default function FoodTruck(props) {
  return (
    <div>
      <div>
        <h1>{props.e.name}</h1>
        <img src={props.e.image} />
        <div> food type: {props.e.type}</div>
        <div> {props.e.rating}</div>
        <div>Average Rating: {props.e.average}</div>
        <button> More Info </button>
      </div>
    </div>
  );
}


