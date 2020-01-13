import React from "react";
import { TruckCardImg, CardInfo, Card, CardButton, ButtonContainer } from '../../styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTruck } from '../../actions'
import TruckModal from './TruckModal'

function TruckCard(props) {

  const deleteTruck = () => {
    props.deleteTruck(props.truck)
  }
  return (
    <div className="character-card">
      <Card>
        <TruckCardImg src={props.truck.imgUrl} />

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