import React from "react";
import styled from "styled-components";

const CardImg = styled.img`
    width: 200px;
    height: 200px;
  `;

  const CardInfo = styled.div`
    tex-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    color: #e2e25a;
  `;

  const Card = styled.div`
    width: 50vw;
    padding: 10px;
    box-shadow: 1px 1px 5px black;
    border-radius: 10px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    border: solid 2px #e2e25a;
  `;

export default function TruckCard(props) {


    return (
        <div className="character-card">
            <Card>
            <CardImg src={props.truck.imgUrl} />

            <CardInfo>
              <div>ID#: {props.truck.id}</div>
              <div>Truck Name: {props.truck.name}</div>
              <div>CuisineType: {props.truck.cuisineType}</div>
             
             
            </CardInfo>
            </Card>
            
          
        </div>
      );
    }