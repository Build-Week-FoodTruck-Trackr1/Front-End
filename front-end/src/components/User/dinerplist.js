import React from "react";

const dinerplist = props => {
  return (
    <div className="Truck-list">
      {props.truck_List.map(truck => (
        <div className="build" key={truck.id}>
          <h2>{truck.name}</h2>
          <p>{truck.cusine}</p>
          <p>{truck.customerRatingAvg}</p>
        </div>
      ))}
    </div>
  );
};

export default dinerplist; 