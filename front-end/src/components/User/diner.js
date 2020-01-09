import React, {useState, useEffect } from "react";
import axios from "axios";
import style from "styled-components";

const diner = () => {
    const [ truck, setTruck] = useState ({})
    const [ search, setSearch] = useState("")
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
const handleChange= event =>{
    setSearch(event.target.value)
    console.log(event)
}
const handleSubmit= event =>{
    event.preventDefault()
    axios.get()
        .then(res => {
            console.log(res.data.message);
            setTruck(res.data.message)
        })
    
}
return(
    <div className = "foodtruck">
        <form onSubmit={handelSubmit}></form>
        <input
        placeholder="search"
        name= "name"
        onChange= {handleChange}
        />
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