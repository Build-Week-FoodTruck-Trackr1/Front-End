import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodTruckCards from "./FoodTruckCards";



export default function FoodTruckList() {
  const [foodTruck, setFoodTruck] = useState([]);

  useEffect(() => {
    axios.get(`https://build-foodtruck-trackr1.herokuapp.com/`).then(response => {
      setFoodTruck(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  return (
    <div>
      {foodTruck.map(e => {
        return <FoodTruckCards char={e} key={e.name} />;
      })}
    </div>
  );
}
