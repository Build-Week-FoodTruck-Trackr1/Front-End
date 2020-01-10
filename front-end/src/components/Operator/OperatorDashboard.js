import styled from "styled-components";
import axiosWithAuth from "../axiosWithAuth";
import React, { useEffect, useState } from "react";
import TruckCard from "./TruckCard"
import OperatorHeader from '../headers/OperatorHeader'


const Body = styled.div`
height: 100vh;
background: #ECA564;
`;

const MyH2 = styled.h2`
color: #232429; 
font-family: Nunito Sans
font-weight: Extra Bold
font-size: 36px; 
 

line-height: 44px;  
text-align: center;
margin: 0 0 12px;

`;
const MyH3 = styled.h3`
color: #232429; 
font-family: Nunito Sans
font-weight: Extra Bold
font-size: 36px; 


line-height: 44px; 
text-align: center;
margin 0 0 12px;
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
    <>
      <OperatorHeader />
      <Body>
        <MyH2>Operator Dashboard</MyH2>


        <MyH3> Your Trucks: </MyH3>
    
        {trucks.map(truck => { 
          return <TruckCard key={truck.id} truck={truck}/>})}
          



      </Body>
    </>
  );
      }

export default OperatorDashboard;
