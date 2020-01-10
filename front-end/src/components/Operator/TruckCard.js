import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTruck } from '../../actions'
import TruckModal from './TruckModal'
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
    color: #000;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding 0 1%;
`

function TruckCard(props) {

  const deleteTruck = () => {
    props.deleteTruck(props.truck)
  }
  return (
    <div className="character-card">
      <Card>
        <CardImg src={props.truck.imgUrl} />

        <CardInfo>
          <div>ID#: {props.truck.id}</div>
          <div>Truck Name: {props.truck.name}</div>
          <div>CuisineType: {props.truck.cuisineType}</div>
          <ButtonContainer>
            <Link className='menu-link' to={`/operator/${props.truck.id}`}>Menu</Link>
            <CardButton onClick={deleteTruck}>Delete</CardButton>
            <TruckModal truck={props.truck} />
          </ButtonContainer>
        </CardInfo>
      </Card>
    </div>
  );
}

export default connect(
  null,
  {deleteTruck}
)(TruckCard)