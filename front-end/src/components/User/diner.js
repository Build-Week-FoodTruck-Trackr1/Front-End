import React, {useState, useEffect } from "react";
import axios from "axios";
import style from "styled-components";

const diner = () => {
    const [ truck, setTruck] = useState ({});
useEffect( ()=>{
    axios.get ();
    .then(response => {
        const foodTruck = response.data;
        setTruck(truck);
    })
    .catch(error => {
        console.log("Sorry, you've got an error", error)
    })
}, []);

return(
    <div className = "foodtruck">
        {trucks.map(food_truck, index) => {
            (
                <FoodTruckCard
                key= {index}
                name= {food_truck.name}
                cuisine={food_truck.cusine}
                customerRatingAvg={food_truck.customerRatingAvg}
                radSize 
                />
            )
        }}







    </div>
)



}