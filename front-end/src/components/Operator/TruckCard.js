import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const CardImg = styled.img`
  width: 200px;
  height: 200px;
  padding: 5px;
`;

const CardInfo = styled.div`
    tex-align: left;
    font-family: Nunito Sans
    font-weight: Extra Bold
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    color: #232429;
  `;

const Card = styled.div`
  width: 50vw;
  padding: 10px;
  box-shadow: 1px 1px 5px black;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  border: solid 2px #232429;
`;

const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`

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
        <Link to={`/operator/${props.truck.id}`}>Menu</Link>
        <CardButton>Delete</CardButton>
      </Card>
    </div>
  );
}