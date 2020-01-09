import React from "react";
import styled from "styled-components";

export default function TruckCard(props) {


    return (
        <div className="character-card">
        
           
            <div>
              <div>Truck ID: {props.truck.id}</div>
              <div>Name: {props.truck.name}</div>
              <div>Gender: {props.truck.CusineType}</div>
              <div>Species: {props.truck.menuitems}</div>
             
            </div>
            
          
        </div>
      );
    }