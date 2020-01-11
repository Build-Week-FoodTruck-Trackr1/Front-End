import React from "react";
import { TruckCardImg, CardInfo, Card, CardButton, ButtonContainer } from '../../styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTruck } from '../../actions'

const DinerCard = props => {

  const deleteTruck = () => {
    props.deleteTruck(props.truck)
  }
  return (
    <div className="character-card">
      <Card>
        <TruckCardImg src={props.truck.image_url} />

        <CardInfo>
          <div>Truck Name: {props.truck.name}</div>
          <div>Cuisine Type: {props.truck.categories.map(category => {
               return `${category.title} `
          })}</div>
          <div>Customer Rating: {props.truck.rating}</div>
          <ButtonContainer>
            <Link className='menu-link' to={`/diner/trucks/${props.truck.id}`}>View More</Link>
            <CardButton onClick={deleteTruck}>Add To Favorites</CardButton>
          </ButtonContainer>
        </CardInfo>
      </Card>
    </div>
  );
}

export default connect(
  null,
  {}
)(DinerCard)