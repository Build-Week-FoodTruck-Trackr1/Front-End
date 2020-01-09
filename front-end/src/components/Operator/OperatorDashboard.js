
import axiosWithAuth from "../axiosWithAuth";
import React, { useEffect, useState } from "react";
import TruckCard from "./TruckCard"




const OperatorDashboard = () => {

  const [trucks , setTrucks] = useState([]);


  useEffect(() => {
    axiosWithAuth()
      .get("/trucks/owned")
      .then(response => {
        console.log(response.data.results);
        setTrucks(response.data.results);
      });
  }, []);

  return (
    <div>
      <h2>Operator Dashboard</h2>
   
      {trucks.map(truck => { 
        return <TruckCard key={truck.id} truck={truck}/>})}
        



    </div>
  );
      }

export default OperatorDashboard;
