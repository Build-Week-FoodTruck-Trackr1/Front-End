import styled from "styled-components";
import axiosWithAuth from "../axiosWithAuth";
import React, { useEffect, useState } from "react";
import TruckCard from "./TruckCard"


const Body = styled.div`
background: #ECA564;
margin: 0;
padding: 0px;
`;

const MyH2 = styled.h2`
color: #e2e25a; 
font-family: 'Droid serif', serif; 
font-size: 36px; 
font-weight: 400; 
font-style: italic; 
line-height: 44px; 
margin: 0 0 12px; 
text-align: center;

`;
const MyH3 = styled.h3`
color: #e2e25a; 
font-family: 'Droid serif', serif; 
font-size: 36px; 
font-weight: 400; 
font-style: italic; 
line-height: 44px; 
margin: 0 0 12px; 
text-align: center;

`;

const OperatorDashboard = () => {

  const [trucks , setTrucks] = useState([]);


  useEffect(() => {
    axiosWithAuth()
      .get("/trucks/owned")
      .then(response => {
        console.log(response.data);
        setTrucks(response.data);
      });
  }, []);

  return (
    <Body>
      <MyH2>Operator Dashboard</MyH2>


      <MyH3> Your Trucks: </MyH3>
   
      {trucks.map(truck => { 
        return <TruckCard key={truck.id} truck={truck}/>})}
        



    </Body>
  );
      }

export default OperatorDashboard;
