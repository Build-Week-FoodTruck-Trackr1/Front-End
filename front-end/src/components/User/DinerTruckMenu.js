import React from "react";
import DinerHeader from '../headers/DinerHeader'
import { CardImg, MenuText, MenuH2, DinerBody } from '../../styled-components'
import { connect } from 'react-redux'

const DinerTruckMenu = props => {
  const id = props.match.params.id
  const singleTruck = props.foodTrucks.filter(t => t.id == id)
  const truck = singleTruck[0];

  return (
    <>
    <DinerHeader />
    <DinerBody>
      <CardImg src={truck.image_url} />
      <MenuText>Truck Name: {truck.name}</MenuText>
      <MenuText>
          CuisineType: {truck.categories.map(category => {
               return `${category.title} `
          })}
        </MenuText>
      <MenuText>Customer Rating: {truck.rating}</MenuText>
    </DinerBody>
    </>
  );
}

const mapStateToProps = state => {
  return{
      foodTrucks: state.foodTrucks
  }
}

export default connect(
  mapStateToProps,
  {}
)(DinerTruckMenu)
