import React, {useState, useEffect } from "react";
import ReactDOM from "react-dom"
import axiosWithAuth from "../axiosWithAuth";
import styled from "styled-components";

const Ft = styled.div`
     background: #ECA564;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    const [results, setResults]= useState([])
    const [ search, setSearch] = useState("")
useEffect( ()=>{
    axiosWithAuth().get ("/trucks")
    .then(response => {
        console.log(response)
        setTruck(response.data);
        setResults(response.data);
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
    setResults(
    truck.filter( data =>
    data.cuisineType.includes(search.toLowerCase())))
    
}
return(
    <div className = "foodtruck">
        <form
        onSubmit={handleSubmit}>
      <input
       name="search"
       placeholder= "Search"
       onChange={handleChange}
      
       /> 
      </form> 
        <h1></h1>
   {results.map(data=> <Ft key={data.id}>
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