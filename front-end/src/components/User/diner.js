import React, {useState, useEffect } from "react";
import ReactDOM from "react-dom"
import axiosWithAuth from "../axiosWithAuth";
import styled from "styled-components";

const Ft = styled.div`
     background: #ECA564;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:5%;
    margin-left: 60px;
    margin-right: 60px;
`;
const Photo = styled.img`
width: 30%;
margin: 20px 2.5%;
border-radius: 20px;`
const Para = styled.p`
margin-top: 50px;`

const Diner = () => {
    const [ truck, setTruck] = useState ([])
    const [ search, setSearch] = useState("")
useEffect( ()=>{
    axiosWithAuth().get ("/trucks")
    .then(response => {
        console.log(response)
        setTruck(response.data);
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
    truck.filter( data =>
    //  event.preventDefault()
    // axiosWithAuth().get("/trucks")
    //     .then(res => {
    //         console.log(res.data);
    //         setTruck(res.data)
    data.cuisineType === search)
    
}
return(
    <div className = "foodtruck">
      <input
       name="search"
       placeholder= "Search"
       onChange={handleChange}
       onSubmit={handleSubmit}
       /> 
       
        <h1></h1>
   {truck.map(data=> <Ft key={data.id}>
       <h1>{data.name}</h1>
       <Photo src= {data.imgUrl}></Photo>
       <h2>Cusine: {data.cuisineType}</h2>
       <Para>Customer Rating:{data.customerRatingAvg}</Para>
       <p>
       Location: {data.currentLocation}
       </p>
       <p>
       Departure: {data.currentDepartureTime}
       </p>
       <p>
       Arrival: {data.arrivalTime}
       </p>

   </Ft>)
     }

    </div>)

}
export default Diner